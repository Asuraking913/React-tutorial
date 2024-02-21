import React, { useState } from "react";

function Quote({ quotes, author, id, favorite, onFav }) {
  const [likes, setLike] = useState(0);
  const [dislikes, setDislike] = useState(0);

  function handleLike() {
    const newLikes = likes + 1;
    setLike(newLikes);
    console.log(`like ${id}: totalLikes: ${newLikes}`);
  }

  function handleDislike() {
    setDislike(dislikes + 1);
    console.log(`dislike ${id}: totalLikes: ${likes}`);
  }

  function onFavourite() {
    onFav(id);
  }

  return (
    <div className="text-center mb-4 flex flex-col justify-center">
      <p>{quotes}</p>
      <p>{author}</p>

      <p>{likes}</p>
      <p>Favorite: {favorite ? "YES" : "NO"}</p>
      <div className="">
        <button
          className="px-4 py-2 bg-gray-400 hover:border-purple-400 border-black border-2"
          onClick={handleLike}
        >
          &times;
        </button>
        <button
          className="px-4 py-2 bg-gray-400 hover:border-purple-400 border-black border-2"
          onClick={handleDislike}
        >
          &copy;
        </button>
        <button
          className="px-4 py-2 bg-gray-400 hover:border-purple-400 border-black border-2"
          onClick={onFavourite}
        >
          favorite
        </button>
      </div>
    </div>
  );
}

export default Quote;
