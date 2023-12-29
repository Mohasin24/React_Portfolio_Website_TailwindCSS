import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import c from "../assets/c.png";
import cpp from "../assets/cpp.png";
import express from "../assets/expressjs.png"
import java from "../assets/java.png"
import mongo from "../assets/mongodb.png"
import springboot from "../assets/spring boot.png"

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
    src: javascript,
    title: "JavaScript",
    shadow:"shadow-yellow-500"
  },
  {
    id: 4,
    src: github,
    title: "GitHub",
    shadow:"shadow-white"
  },
  {
    id: 5,
    src: node,
    title: "NodeJs",
    shadow:"shadow-green-500"
  },
  {
    id: 6,
    src: react,
    title: "ReactJs",
    shadow:"shadow-cyan-400"
  },
  {
    id: 7,
    src: tailwind,
    title: "Tailwind CSS",
    shadow:"shadow-cyan-600"
  },
  {
    id: 8,
    src: c,
    title: "C",
    shadow:"shadow-indigo-600"
  },
  {
    id: 9,
    src: cpp,
    title: "C++",
    shadow:"shadow-blue-600"
  },
  {
    id: 10,
    src: java,
    title: "Java",
    shadow:"shadow-red-500"
  },
  {
    id: 11,
    src: springboot,
    title: "Spring Boot",
    shadow:"shadow-lime-500"
  },
  {
    id: 12,
    src: express,
    title: "Express Js",
    shadow:"shadow-white"
  },
  {
    id: 13,
    src: mongo,
    title: "MongoDb",
    shadow:"shadow-green-600"
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
