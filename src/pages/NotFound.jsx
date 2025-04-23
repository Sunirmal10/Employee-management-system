import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-baseline gap-4 mx-5 mt-5'>
      <span className='text-4xl font-bold text-gray-600'>404</span>
      <span className='font-semibold text-gray-600'>No page found.</span>
      <NavLink to={"/"}>Go back</NavLink>
    </div>
  )
}

export default NotFound