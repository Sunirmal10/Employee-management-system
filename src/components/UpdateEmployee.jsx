import React, { useEffect, useState } from 'react'
import { updateUser } from '../redux/features/userDetailsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateEmployee = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [updateUserData, setUpdateUserData] =useState({});
    
    const {users} = useSelector((state) => state.app);
    



    const updateUserDataFunction = (e) => { 
        setUpdateUserData({ ...updateUserData, [e.target.name]: e.target.value });
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser(updateUserData));
        navigate("/employees");
    
    }

    useEffect(() => {
        if(id) {
            const user = users.filter((user) => user.id === id);
            setUpdateUserData(user[0]);
        }
    
    }, [])


  return (
    <div className='flex flex-col items-center justify-center md:w-lg p-2 md:ml-4 lg:ml-8 mb-14 md:mb-0'>
          <form className="flex flex-col gap-2 w-full"  onSubmit={(e)=>handleUpdate(e)} >
        <span className='flex text-2xl font-semibold'>Update Your Data:</span>
    <div className="mb-3">
      <label className="form-label">Name</label>
      <input
        type="text"
        name="name"
        className="form-control"
        value={updateUserData && updateUserData.name}
        onChange={(e)=>updateUserDataFunction(e)}
        required
      />
      </div>
  
    
    <div className="mb-3">
      <label className="form-label">Email</label>
      <input
        type="email"
        name="email"
        className="form-control"
        value={updateUserData && updateUserData.email}
        onChange={(e)=>updateUserDataFunction(e)}
        required
      />
    </div>
    <div className="mb-3">
      <label className="form-label">Age</label>
      <input
        type="number"
        name="age"
        className="form-control"
        value={updateUserData && updateUserData.age}
        onChange={(e)=>updateUserDataFunction(e)}
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
        value={updateUserData && updateUserData.department}
        onChange={(e)=>updateUserDataFunction(e)}
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
        value={updateUserData && updateUserData.experience}
        onChange={(e)=>updateUserDataFunction(e)}
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
        checked={updateUserData && updateUserData.gender === "male"}
        type="radio"
        value={updateUserData && updateUserData.gender}
        onChange={(e)=>updateUserDataFunction(e)}
        required
      />
      <label className="form-check-label">Male</label>
    </div>
    <div className="flex gap-2 mb-3 my-2">
      <input
        className="form-check-input border-primary"
        name="gender"
        checked={updateUserData && updateUserData.gender === "female"}
        type="radio"
        value={updateUserData && updateUserData.gender}
        onChange={(e)=>updateUserDataFunction(e)}
      />
      <label className="form-check-label">Female</label>
    </div>

    <button type="submit" className="btn w-50 btn-primary">
      Update
    </button>
  </form>
    </div>
  )
}

export default UpdateEmployee