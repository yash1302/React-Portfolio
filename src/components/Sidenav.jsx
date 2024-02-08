import React from "react";
import { useState } from "react";
import {
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";

export default function Sidenav() {
  const [nav, setnav] = useState(false);
  const [color, setColor] = useState("white")
  const handlenav = () => {
    setnav(!nav);

    if (nav == true){
      setColor("white")
    }
    else{
      setColor("black")
    }
  };


  return (
    <div>
      <AiOutlineMenu
        onClick={handlenav}
        // style={{color: color}}
        className={`absolute top-4 right-4 z-[99] md:hidden text-${color}`}
        // style={{}}
      />
      {nav ? (
        
        <div className="fixed w-full h-screen bg-white/30 flex flex-col justify-center items-center z-20 md:hidden hover:fill-black">
          {/* <img className='w-full h-screen object-cover' src="https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome className="hover:fill-black" />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects className="hover:fill-black" />
            <span className="pl-4">Work</span>
          </a>
          <a
            href="#project"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject className="hover:fill-black" />
            <span className="pl-4">Project</span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson className="hover:fill-black" />
            <span className="pl-4">Resume</span>
          </a>
          <a
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail className="hover:fill-black" />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <AiOutlineHome />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <GrProjects />
          </a>
          <a
            href="#project"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <AiOutlineProject />
          </a>
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <BsPerson />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <AiOutlineMail />
          </a>
        </div>
      </div>
    </div>
  );
}
