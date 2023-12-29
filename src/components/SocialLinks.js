import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const socialIcons = [
  {
    id : 1,
    icon : FaGithub,
    name : "Github",
    link : "https://start.spring.io/"
  },
  {
    id : 2,
    icon : FaLinkedin,
    name : "Linkedin",
    link : "https://start.spring.io/"
  },
  {
    id : 3,
    icon : BsFillPersonLinesFill,
    name : "Leetcode",
    link : "https://start.spring.io/"
  }
]

const SocialLinks = () => {

  return (
    <div className="hidden lg:flex items-center flex-col top-[35%] left-0 fixed">
      <ul className="bg-gray-500 text-white">

      {
        socialIcons.map(({id,icon:Icon,name,link})=>(
          
          <li className="flex flex-col justify-between items-center w-32 h-14 p-2 ml-[-80px] hover:ml-0 hover:bg-gray-600 duration-300">
      <a href={link} className="flex justify-between items-center w-full " target="_blank" key={id}>
        <span className="p-2">{name}</span>
        <Icon size={30}/>
          </a>
          </li>
        ))
      }

      </ul>
    </div>
  );
};

export default SocialLinks;

{/* <li className="flex flex-col justify-between items-center w-30 h-14 p-2 ml-[-80px] hover:ml-0 hover:bg-gray-600 duration-300">
  <a href="https://start.spring.io/" className="flex justify-between items-center w-full ">
    <span className="p-2">GitHub</span>
    <FaGithub size={30}/>
  </a>
  </li>
<li className="flex flex-col justify-between items-center w-30 h-14 p-2 ml-[-80px] hover:ml-0 hover:bg-gray-600 duration-300">
  <a href="https://start.spring.io/" className="flex justify-between items-center w-full ">
  <span className="p-2">Linkedin</span>
    <FaLinkedin  size={30}/>
  </a>
  </li>
<li className="flex flex-col justify-between items-center w-30 h-14 p-2 ml-[-80px] hover:ml-0 hover:bg-gray-600 duration-300">
  <a href="https://start.spring.io/" className="flex justify-between items-center w-full ">
  <span className="p-2">Mail</span>
    <HiOutlineMail size={30}/>
  </a>
  </li>
<li className="flex flex-col justify-between items-center w-30 h-14 p-2 ml-[-80px] hover:ml-0 hover:bg-gray-600 duration-300">
  <a href="https://start.spring.io/" className="flex justify-between items-center w-full ">
  <span className="p-2">Person</span>
    <BsFillPersonLinesFill size={30}/>
  </a>
  </li> */}