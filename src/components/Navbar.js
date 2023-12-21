import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  {
    id: 1,
    link: "Home",
  },
  {
    id: 2,
    link: "About",
  },
  {
    id: 3,
    link: "Project",
  },
  {
    id: 4,
    link: "Experience",
  },
  {
    id: 5,
    link: "Contact",
  },
];

const downloadCv = () => {
  const link =
    "https://drive.google.com/file/d/1XxYy_gzF3VtmqDkR6dHqSIshK68OHEjY/view?usp=drive_link";

  window.open(link, "_blank");
};

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-16 bg-gradient-to-b from-black to-gray-800 text-white px-4 fixed">
      <div>
        <h1 className="text-3xl font-signature cursor-pointer capitalize">
          mohasin patel
        </h1>
      </div>

      <ul className="hidden md:flex mr-8 items-center justify-between">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="flex capitalize px-5  
                            cursor-pointer
                            hover:scale-105 duration-150 hover:underline underline-offset-8 decoration-gray-400"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        <li>
          <button
            className="ml-6 bg-gradient-to-b from-cyan-500 to-blue-500 p-2 rounded-full font-bold"
            onClick={downloadCv}
          >
            Download CV
          </button>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer px-4 z-10"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="py-3 text-2xl capitalize cursor-pointer hover:scale-110 duration-150 hover:underline underline-offset-8 decoration-gray-400"
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
              {link}
            </Link>
            </li>
          ))}

          <li>
            <button
              className="mt-5 bg-gradient-to-b from-cyan-500 to-blue-500 p-2 rounded-full font-bold text-center"
              onClick={downloadCv}
            >
              Download CV
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
