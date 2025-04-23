import { PieChart } from '@mui/x-charts'
import React from 'react'
import { MdDonutLarge } from 'react-icons/md'

const Pie = () => {
  
  return (
    <div className='flex flex-col relative md:w-[32.5rem] lg:w-[22rem] xl:w-[30rem] bg-pink-100 p-2 items-center justify-center gap-4 rounded-lg shadow'>
         <span className='flex gap-2 items-center absolute top-2 left-2 text-xl tracking-tight font-semibold mt-2 ml-2'>
         <MdDonutLarge className='text-2xl text-blue-700' />
                    Experience Level
                    <span className='text-xs text-red-400 font-bold'>*static data is used</span>
                    </span>
                    <div className='mt-14'>
<PieChart
  series={[
    {
      data: [
        { id: 0, value: 4, label: 'Junior' },
        { id: 1, value: 2, label: 'Mid-Level' },
        { id: 2, value: 3, label: 'Senior' },
        { id: 3, value: 1, label: 'Executive' },
      ],
      innerRadius: 40,
      outerRadius: 100,
      paddingAngle: 1,
    },
  ]}
  width={200}
  height={200}
/>
</div>
    </div>
  )
}

export default Pie