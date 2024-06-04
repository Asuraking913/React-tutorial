import React from 'react'

function Serve({img, h3, p}) {
  
  return (
      <div className='w-[80%] rounded-[1.5em]'>
        {img}
        <div className='flex p-[5px] items-center justify-between'>
          <div className='flex flex-col gap-[0.3em]'>
              <h3 className='font-[poppins] uppercase text-xl font-semibold'>{h3}</h3>
              <p className='font-[roboto] uppercase'>{p}</p>
          </div>
          <i className='fa-solid fa-arrow-right bg-pink-300 p-[5px] rounded-[50%] text-pink-600'></i>
        </div>
    </div>
  )
}

export default Serve