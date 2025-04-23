import React, { useEffect } from 'react'
import { IoMdSearch } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchUser } from '../redux/features/userDetailsSlice'


const Navbar = () => {

  const [searchInput, setSearchInput] = React.useState("")

  const dispatch = useDispatch()

  const NumberOfUsers = useSelector((state) => state.app.users.length)


  useEffect(() => {

    dispatch(searchUser(searchInput))
  
  }, [searchInput])

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}>CRUD</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}>Create Post</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/read"}>All Post ({NumberOfUsers})</Link>
        </li>
    

    
     
      </ul>
      {/* Search Bar */}
      <form className="d-flex" role="search"
      onSubmit={(e)=> e.preventDefault()}
      >
        <input className="form-control me-2" type="search" placeholder="Search User" aria-label="Search"
        onChange={(e) => (setSearchInput(e.target.value))}
        value={searchInput}
        />
        <button className="btn btn-outline-success" type="submit">
        <IoMdSearch className='mb-1' />
        </button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar