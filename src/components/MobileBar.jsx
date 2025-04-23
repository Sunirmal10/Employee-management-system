import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MobileBar = () => {
  return (
    <div className='flex sticky top-0 right-0 left-0 md:hidden w-screen bg-white p-2 justify-between items-center h-12 shadow-sm z-10'>
        <Link style={{textDecoration: 'none'}} to={"/"}>        
        <span className='logo text-lime-600 ml-1'>EMS</span>
        </Link>
     
        <span className='rounded-full text-xl border-none p-0 mr-1 text-gray-400'>
        <FaUserCircle />
        </span>
       
    </div>
  )
}

export default MobileBar