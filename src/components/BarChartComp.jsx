import React, { useEffect, useState } from 'react'
import { GrTest } from 'react-icons/gr'
import { BarChart } from '@mui/x-charts/BarChart'

const BarChartComp = () => {

  
      const [width, setWidth] = useState(350);
  
      const setScreenWidth = (windowWidth)=> {
          if(windowWidth > 1280) {
              setWidth(550)
          } else if (windowWidth > 640 && windowWidth <= 1024) {
              setWidth(350)
          } else if (windowWidth <= 640 && windowWidth > 425) {
              setWidth(300)
          } else if (windowWidth <= 425) {
              setWidth(250)
          } else if (windowWidth < 425 && windowWidth > 375) {
              setWidth(200)
          } else {
              setWidth(150)
          }
      }
  
     
  
      useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
  
        // Add event listener
        window.addEventListener('resize', handleResize);
    
        // Cleanup on unmount
        return () => window.removeEventListener('resize', handleResize);
      }, [width]);

  return (
<div className='flex flex-col md:w-[32.5rem] relative items-center justify-center lg:w-[24rem] xl:w-[36rem] bg-gray-200 p-2 gap-4 rounded-lg shadow'>
        <span className='flex gap-2 absolute top-2 left-2 items-center text-xl tracking-tight font-semibold mt-2 ml-2'>
        <GrTest className='text-xl text-blue-700' />
            Department Analysis
            <span className='text-xs text-red-400 font-bold'>*static data is used</span>
            
            </span>
        
        <div className='mt-14'>
    <BarChart
      xAxis={[{ scaleType: 'band',data: ["Tech", "HR", "Finance", "IT", "Operations"] }]}
      series={[{ data: [3,3,2,1,1]
        , label: "No. of Employees",
       }]}
      height={300}
      width={width}
    />
  


        </div>
    </div>
  )
}

export default BarChartComp