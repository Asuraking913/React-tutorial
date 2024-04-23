import React from 'react'

function Nav() {
  return (
    <div className='w-full flex flex-row justify-between pt-4 p-4 px-10 fixed top-0 blur1'>
        <a href="#" className="text-black bg-transparent font2 font-bold text-3xl">RLeague</a>
        <nav>
            <ul className='flex gap-4'>
                <li><a href="#" className='text-blue-400 font3 font-bold text-[1.2em]'>About Us</a></li>
                <li><a href="#" className='text-blue-400 font3 font-bold text-[1.2em]'>Our Books</a></li>
                <li><a href="#" className='text-blue-400 font3 font-bold text-[1.2em]'>Contact Us</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav