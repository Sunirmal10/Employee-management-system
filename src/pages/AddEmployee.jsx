import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/features/userDetailsSlice';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {

    const [user, setUser] = useState({});

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const getUserData = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });

        console.log(user);

      };

      const handleSubmit = (e) => {

        e.preventDefault();

        dispatch(createUser(user));

        console.log(user, "user data");

        navigate("/employees");

     
      };

  return (
    <div className='flex flex-col items-center justify-center w-screen md:w-full p-2 md:ml-4 lg:ml-8 mb-14 md:mb-0'>
          <form className="flex flex-col gap-2 w-full" onSubmit={(e)=>handleSubmit(e)} >
        <span className='flex text-2xl font-semibold'>Fill Your Data:</span>
    <div className="mb-3">
      <label className="form-label">Name</label>
      <input
        type="text"
        name="name"
        className="form-control"
        onChange={(e)=>getUserData(e)}
        required
      />
      </div>
  
    
    <div className="mb-3">
      <label className="form-label">Email</label>
      <input
        type="email"
        name="email"
        className="form-control"
        onChange={(e)=>getUserData(e)}
        required
      />
    </div>
    <div className="mb-3">
      <label className="form-label">Age</label>
      <input
        type="number"
        name="age"
        className="form-control"
        onChange={(e)=>getUserData(e)}
        required
      />
       </div>
    {/* Department and experience */}
      <span className="flex flex-col md:flex-row w-full gap-2 md:gap-4">
        {/* Departments */}
      <div className="mb-3 w-36">
      <label htmlFor="department" className="form-label">Department</label>
      <select
        name="department"
        className="form-select"
        onChange={(e)=>getUserData(e)}
      >
        <option value="">-- Choose --</option>
        <option value="tech">Tech</option>
        <option value="it">IT</option>
        <option value="operations">Operations</option>
        <option value="hr">HR</option>
        <option value="finance">Finance</option>
      </select>
      </div>
      {/* Experiece  */}
      <div className="mb-3 w-36">
      <label htmlFor="experience" className="form-label">Experience</label>
      <select
        name="experience"
        className="form-select"
        onChange={(e)=>getUserData(e)}
      >
        <option value="">-- Choose --</option>
        <option value="junior">Junior</option>
        <option value="mid-level">Mid-Level</option>
        <option value="senior">Senior</option>
        <option value="executive">Executive</option>
        
      </select>
      </div>
  
      </span>

      {/* Genders  */}
   
    <strong>Gender:</strong>
    <div className="flex gap-2 mb-3 my-2">
      <input
        className="form-check-input border-primary"
        name="gender"
        value="male"
        type="radio"
        onChange={(e)=>getUserData(e)}
        required
      />
      <label className="form-check-label">Male</label>
    </div>
    <div className="flex gap-2 mb-3 my-2">
      <input
        className="form-check-input border-primary"
        name="gender"
        value="female"
        type="radio"
        onChange={(e)=>getUserData(e)}
      />
      <label className="form-check-label">Female</label>
    </div>

    <button type="submit" className="btn w-50 btn-primary">
      Submit
    </button>
  </form>
    </div>

  )
}

export default AddEmployee