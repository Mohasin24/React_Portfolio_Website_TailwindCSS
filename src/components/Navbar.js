import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

// Navigation links data
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
    link: "Experience",
  },
  {
    id: 4,
    link: "Skills",
  },
  {
    id: 5,
    link: "Project",
  },
  {
    id: 6,
    link: "Contact",
  },
];

// Function to handle CV download
const downloadCv = () => {
  const link =
    "https://drive.google.com/file/d/1XxYy_gzF3VtmqDkR6dHqSIshK68OHEjY/view?usp=drive_link";
  window.open(link, "_blank");
};

// Navbar component
const Navbar = () => {
  // State to manage the mobile navigation menu
  const [nav, setNav] = useState(false);

  return (

    /* ######################################################################################## 
                                      NAVIGATION MENU
 ######################################################################################## */

    // Navigation bar container
    <div className="flex justify-between items-center w-full h-auto bg-gradient-to-b from-black to-gray-800 text-white p-4 fixed z-10">
      {/* Brand/Logo */}
      <div>
        <h1 className="text-3xl font-signature cursor-pointer capitalize">
          mohasin patel
        </h1>
      </div>

      {/* Navigation links for larger screens */}
      <ul className="hidden md:flex mr-8 items-center justify-between">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="flex capitalize px-5  
                            cursor-pointer
                            hover:scale-105 duration-150 hover:underline underline-offset-8 decoration-gray-400"
          >
            {/* Smooth scroll link to each section */}
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        {/* Button to download CV */}
        <li>
          <button
            className="ml-6 bg-gradient-to-b from-cyan-500 to-blue-500 p-2 rounded-full font-bold hover:scale-105"
            onClick={downloadCv}
          >
            Download CV
          </button>
        </li>
      </ul>

      {/* ######################################################################################## 
                                      END
 ######################################################################################## */}





      {/* ######################################################################################## 
                                      MOBILE MENU
 ######################################################################################## */}

      {/* Hamburger icon for mobile navigation */}
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer px-4 z-50"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile navigation menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="py-3 text-2xl capitalize cursor-pointer hover:scale-110 duration-150 hover:underline underline-offset-8 decoration-gray-400"
            >
              {/* Smooth scroll link in mobile view */}
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
          {/* Button to download CV in mobile view */}
          <li>
            <button
              className="mt-5 bg-gradient-to-b from-cyan-500 to-blue-500 p-2 rounded-full font-bold text-cente"
              onClick={downloadCv}
            >
              Download CV
            </button>
          </li>
        </ul>
      )}
    </div>
    /* ######################################################################################## 
                                      END
 ######################################################################################## */
  );
};

export default Navbar;
