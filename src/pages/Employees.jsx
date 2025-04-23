import React, { useEffect, useState } from "react";
import { MdDeleteOutline, MdModeEditOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, readUser } from "../redux/features/userDetailsSlice";
import SingleEmployee from "../components/SingleEmployee";
import { IoClose } from "react-icons/io5";

const Employees = () => {
  const [showSingleUser, setShowSingleUser] = React.useState(false);
  const [id, setId] = React.useState(null);

  const [radioData, setRadioData] = useState("");

  const dispatch = useDispatch();

  const { users, loading, searchInputData } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(readUser());
  }, []);

  if (loading) {
    return (
      <div
        className=" d-flex mx-5 mt-5 spinner-border text-secondary"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div className="d-flex gap-2">
      <aside
        className="d-flex card-list flex-column align-items-center gap-1 bg-light px-1"
        style={{ width: "16rem" }}
      >
        <div className="" style={{ width: "100%", position: "sticky", top: 0, zIndex: 1, backgroundColor: "white", boxShadow: "0 0 5px rgba(0,0,0,0.1)", padding: "10px" }}>
        <h5 className="">User Details</h5>
        <span className="d-flex gap-2 p-1">
        <input
        className="form-check-input"
        name="gender"
        checked={radioData === ""}
        type="radio"
        onChange={() => setRadioData("")}
      />
      <label className="form-check-label">All</label>
      <input
        className="form-check-input"
        name="gender"
        checked={radioData === "male"}
        value="male"
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label className="form-check-label">Male</label>
      <input
        className="form-check-input"
        name="gender"
        value="female"
        checked={radioData === "female"}
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label className="form-check-label">Female</label>
        </span>
        </div>
      
        {users?.filter((user) => {
              if (searchInputData.length === 0) {
                return user;
              } else {
                return user.name
                  .toLowerCase()
                  .includes(searchInputData.toLowerCase());
              }
            })
            .filter((user) => {
              if (radioData === "male") {
                return user.gender === radioData;
              } else if (radioData === "female") {
                return user.gender === radioData;
              } else return user;
            })
        .map((user, i) => (
          <div
            className={
              user.id === id
                ? "card w-100 mx-auto list-user bg-warning"
                : "card w-100 mx-auto list-user"
            }
            key={i}
            onClick={() => {
              setShowSingleUser(true);
              setId(user.id);
            }}
          >
            <div className="card-body d-flex align-items-center justify-content-between">
              <span className="card-title">
                {user.name.length > 15
                  ? user.name.slice(0, 15) + "..."
                  : user.name}
              </span>

              <span className="d-flex gap-2">
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteUser(user.id))}
                >
                  <IoClose className="mb-1" />
                </button>
              </span>
            </div>
          </div>
        ))}
      </aside>
      <section className="single-section">
        {showSingleUser ? (
          <SingleEmployee
            id={id}
            showSingleUser={showSingleUser}
            setShowSingleUser={setShowSingleUser}
          />
        ) : (
          <div className="empty-card">
            
              <h5 className="card-title">Click on any user to see details</h5>
      
          </div>
        )}
      </section>
    </div>
  );
};

export default Employees;
