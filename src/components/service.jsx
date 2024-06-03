import React from 'react'

function Serve({img, h3, p}) {
  return (
    <div className='w-full rounded-[1.5em]'>
        {img}
        <div className='flex items-center justify-between'>
            <h3 className='font-[poppins] text-xl font-semibold'>{h3}</h3>
            <i className='fa-solid fa-circle-arrow-right text-pink-600'></i>
        </div>
        <p className='font-[roboto]'>{p}</p>
    </div>
  )
}

export default Serve