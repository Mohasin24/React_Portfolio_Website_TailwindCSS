// Importing the Education data from the specified path
import { Education as educationData } from "../Data";

// Education component to display educational details
const Education = () => {
  return (
    // Unordered list for education details with a grid layout for responsiveness
    <ul className="grid gap-6 md:grid-cols-2">
      {/* Mapping through the education data to generate list items */}
      {educationData.map(({ id, course, institute, score, description }) => (
        <li key={id}>
          {/* Each list item is a card displaying education details */}
          <div className="bg-gray-800 rounded-md p-4">
            {/* Course title with a bold font */}
            <p className="font-bold md:text-[1.5rem] pb-2">{course}</p>
            {/* Institute and Board details */}
            <p className="pb-2">
              <span className="font-bold">University/Board:</span>{" "}
              <span>{institute}</span>
            </p>
            {/* Percentage or CGPA details */}
            <p className="pb-2">
              <span className="font-bold">Percentage/CGPA:</span> {score}
            </p>
            {/* Description of the educational experience */}
            <p>{description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

// Exporting the Education component as the default export
export default Education;
