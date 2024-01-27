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
import testTag from "./link";

// import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";

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
  ];

  const jokeList = [
    <testTag joke={jokes[0].joke} author={jokes[0].author} />,
    <testTag joke={jokes[1].joke} author={jokes[1].author} />,
    <testTag joke={jokes[2].joke} author={jokes[2].author} />,
  ];

  return (
    <div>
      <p>{jokeList}</p>
      <p>
        <testTag joke={jokes[0].joke} author={jokes[0].author} />
      </p>
    </div>
  );
}

export default Sidenav;
