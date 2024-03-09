// Importing the Education component from the "./Education" file
import Education from "./Education";
import { Personal_Description } from "../Data";

// Functional component for the About section
const About = () => {
  return (
    <div
      name="About"
      className="pt-20 w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white flex flex-col justify-center items-center"
    >
      <div className="max-w-screen-lg px-14 pb-10 mx-auto flex flex-col justify-center items-center w-full h-full">
        {/* Header for the About section */}
        <div className="pb-8 flex flex-row justify-center items-center">
          <p className="font-bold text-4xl border-b-4 inline border-gray-500">
            About
          </p>
        </div>

        {/* Introduction paragraph */}
        <p className="text-xl mt-3 text-justify">
          {Personal_Description}
        </p>

        {/* Background container with gradient and shadow */}
        <div className="bg-gradient-to-b from-black to-gray-900 shadow-md shadow-gray-500 rounded-md w-full h-full p-4 mt-10">

          {/* Section for displaying Education details */}
          <p className="text-2xl font-bold">Education :</p>
          <div className="py-8 px-4">
            {/* Rendering the Education component */}
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the About component as the default export
export default About;
