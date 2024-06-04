import React from 'react'

function Result({h2, p}) {

    if (h2 === "57.6 bn") {
        return (
            <div>
                <h2 className='text-3xl text-pink-600 font-bold poppins'>{h2}</h2>
                <p className=' w-[60%] uppercase font-[roboto]'>{p}</p>
            </div>
          )
    }
    
  return (
    <div>
        <h2 className='text-3xl font-bold poppins'>{h2}</h2>
        <p className=' w-[60%] uppercase font-[roboto]'>{p}</p>
    </div>
  )

}

export default Result