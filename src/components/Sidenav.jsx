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

  const infoIcon = {
    info: "home",
    icon: <AiOutlineHome />,
    info1: "work",
    icon1: <GrProjects />,
    info2: "projects",
    icon2: <AiOutlineProject />,
    info3: "resume",
    icon3: <BsPerson />,
    info4: "contact",
    icon4: <AiOutlineMail />,
  };

  return (
    <div className=" p-4  flex flex-row justify-end absolute bg-blue-500 w-full">
      <AiOutlineMenu
        className="cursor-pointer text-2xl z-[99]"
        onClick={handleNav}
      />

      {nav ? (
        <div className="flex flex-col gap-5 h-screen w-full bg-white  fixed top-0 left-0 justify-center items-center">
          <LinkTag info={infoIcon.info} icon={infoIcon.icon} />
          <LinkTag info={infoIcon.info1} icon={infoIcon.icon1} />
          <LinkTag info={infoIcon.info2} icon={infoIcon.icon2} />
          <LinkTag info={infoIcon.info3} icon={infoIcon.icon3} />
          <LinkTag info={infoIcon.info4} icon={infoIcon.icon4} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sidenav;
