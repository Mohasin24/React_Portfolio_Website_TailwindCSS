import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import graphql from "../assets/graphql.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const techStack = [
  {
    id: 1,
    src: html,
    title: "HTML",
    shadow:"shadow-orange-500"
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    shadow:"shadow-sky-500"
  },
  {
    id: 3,
    src: github,
    title: "GitHub",
    shadow:"shadow-white"
  },
  {
    id: 4,
    src: graphql,
    title: "GraphQL",
    shadow:"shadow-pink-500"
  },
  {
    id: 5,
    src: javascript,
    title: "JavaScript",
    shadow:"shadow-yellow-500"
  },
  {
    id: 6,
    src: nextjs,
    title: "NextJs",
    shadow:"shadow-white"
  },
  {
    id: 7,
    src: node,
    title: "NodeJs",
    shadow:"shadow-green-500"
  },
  {
    id: 8,
    src: react,
    title: "ReactJs",
    shadow:"shadow-blue-500"
  },
  {
    id: 9,
    src: tailwind,
    title: "Tailwind CSS",
    shadow:"shadow-cyan-500"
  },
];

const Experiences = () => {
  return (
    <div name="Experience" className="pt-10 w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white flex flex-col justify-center items-center">
      <div className="max-w-screen-lg mx-auto h-full py-14">
        <div className="px-10 text-justify">
          <div className="flex justify-center pb-4">
            <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
              Experiences
            </p>
          </div>
          <p className="py-6">
            This are the technologies on which i have hands on practice.
          </p>
        </div>

        <div className="w-full grid sm:grid-cols-2 md:grid-cols- text-center gap-8 py-8 px-12 sm:px-0">

          {techStack.map(({ id, src, title, shadow }) => (

            <div key={id} className={`shadow-md shadow-gray-500 hover:scale-105 duration-500 py-2 rounded-lg ${shadow}`}>
              <img src={src} alt="" className="w-24 mx-auto " />
              <p className="mt-4">{title}</p>
            </div>

          ))}

        </div>
      </div>
    </div>
  );
};

export default Experiences;
