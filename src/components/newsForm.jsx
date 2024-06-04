import React from 'react'

function News() {
  return (
    <form action="" className='text-center flex flex-col gap-[1em]'>
    <div className='flex flex-col gap-[1em] justify-center items-center'>
            <h2 className='poppins text-3xl poppins font-bold'>NewsLetter</h2>
            <p className='text-gray-600 w-[70%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto perferendis laudantium Lorem ipsum dolor sit amet. sapiente?</p>
        </div>
        <div className='flex gap-[.2em] justify-center text-[1rem]'><input className='border-2px rounded-[5px] text-[1.2rem] outline-2 outline p-[0.3em] outline-gray-400 border-gray-400' placeholder='Your email'  type="text" name="text" id="text" /><button className='font-bold bg-pink-600 p-[0.8em] px-[1.5em] text-white poppins rounded-[5px]'>Subscribe</button></div>
    </form>
  )
}

export default News