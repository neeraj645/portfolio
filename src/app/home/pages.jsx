import React from "react";
import { RiLinkedinLine } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";
import { GoMail } from "react-icons/go";


function Home() {
  return (
    <div className="text-white flex flex-col gap-3 px-6 py-6 sm:px-10 sm:py-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl">
        Hello!
      </h1>
      <h2 className="text-3xl sm:text-4xl md:text-5xl">
        I am Neeraj Rajput
      </h2>
      <span className="text-2xl sm:text-3xl md:text-4xl">
        Backend Developer
      </span>

      <div className="flex gap-8 hover:transform pt-5">

        <div className="relative group flex items-center">
          <span className="absolute -top-6 left-1/2 transform -translate-x-1/2  text-white text-xs rounded px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Linkedin
          </span>
          <a href="https://www.linkedin.com/in/rajput-neeraj" target="_blank" > <RiLinkedinLine className="hover:scale-125 transition duration-300 cursor-pointer " /></a>
        </div>

        <div className="relative group flex items-center">
          <span className="absolute -top-6 left-1/2 transform -translate-x-1/2  text-white text-xs rounded px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Github
          </span>
            <a href="https://www.github.com/neeraj645" target="_blank" > <VscGithubAlt className="hover:scale-125 transition duration-300 cursor-pointer opacity-100 " /></a>
        </div>

        <div className="relative group flex items-center">
          <span className="absolute -top-6 left-1/2 transform -translate-x-1/2  text-white text-xs rounded px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Mail
          </span>
          <a href="mailto:neerajkirar645@outlook.com" target="_blank">
            <GoMail className="hover:scale-125 transition duration-300 cursor-pointer" />
          </a>
        </div>

     </div>

    </div>
  );
}

export default Home;
