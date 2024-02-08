import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'

export default function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/40 text-white">
        <div className="w-full max-w-[700px] sm:m-auto md:mt-[35px] md:ml-[30px] lg:ml-[500px] h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="md:text-3xl lg:text-4xl text-2xl font-bold text-gray-800">I'm Yashvardhan Jadhav</h1>
          <h2 className="flex md:text-3xl lg:text-4xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",
                2000,
                "Tech enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block",paddingLeft:"5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full text-gray-800">
            <FaTwitter className="cursor-pointer " size={20}/>
            <FaFacebook className="cursor-pointer " size={20}/>
            <FaInstagram className="cursor-pointer " size={20}/>
            <FaLinkedin className="cursor-pointer " size={20}/>
          </div>
        </div>
      </div>
    </div>
  );
}
