import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialIcons = [
  {
    id: 1,
    child: (
      <>
        Github <FaGithub size={30} />
      </>
    ),
    link: "https://github.com/Mohasin24",
  },
  {
    id: 2,
    child: (
      <>
        Linkedin <FaLinkedin size={30} />
      </>
    ),
    link: "https://www.linkedin.com/in/mohasin-patel-4231071a1/",
  },
  {
    id: 3,
    child: (
      <>
        Leetcode <SiLeetcode size={30} />
      </>
    ),
    link: "https://leetcode.com/mohasinpatel313/",
  },
];

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex items-center flex-col top-[35%] left-0 fixed">
      <ul>
        {socialIcons.map(({ id, child, link }) => (
          <li
            key={id}
            className="flex justify-center items-center w-40 h-14 pl-4 ml-[-110px] bg-gray-500 text-white hover:ml-[-10px] hover:rounded-md hover:bg-gray-600 duration-300"
          >
            <a
              href={link}
              className="flex justify-around items-center w-full"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
