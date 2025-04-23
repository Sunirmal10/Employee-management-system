import React from 'react'

import { dashBoardWidgets } from '../constants/Data'

import Pie from '../components/Pie'
import BarChartComp from '../components/BarChartComp'
import { useSelector } from 'react-redux'


const Dashboard = () => {
  const { users } = useSelector((state) => state.app);
  return (
    <div className='flex flex-col gap-3 p-2 mb-14 md:mb-0'>
      <span className='flex text-2xl font-semibold'>DASHBOARD</span>
      {/* four tabs wrapper */}
      <div className='flex flex-col md:flex-row w-full justify-evenly gap-2'>
        {/* individual tab/card  */}
        {
          dashBoardWidgets.map((item,i)=> (
            <div className={`flex rounded-md md:rounded-xl flex-col justify-center gap-2 md:justify-between p-2  md:p-4 cursor-pointer w-full md:w-[7.5rem] h-20 md:h-24 lg:w-44 xl:w-[16.8rem] lg:h-32 shadow ${item.color}`} key={i}>
            <span className='text-md lg:text-xl font-semibold mx-1'>{item.name}</span>
            <span className='flex justify-between items-center mx-1'>
              <span className='font-semibold text-lg lg:text-2xl ml-1 '>{item.name === "Employees" ? users?.length : item.quantity}</span>
              <span className='flex justify-center items-center w-8 h-8 p-1 rounded-full text-md bg-white shadow-md'>
  
              {item.icon}
              </span>
            </span>
          </div>
         
          ))
        }
   
      </div>
        <section className='flex flex-col lg:flex-row gap-3 lg:gap-2 justify-evenly'>
          <BarChartComp/>
          <Pie/>
        </section>
    </div>
  )
}

export default Dashboard