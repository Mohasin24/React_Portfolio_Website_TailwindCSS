import Education from "./Education";


const About = () => {
  return (
    <div
      name="About"
      className="pt-20 w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white flex flex-col justify-center items-center"
    >
      <div className="max-w-screen-lg px-14 pb-10 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="pb-8 flex flex-row justify-center items-center">
          <p className="font-bold text-4xl border-b-4 inline border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-3 text-justify">
          Hello! I'm Mohasin Patel, a enthusiastic and skilled recent graduate
          with a B.E. in Information Technology, equipped with a diverse range
          of technical skills including Java (core and advanced), C, C++, Data
          Structures and Algorithms, and full-stack web development using the
          MERN stack. Eager to contribute to a dynamic team and apply my
          proficiency in Java frameworks (Spring, Spring Boot, Spring MVC,
          Hibernate, Spring Security) and database technologies (SQL, MongoDB)
          in a challenging software development role.
        </p>

        <div className="bg-gradient-to-b from-black to-gray-900 shadow-md shadow-gray-500 rounded-md w-full h-full p-4 mt-10">

          <p className="text-2xl font-bold">Education :</p>
          <div className="py-8 px-4">
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
