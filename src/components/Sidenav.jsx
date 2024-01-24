import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };



  return (
    <div className="p-4 flex flex-row justify-end">
      <AiOutlineMenu className="sm:hidden text-2xl" onClick={handleNav} />

      {nav ? (
        <div className="fixed w-full h-screen flex justify-center items-center flex-col gap-4">
          <a className="w-4/5 p-4 bg-gray-300 shadow-lg cursor-pointer shadow-gray-700 rounded-full flex items-center justify-center gap-4 hover:scale-110 duration-200 ease-in  ">
            <AiOutlineHome className=" size[20]" />

            <span className="capitalize font-bold ">home</span>
          </a>
          <a className="w-4/5 p-4 bg-gray-300 shadow-lg cursor-pointer shadow-gray-700 rounded-full flex items-center justify-center gap-4 hover:scale-110 duration-200 ease-in  ">
            <GrProjects className=" size[20]" />

            <span className="capitalize font-bold ">work</span>
          </a>
          <a className="w-4/5 p-4 bg-gray-300 shadow-lg cursor-pointer shadow-gray-700 rounded-full flex items-center justify-center gap-4 hover:scale-110 duration-200 ease-in  ">
            <AiOutlineProject className=" size[20]" />

            <span className="capitalize font-bold ">Projects</span>
          </a>
          <a className="w-4/5 p-4 bg-gray-300 shadow-lg cursor-pointer shadow-gray-700 rounded-full flex items-center justify-center gap-4 hover:scale-110 duration-200 ease-in  ">
            <BsPerson className=" size[20]" />

            <span className="capitalize font-bold ">Resume</span>
          </a>
          <a className="w-4/5 p-4 bg-gray-300 shadow-lg cursor-pointer shadow-gray-700 rounded-full flex items-center justify-center gap-4 hover:scale-110 duration-200 ease-in  ">
            <AiOutlineMail className=" size[20]" />

            <span className="capitalize font-bold ">Contact </span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="md:block hidden h-screen fixed top-[25%] left-2">
        <div className="h-full flex flex-col gap-4">
          <a
            href=""
            className="p-4 bg-gray-300 shadow-lg shadow-gray-500 rounded-full hover:scale-110 duration-200 ease-out"
          >
            <AiOutlineHome />
          </a>
          <a
            href=""
            className="p-4 bg-gray-300 shadow-lg shadow-gray-500 rounded-full hover:scale-110 duration-200 ease-out"
          >
            <GrProjects />
          </a>
          <a
            href=""
            className="p-4 bg-gray-300 shadow-lg shadow-gray-500 rounded-full hover:scale-110 duration-200 ease-out"
          >
            <AiOutlineProject />
          </a>
          <a
            href=""
            className="p-4 bg-gray-300 shadow-lg shadow-gray-500 rounded-full hover:scale-110 duration-200 ease-out"
          >
            <BsPerson />
          </a>
          <a
            href=""
            className="p-4 bg-gray-300 shadow-lg shadow-gray-500 rounded-full hover:scale-110 duration-200 ease-out"
          >
            <AiOutlineMail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
