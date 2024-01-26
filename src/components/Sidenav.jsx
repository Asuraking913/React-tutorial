import React, { useState } from "react";
// import {
//   AiOutlineMenu,
//   AiOutlineHome,
//   AiOutlineProject,
//   AiOutlineMail,
// } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import LinkTag from "./link";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" p-4  flex flex-row justify-start absolute bg-blue-500 w-full">
      <AiOutlineMenu className="cursor-pointer text-2xl " onClick={handleNav} />

      {nav ? (
        <div className="flex h-screen w-full bg-white  fixed top-0 left-0 justify-center items-center">
          <LinkTag info={"home"} icon={<AiOutlineHome />} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sidenav;
