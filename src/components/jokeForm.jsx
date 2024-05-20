import React from 'react'
import { useState } from 'react'

function Jokeform({handleInput}) {
  const [text, setText] = useState("")

  const handleSumbit = (event) => {
    event.preventDefault()
    handleInput(text)
  }

  return (
    <div>
      <form onSubmit={handleSumbit} className='flex gap-[1em] items-center'>
        <label htmlFor="text" className='text-2xl box font-bold text-orange-500'>New Joke:</label>
        <input onChange={e => (setText(e.target.value))} type="text" className='text-black p-3' />
        <button className='bg-white text-orange-500 font-bold text-2xl border-orange-500 border-[3px] p-2 hover:scale-110 hover:border-orange-300 duration-[0.5s]'>Sumbit</button>
      </form>
    </div>
  )
}

export default Jokeform