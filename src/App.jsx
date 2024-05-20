import React from 'react'
import { useReducer } from 'react'
import './fonts/font-icons/css/all.min.css'
import Quote from './components/joke'
import quoteReducer from './components/jokeReducer'
import { useState } from 'react'
import Jokeform from './components/jokeForm'

function App() {

  const [fav, setFav] = useState("Cersei Lannister"); 
  const [showform, setform] = useState(false)

  const handleLike = (author) => {
    dispatch({type: "like_joke", author})
  }

  const handleFav = (author) => {
    setFav(author)
  }

  const handleDislike = (author) => {
    dispatch({type: "dislike_joke", author})
  }

  const handleAddJoke = (text) => {
    const newJoke = {
      quote: text,
      author: self.crypto.randomUUID(),
      likes: 0, 
      dislikes: 0
    }
    
    dispatch({type: "addJoke", newJoke})
    setform(!showform)
  }
  
  const [quotes, dispatch] = useReducer(quoteReducer, [
    {
      quote: "Power is Power!!!!!!!!!!",
      author: "Cersei Lannister", 
      likes: 0, 
      dislikes: 0
    },
    {
      quote: "What is dead may never die!!",
      author: "Theon GreyJoy",
      likes: 0,
      dislikes: 0
    }
  ])

  const handleShowForm = () => {
    setform(!showform)
  }
  


  const jokeList = quotes.map(quote => (<Quote  
    {...quote} 
    onLike={handleLike} 
    onDislike={handleDislike}
    onFav={handleFav}
    />))

  return (
    <div className='p-[2em] flex flex-col justify-center items-center h-screen'>
      <div className='bg-blue-800 p-[1em] text-center rounded-[2rem]'>
        {
          showform ? <div>
            <Jokeform handleInput={handleAddJoke} />
          </div>
          :
        <>
        <button onClick={handleShowForm} className='bg-white mb-4 text-orange-500 font-bold border-orange-500 border-[2px] p-2 hover:scale-110 hover:border-orange-300 duration-[0.5s]'>Add Joke</button>
        {jokeList}
        </>

        }
        </div>
    </div>
  )
}

export default App