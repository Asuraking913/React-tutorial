import React from 'react'

function Quote({quote, author, likes, onLike, dislikes, onDislike, onFav}) {

  const addLike =() => {
    onLike(author)
  }

  const dislike =() => {
    onDislike(author)
  }

  const handleFav = () => {
    onFav(author)
  }

  return (
    <div className='flex gap-2 flex-col'>
      <p>{`quote: ${quote}`}</p>
      <p>{`author: ${author}`}</p>
      <p>{`likes: ${likes}`}</p>
      <p>{`dislikes: ${dislikes}`}</p>
      <p>{favorite === author ? "YES": "NO"}</p>
      <div className='flex justify-center gap-2'>
        <button onClick={addLike} className='bg-white border-orange-500 border-[2px] p-2 hover:scale-110 hover:border-orange-300 duration-[0.5s]'><i className='text-orange-500 fa-solid fa-thumbs-up'></i></button>
        <button onClick={dislike} className='bg-white border-orange-500 border-[2px] p-2 hover:scale-110 hover:border-orange-300 duration-[0.5s]'><i className='text-orange-500 fa-solid fa-thumbs-down'></i></button>
        <button onClick={handleFav} className='bg-white text-orange-500 font-bold border-orange-500 border-[2px] p-2 hover:scale-110 hover:border-orange-300 duration-[0.5s]'>Favorite</button>
        <button className='bg-white text-orange-500 font-bold border-orange-500 border-[2px] p-2 hover:scale-110 hover:border-orange-300 duration-[0.5s]'>Delete</button>
      </div>
    </div>
  )
}

export default Quote