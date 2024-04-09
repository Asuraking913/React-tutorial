import React from 'react'
import Nav from './components/nav'
import './fonts/font-icons/css/all.min.css'

function App() {
  return (
    <div className='bg-gray-400 h-screen'>
      <Nav />
      <section className='h-[80vh] pb-2 bg-gray-300 rounded-b-3xl'>
        <div className='bg-orange-500 h-[95%] pt-20 flex flex-col justify-center items-center font-bold size rounded-b-3xl'>
          <h1 className='text-gray-300 text-[1.2em] w-[50%] text-center'>Expanding your mind reading your books</h1>
          <div className='flex flex-row '>
            <input className='bg-gray-200 rounded-full border-none' type="text" /> <button className='bg-gray-200 pr-4 pl-4 ml-[-1.5em] rounded-full'><i className='fa-solid fa-search text-orange-500'></i></button>
          </div>
        </div>
      </section>
      </div>
  )
}

export default App