import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  
  return (
    <div className="flex items-center flex-col top-[35%] left-0 fixed">
      <ul className="bg-gray-500 text-white">
        <li className="flex flex-col justify-between items-center w-30 h-14 p-2 ml-[-80px] hover:ml-0 hover:bg-gray-600 duration-300">
          <a href="#" className="flex justify-between items-center w-full ">
            <span className="p-2">GitHub</span>
            <FaGithub size={30}/>
          </a>
          </li>
        <li className="flex flex-col justify-between items-center w-30 h-14 p-2 ml-[-80px] hover:ml-0 hover:bg-gray-600 duration-300">
          <a href="#" className="flex justify-between items-center w-full ">
          <span className="p-2">Linkedin</span>
            <FaLinkedin  size={30}/>
          </a>
          </li>
        <li className="flex flex-col justify-between items-center w-30 h-14 p-2 ml-[-80px] hover:ml-0 hover:bg-gray-600 duration-300">
          <a href="#" className="flex justify-between items-center w-full ">
          <span className="p-2">Mail</span>
            <HiOutlineMail size={30}/>
          </a>
          </li>
        <li className="flex flex-col justify-between items-center w-30 h-14 p-2 ml-[-80px] hover:ml-0 hover:bg-gray-600 duration-300">
          <a href="#" className="flex justify-between items-center w-full ">
          <span className="p-2">Person</span>
            <BsFillPersonLinesFill size={30}/>
          </a>
          </li>

      </ul>
    </div>
  );
};

export default SocialLinks;
