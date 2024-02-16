import React from "react";
import { useState } from "react";

function Quote({ quote, author, id }) {
  function handleAddLike(e) {
    e.preventDefault();
    const newlikes = likes + 1;
    addLike(newlikes);
    console.log(`liked id: ${id}`);
    console.log(`Total liked: ${newlikes}`);
  }

  function handleDislike(e) {
    e.preventDefault();
    const newDisLikes = disLikes + 1;
    addDisLike(newDisLikes);
    console.log(`Diskliked id  ${id}`);
    console.log(`Total Diskliked: ${newDisLikes}`);
  }

  const [likes, addLike] = useState(0);
  const [disLikes, addDisLike] = useState(0);

  return (
    <div className="flex justify-center items-center flex-col">
      <p>{quote}</p>
      <p>{author}</p>

      <p>
        {`like: ${likes}`} {`Disklike: ${disLikes}`}
      </p>

      <div className="flex gap-6 text-2xl bg-gray-700">
        <a
          href=""
          className="px-2 hover:border-gray-500 border-2 border-transparent
        "
          onClick={handleAddLike}
        >
          &times;
        </a>
        <a
          href=""
          className="px-2 hover:border-gray-500 border-2 border-transparent
        "
          onClick={handleDislike}
        >
          &copy;
        </a>
      </div>
    </div>
  );
}

export default Quote;
