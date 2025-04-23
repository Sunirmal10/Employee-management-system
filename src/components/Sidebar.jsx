import React from 'react'
import { MdLogout } from 'react-icons/md'
import { sidebarItems } from '../constants/Data'
import { FaCaretLeft, FaCaretRight, FaUserCircle } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Sidebar = ({showSidebar, setShowSidebar}) => {
  return (
    <div className='relative top-0 bottom-0 z-10 hidden bg-sky-400 md:block'>
      {/* Slim Bar  */}
      <section className={`flex flex-col items-center fixed top-0 bg-white dark:text-gray-400 dark:bg-gray-800 left-0 z-20 p-1 w-12 h-screen ${!showSidebar && "shadow"}`}>
      <header className='flex items-center gap-0.5 mt-2'>
      <span className='logo text-lime-600 ml-1 mt-0.5'>EMS</span>
        <button  className='text-gray-300 hover:scale-[1.2]' onClick={()=> setShowSidebar(!showSidebar)}>
      { !showSidebar && <FaCaretRight className='' />}
        </button>
      </header>
       
        <div className='absolute top-20 flex flex-col text-xl gap-4'>
          {
            sidebarItems.map((item, i)=> (
              <NavLink to={item.path} className={ ({isActive})=>( item.path !== "#" && isActive ? 'flex justify-start pl-2 items-center hover:bg-gray-200 h-8 cursor-pointer !no-underline !text-black rounded-md w-8 transition-all duration-100 ease-in-out bg-gray-200' : 'flex justify-start pl-2 items-center hover:bg-gray-200 h-8 cursor-pointer !text-black rounded-md w-8 !no-underline')} key={i}>
              {item.icon}
            </NavLink>
            ))
          }
        </div>
        <div className='absolute bottom-0 my-2.5 cursor-pointer'>
  
                <FaUserCircle className='rounded-full text-xl border-none p-0 text-gray-400' />
            
        </div>
       
      </section>
      {/* Expanded */}
      <section className={ `flex flex-col fixed top-0 z-10 p-1 w-44 bg-white dark:bg-slate-800 transition-all duration-500 ease-in-out h-screen ml-12 font-semibold ${showSidebar ?  "translate-x-0 shadow" : "-translate-x-full"}`}>
      <header className='flex items-center w-full justify-between mt-2'>
      <span className='mb-0.5'>Employee Database</span>
        <button  className='text-gray-300 hover:scale-[1.4]' onClick={()=> setShowSidebar(!showSidebar)}>
      { showSidebar && <FaCaretLeft className='text-xl' />}
        </button>
      </header>
       
        <div className='absolute top-20 flex flex-col w-42 text-sm gap-4'>
          {
            sidebarItems.map((item, i)=> (
              <NavLink to={item.path} className={ ({isActive})=>( item.path !== "#" && isActive ? 'flex justify-start pl-2 items-center hover:bg-gray-200 h-8 cursor-pointer !no-underline !text-black rounded-md w-full transition-all duration-100 ease-in-out bg-sky-100' : 'flex justify-start pl-2 items-center hover:bg-gray-200 h-8 cursor-pointer !text-black rounded-md w-full !no-underline')} key={i}>
                {item.name}
              </NavLink>
            ))
          }
        </div>
        <div className='flex justify-between w-42 items-center absolute bottom-0 my-1.5 hover:bg-gray-200 rounded cursor-pointer pl-2'>
       <span>Logout</span>
       <MdLogout className='mr-1 border rounded-md w-8 h-8 p-1.5' />
        </div>
      </section>
    </div>
  )
}

export default Sidebar