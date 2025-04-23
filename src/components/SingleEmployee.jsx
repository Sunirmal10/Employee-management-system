import React from "react";
import { IoClose } from "react-icons/io5";
import {
  MdDeleteOutline,
  MdModeEditOutline,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  
  deleteUser,
  
} from "../redux/features/userDetailsSlice";

const SingleEmployee = ({ id, setShowSingleUser }) => {
  const { users } = useSelector((state) => state.app);

  const dispatch = useDispatch();

  const user = users.find((user) => user.id === id);

  // find gives an user object
  // if you use filter, it will give an array of user object i.e. then you have to use user[0].name, etc....

  if (!user) {
    setShowSingleUser(false);
  }

  return (
    <main className="flex flex-col fixed top-0 left-0 right-0 bottom-0 w-screen h-screen items-center justify-center bg-gray-500/80 z-20">
      <div className="card mx-auto md:w-lg md:aspect-video">
        <div className="card-body d-flex flex-column relative align-items-start gap-3">
          <h5 className="card-title">{user.name}</h5>
          <strong className="card-text">Email: {user.email}</strong>
          <strong className="card-text">Gender: {user.gender} </strong>
          <strong className="card-text">Age: {user.age} </strong>
          <strong className="card-text">Department: {user.department} </strong>
          <strong className="card-text">Experience: {user.experience} </strong>
          <span className="d-flex gap-3">
            {/* <Link to={"#"} className="btn btn-primary"> View</Link> */}
            <Link to={`/edit/${user.id}`} className="btn btn-secondary">
              <MdModeEditOutline className="" />
            </Link>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(deleteUser(user.id))}
            >
              <MdDeleteOutline className="" />
            </button>
            <button
              className="btn btn-sm btn-danger absolute top-2 right-2"
              onClick={() => setShowSingleUser(false)}
            >
              <IoClose className="" />
            </button>
           
          </span>
        </div>
      </div>
    </main>
  );
};

export default SingleEmployee;
