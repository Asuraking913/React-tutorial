import React, { useState } from "react";
// import {
//   AiOutlineMenu,
//   AiOutlineHome,
//   AiOutlineProject,
//   AiOutlineMail,
// } from "react-icons/ai";
// import { BsPerson } from "react-icons/bs";
// import { GrProjects } from "react-icons/gr";
// import LinkTag from "./link";
import TestTag from "./link";

function Sidenav() {
  const jokes = [
    {
      joke: "Asdsdfsdfsfsffdfdsffs",
      author: "Arnold Scgwharzengger",
    },

    {
      joke: "sdgjsaddsfgdfgdf",
      author: "Asura King913",
    },
    {
      joke: "sdasfwe3242342354",
      author: "Ikki Tenrio",
    },
    {
      joke: "sdfsfsfsdfgtyhk",
      author: "Tang San",
    },
    {
      joke: "sdffwpwpepjwer",
      author: "Ling Luochen",
    },
    {
      joke: "sdffwpwpepjwer",
      author: "Ling Luoche444",
    },
    {
      joke: "sdffwpwpepjwer",
      author: "Ling Luoche444",
    },
    {
      joke: "sdffwpwpepjwer",
      author: "Ling Luoche444",
    },
  ];

  const jokeList = [];

  for (var i = 0; i < jokes.length; i++) {
    jokeList.push(<TestTag joke={jokes[i].joke} author={jokes[i].author} />);
  }

  return (
    <div className="flex items-center h-screen justify-center">
      <p className="flex flex-col gap-4 w-[70%] items-center text-center bg-blue-600 rounded-full">
        {jokeList}
      </p>
    </div>
  );
}

export default Sidenav;
