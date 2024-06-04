import React from 'react'

function Header() {
  return (
    <div className='w-full p-[1.5em] px-[4em] z-[10] flex justify-between items-center fixed top-0'>
        <a href="" className='text-gray-500 roboto text-[1.5em] text-center font-extrabold'>IDPC <span className='block text-[0.6em] mt-[-5px]'> finance</span></a>
        <ul className='flex justify-between gap-[2em]'>
            <li><a href="" className='uppercase roboto'>Retail</a></li>
            <li><a href="" className='uppercase roboto'>SME</a></li>
            <li><a href="" className='uppercase roboto'>corporate</a></li>
            <li><a href="" className='uppercase roboto'>about us</a></li>
            <li><a href="" className='uppercase roboto'>covid 19</a></li>
            <li><a href="" className='uppercase roboto'>campains</a></li>
        </ul>
        <ul className='flex justify-between gap-[2em]'>
            <li className='roboto'><a href=""><i className='fa solid fa-magnifying-glass text-[1.5em] text-pink-600'></i></a></li>
            <li><a href="" className='w-full bg-pink-600 font-semibold p-[1em] px-[1.5em] text-white rounded-[5px]'>iSERVICE</a></li>
        </ul>
    </div>
  )
}

export default Header