import React from "react";
import { useState } from "react";

function Quote({ quote, author, id }) {
  function handleAddLike(e) {
    e.preventDefault();
    addLike++;
    console.log(`liked id: ${id}`);
    console.log(`Total liked: ${likes}`);
  }

  function handleDislike(e) {
    e.preventDefault();
    addDisLike++;
    console.log(`Diskliked id  ${id}`);
    console.log(`Total Diskliked: ${disLikes}`);
  }

  const [likes, addLike] = useState(0);
  const [disLikes, addDisLike] = useState(0);

  return (
    <div className="flex justify-center items-center flex-col">
      <p>{quote}</p>
      <p>{author}</p>

      <p>{`like: ${like}`}</p>

      <div className="flex gap-6 text-2xl">
        <a
          href=""
          className="bg-gray-500 px-2 hover:border-black border-2
        "
          onClick={handleAddLike}
        >
          &times;
        </a>
        <a
          href=""
          className="bg-gray-500 px-2 hover:border-black border-2
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
