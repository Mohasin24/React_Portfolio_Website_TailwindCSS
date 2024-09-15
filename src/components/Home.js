import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import HeroImg from '../assets/heroimage.jpg';
import { Link } from 'react-scroll';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { domainList } from '../Data';

const Home = () => {

  // Using the react-simple-typewriter hook to animate typing effect
  const [text] = useTypewriter({
    words: domainList,
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 80
  })

  return (
    // Div container for the Home section with gradient background
    <div name="Home" className='bg-gradient-to-b from-black via-black to-gray-800  pt-16 min-h-screen w-full flex flex-col justify-center items-center'>

      {/* Max width container for content with padding and center alignment */}
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full py-10 px-14 md:flex-row '>

        {/* Left column containing introduction and call-to-action */}
        <div className='flex flex-col justify-center h-full mx-auto'>

          {/* Introduction text with typewriter effect */}
          <div className='text-white text-lg md:text-4xl sm:7xl font-bold'>
            <p className='mb-2'>Hi,</p>
            <p className='mb-2'>I'm <span className='italic underline underline-offset-4 whitespace-nowrap'>MOHASIN PATEL</span>,</p>
            <p className='text-yellow-400 '>
              {text}
              <Cursor />
            </p>
          </div>

          {/* Brief description about myself */}
          <p className=' text-gray-100 py-4 text-justify max-w-md0'>
            A recent graduate with a B.E. in Information Technology from Savitribai Phule Pune University. My journey in the world of technology has equipped me with a diverse set of skills that I'm excited to leverage in the software development realm.
          </p>

          {/* Button to navigate to the Projects section */}
          <div>
            <Link to="Project" duration={500} smooth className='group text-white w-fit px-6 py-3 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 font-bold rounded-xl cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>

        </div>

        {/* Right column containing the profile image */}
        <div className='p-4 md:p-10'>
          <img src={HeroImg}
            alt="Profile"
            className='mx-auto h-[20%] w-[60%] md:h-auto md:w-[900px] rounded-[50%]'
          />
        </div>

      </div>

    </div>


  );
}

// Exporting the Home component as the default export
export default Home;
