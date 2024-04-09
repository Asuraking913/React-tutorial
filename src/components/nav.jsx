import React from 'react'

function Nav() {
  return (
    <div className='w-full flex flex-row justify-between pt-4 p-4 px-10 bg-transparent fixed top-0'>
        <a href="#" className="text-white bg-transparent font1 font-bold text-3xl">Novela</a>
        <nav>
            <ul className='flex gap-4'>
                <li><a href="#" className='font-sans font-semibold text-[1.2em]'>About Us</a></li>
                <li><a href="#" className='font-sans font-semibold text-[1.2em]'>Our Books</a></li>
                <li><a href="#" className='font-sans font-semibold text-[1.2em]'>Contact Us</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav