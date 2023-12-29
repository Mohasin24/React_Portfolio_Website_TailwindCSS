const education = [
  {
    id: 1,
    course: "B.E. Information Technology",
    score: "7.76 CGPA",
    institute: "Savitribai Phule Pune University",
    description:
      "I pursued a Bachelor's degree in Information Technology from Savitribai Phule Pune University, where I gained a strong foundation in various aspects of IT.",
  },
  {
    id: 2,
    course: "HSC",
    score: "76.31%",
    institute: "Maharashtra State Board",
    description:
      "I successfully completed my Higher Secondary Education from the Maharashtra State Board with a notable achievement of securing a 76.31% overall score.",
  },
  {
    id: 3,
    course: "SSC",
    score: "82.20%",
    institute: "Maharashtra State Board",
    description:
      "I successfully completed my Secondary School Certificate (SSC) from the Maharashtra State Board, achieving an impressive overall percentage of 82.20%. This period of my education laid a strong foundation for my academic journey.",
  },
];

const Education = () => {
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {education.map(({id, course, institute, score, description }) => (
        <li key={id}>
          <div className="bg-gray-800 rounded-md p-4">
            <p className="font-bold md:text-[1.5rem] pb-2">{course}</p>
            <p className="pb-2">
              <span className="font-bold">University/Board:</span>{" "}
              <span>{institute}</span>
            </p>
            <p className="pb-2">
              <span className="font-bold">Percentage/CGPA:</span> {score}
              <span></span>
            </p>
            <p>{description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Education;
