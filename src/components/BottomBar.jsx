import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { sidebarItems } from '../constants/Data.jsx'
import { NavLink } from 'react-router-dom'

const BottomBar = () => {
  return (
    <div className='flex md:hidden w-full fixed bottom-0 left-0 right-0 h-14 px-2 bg-white dark:bg-slate-800 dark:text-white justify-between items-center border-t-2 text-lg border-gray-300 z-20'>
       {
        sidebarItems?.map((item, i)=> (
            <NavLink to={item.path} key={i}
            className={( { isActive } ) => ( item.path !== "#" && isActive ? 'flex flex-col items-center text-xl !no-underline p-1 border-0 rounded !text-black bg-gray-300 w-12' : 'flex flex-col items-center text-xl p-1 border-0 !text-black dark:text-white rounded w-12 !no-underline' )}
            >
                {item?.icon}
                <span className='text-xs'>{item?.name.slice(0,4)}..</span>
            </NavLink>
        ))
       }
        </div>
  )
}

export default BottomBar