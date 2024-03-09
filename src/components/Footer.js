// Importing the necessary modules
import React from 'react';

// Footer component to display footer information
const Footer = () => {

  // Getting the current year
  let date = new Date().getFullYear();

  return (
    // Div container for the footer with gradient background and text color
    <div className="bg-gradient-to-b from-black to-gray-800 text-white h-auto w-full">
      {/* Padding for the footer content */}
      <div className="py-4">
        {/* Flex container for centered and styled text */}
        <div className="flex flex-col justify-center items-center text-[14px]">
          {/* Author information with underline on hover */}
          <p>Made by <span className="underline underline-offset-4 font-bold">MOHASIN PATEL</span></p>
          {/* Copyright information with the current year */}
          <p>&copy; Copyright {date}</p>
        </div>
      </div>
    </div>
  );
}

// Exporting the Footer component as the default export
export default Footer;
