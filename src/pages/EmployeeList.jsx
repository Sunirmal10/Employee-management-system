import React, { useEffect, useState } from 'react'
import { deleteUser, readUser, searchUser } from '../redux/features/userDetailsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteOutline, MdModeEditOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import SingleEmployee from '../components/SingleEmployee';
import { IoMdSearch } from 'react-icons/io';

const EmployeeList = () => {

     const [showSingleUser, setShowSingleUser] = useState(false);
      const [id, setId] = useState(null);
      const [expLevel, setExpLevel] = useState("")
    
      const [radioData, setRadioData] = useState("");
      // const [deptData, setDeptData] = useState("");
      const [searchInput, setSearchInput] = useState("")
    
      const dispatch = useDispatch();
    
      const { users, loading, searchInputData } = useSelector((state) => state.app);
    
      useEffect(() => {
        dispatch(readUser());
      }, []);

       
      
      
        const NumberOfUsers = useSelector((state) => state.app.users.length)
      
      
        useEffect(() => {
      
          dispatch(searchUser(searchInput))
        
        }, [searchInput])
    
      if (loading) {
        return (
          <div
            className=" d-flex ml-40 w-full mt-5 spinner-border text-secondary"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        );
      }
  return (
    <div  className='flex flex-col w-full gap-2 items-start md:w-lg p-2 md:ml-4 lg:ml-8 mb-14 md:mb-0'>
        <span className='flex w-full text-2xl font-semibold'>
            <span>

            Employees List
            </span>
            
            </span>
            {/* filters div */}
            <div className="flex flex-col items-baseline gap-3 p-1 my-2">
                <strong className='text-lg'>FILTERS:</strong>
                {/* search filter  */}
                <form className="d-flex" role="search"
                  onSubmit={(e)=> e.preventDefault()}
                  >
                    <input className="form-control me-2" type="search" placeholder="Search User" aria-label="Search"
                    onChange={(e) => (setSearchInput(e.target.value))}
                    value={searchInput}
                    />
                    <button className="btn btn-outline-success" type="submit">
                    <IoMdSearch className='' />
                    </button>
                  </form>
{/* Gender filters  */}
<span className='flex gap-2'>
  <strong>Gender:</strong>
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
{/* departments fiter  */}
{/* <span className='flex gap-2.5 md:gap-1.5 flex-wrap'>
  <strong>Department:</strong>
<input
        className="form-check-input"
        name="gender"
        checked={deptData === ""}
        type="radio"
        onChange={() => setDeptData("")}
      />
      <label className="form-check-label">All</label>
      <input
        className="form-check-input"
        name="gender"
        checked={deptData === "tech"}
        value="tech"
        type="radio"
        onChange={(e) => setDeptData(e.target.value)}
      />
      <label className="form-check-label">Tech</label>
      <input
        className="form-check-input"
        name="gender"
        checked={deptData === "hr"}
        value="hr"
        type="radio"
        onChange={(e) => setDeptData(e.target.value)}
      />
      <label className="form-check-label">HR</label>
    
      <input
        className="form-check-input"
        name="gender"
        checked={deptData === "finance"}
        value="finance"
        type="radio"
        onChange={(e) => setDeptData(e.target.value)}
      />
      <label className="form-check-label">Finance</label>
      <input
        className="form-check-input"
        name="gender"
        checked={deptData === "it"}
        value="it"
        type="radio"
        onChange={(e) => setDeptData(e.target.value)}
      />
      <label className="form-check-label">IT</label>
      <input
        className="form-check-input"
        name="gender"
        checked={deptData === "operations"}
        value="operations"
        type="radio"
        onChange={(e) => setDeptData(e.target.value)}
      />
      <label className="form-check-label">Operations</label>
      
</span> */}
{/* experience filter */}
<div className="mb-3 w-36">
      <label htmlFor="experience" className="form-label">
        <strong>Experience:</strong>
      </label>
      <select
        name="experience"
        className="form-select"
        value={expLevel}
        onChange={(e)=>setExpLevel(e.target.value)}
      >
        <option value="">-- All --</option>
        <option value="junior">Junior</option>
        <option value="mid-level">Mid-Level</option>
        <option value="senior">Senior</option>
        <option value="executive">Executive</option>
        
      </select>
      </div>

        </div>

            <table className=" border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-2 border-b">ID</th>
            <th className="py-2 px-2 border-b">Name</th>
            <th className="py-2 px-2 border-b hidden lg:block">Email</th>

            <th className="py-2 px-2 border-b">Gender</th>
            <th className="py-2 px-2 border-b hidden md:block">Dept.</th>
            <th className="py-2 px-2 border-b ">Exp.</th>          
            {/* <th className="py-2 px-2 border-b">Edit</th> */}
            <th className="py-2 md:px-2 border-b">Delete</th>
           
          </tr>
        </thead>
        <tbody>

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
             return expLevel !== "" ? user.experience === expLevel
             : user
            })
            .filter((user) => {
              if (radioData === "male") {
                return user.gender === radioData;
              } else if (radioData === "female") {
                return user.gender === radioData;
              } else return user;
            })
            // .filter((user) => {
            //   if (deptData === "tech") {
            //     return user.department === deptData;
            //   } else if (deptData === "hr") {
            //     return user.department === deptData;
            //   } else if (deptData === "finance") {
            //     return user.department === deptData;
            //   } else if (deptData === "it") {
            //     return user.department === deptData;
            //   } else if (deptData === "operations") {
            //     return user.department === deptData;
            //   } else return user;
            // })
          .map((user, i) => (
            <tr key={i} className="text-center border border-gray-500 cursor-pointer hover:bg-sky-100"
            onClick={() => {
                setShowSingleUser(true);
                setId(user.id);
              }}
            >
              <td className="py-2 px-2">{user.id}</td>
              <td className="py-2 px-2">{user.name}</td>
              <td className="py-2 px-2 hidden lg:block">{user.email.toLowerCase()}</td>

              <td className="py-2 px-2">{user.gender}</td>
              <td className="py-2 px-2 text-xs hidden md:block">{user.department.toUpperCase()}</td>
             
              <td className="py-2 px-2 ">{user.experience}</td>
             
              {/* <td className="py-2 px-2">
              <Link to={`/edit/${user.id}`} className="btn btn-secondary btn-sm">
              <MdModeEditOutline className="" />
            </Link>
              </td> */}
              <td className="py-2 md:px-2">
              <button
                           className="btn btn-danger btn-sm"
                           onClick={() => dispatch(deleteUser(user.id))}
                         >
                           <MdDeleteOutline className="" />
                         </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {
        showSingleUser && (
            <SingleEmployee
              id={id}
              showSingleUser={showSingleUser}
              setShowSingleUser={setShowSingleUser}
            />
          ) 
      }
    </div>
  )
}

export default EmployeeList