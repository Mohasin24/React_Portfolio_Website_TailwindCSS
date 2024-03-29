import arrayDestruct from "../assets/projects/arrayDestruct.jpg";
import installNode from "../assets/projects/installNode.jpg";
import navbar from "../assets/projects/navbar.jpg";
import reactParallax from "../assets/projects/reactParallax.jpg";
import reactSmooth from "../assets/projects/reactSmooth.jpg";
import reactWeather from "../assets/projects/reactWeather.jpg";

// Project data with images
const projects = [
  {
    id: 1,
    src: arrayDestruct,
  },
  {
    id: 2,
    src: installNode,
  },
  {
    id: 3,
    src: navbar,
  },
  {
    id: 4,
    src: reactParallax,
  },
  {
    id: 5,
    src: reactSmooth,
  },
  {
    id: 6,
    src: reactWeather,
  },
];

// Project component to display projects
const Project = () => {
  return (
    // Project section container with gradient background
    <div name="Project" className="pt-10 w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white flex flex-col justify-center items-center">
      {/* Max width container for content with padding and center alignment */}
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center w-full h-full py-12 px-14">
        {/* Section header with bold text and bottom border */}
        <div className="flex flex-col justify-center items-center pb-12">
          <p className="text-4xl border-b-4 border-gray-500 font-bold">
            Projects
          </p>
        </div>

        {/* Grid layout for displaying projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {/* Mapping through project data to generate project cards */}
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              {/* Project image with hover effect */}
              <img
                src={src}
                alt=""
                className="duration-200 hover:scale-105 rounded-md"
              />
              {/* Buttons for Demo and Code with hover effect */}
              <div className="flex justify-evenly items-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-gray-700 rounded-lg">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-gray-700 rounded-lg">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
