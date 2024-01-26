import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import LinkTag from "./link";
// import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" p-4  flex flex-row justify-end absolute bg-blue-500 w-full">
      <AiOutlineMenu
        className="cursor-pointer text-2xl z-[99]"
        onClick={handleNav}
      />

      {nav ? (
        <div className="flex flex-col gap-5 h-screen w-full bg-white  fixed top-0 left-0 justify-center items-center">
          <LinkTag info={"home"} icon={<AiOutlineHome />} />
          <LinkTag info={"Work"} icon={<GrProjects />} />
          <LinkTag info={"Projects"} icon={<AiOutlineProject />} />
          <LinkTag info={"Resume"} icon={<BsPerson />} />
          <LinkTag info={"Contact"} icon={<AiOutlineMail />} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sidenav;
