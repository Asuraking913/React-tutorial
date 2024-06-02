import React from 'react'

function Expe({i, h4, p}) {
  return (
    <div className='w-[50%] h-[50%] flex flex-col gap-[.5em]'>
        {i}
        <h4 className='text-xl font-[poppins] font-bold'>{h4}</h4>
        <p className='text-[1rem]'>{p}</p>
    </div>
  )
}

export default Expe