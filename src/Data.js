import amazon from './assets/projects/amazon.png'
import brand_page from './assets/projects/brand_page.png'
import doctor_management from './assets/projects/doctor_management.png'
import flipkart from './assets/projects/flipkart.png'
import invoice_management from './assets/projects/invoice_management.png'
import portfolio from './assets/projects/portfolio.png'

export const domainList = [
     "Full Stack Java Developer",
     "Full Stack Web Developer",
     "MERN Stack Developer",
     "Learning Angular 17"
]

export const Personal_Description = `
Hello! I'm Mohasin Patel, an enthusiastic and skilled recent graduate
          with a B.E. in Information Technology, equipped with a diverse range
          of technical skills including Java (core and advanced), C, C++, Data
          Structures and Algorithms, and full-stack web development using the
          MERN stack. Eager to contribute to a dynamic team and apply my
          proficiency in Java frameworks (Spring, Spring Boot, Spring MVC,
          Hibernate, Spring Security) and database technologies (SQL, MongoDB)
          in a challenging software development role.
`

export const Education = [
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
   


export const Experience = [
  {
    id:1,
    designation:"Associate Software Engineer",
    organisation:"Tech Mahindra Ltd.",
    type:"Full-Time",
    date:"March 2024 - Present",
    location:"Hinjewadi, Pune",
    skill:"Java, React, TypeScript, SPFx Developement, Microsoft PowerApps, Microsoft SharePoint Developement, Microsoft PowerAutomate"
  }
];

// Project data with images
export const projects = [
  {
    id: 1,
    src: amazon,
    git:"https://github.com/Mohasin24/Amazon_Clone_SpringBoot_React_Tailwind",
    demo:null
  },
  {
    id: 2,
    src: brand_page,
    git:"https://github.com/Mohasin24/Apple_Brand_Page_ReactJs",
    demo:null
  },
  {
    id: 3,
    src: doctor_management,
    git:"https://github.com/Mohasin24/Doctor_Management_System_Spring_Boot_JSP",
    demo:null
  },
  {
    id: 4,
    src: flipkart,
    git:"https://github.com/Mohasin24/Flipkart_Clone",
    demo:null
  },
  {
    id: 5,
    src: invoice_management,
    git:"https://github.com/Mohasin24/Invoice_Management_System_React_Spring_Boot",
    demo:null
  },
  {
    id: 6,
    src: portfolio,
    git:"https://github.com/Mohasin24/React_Portfolio_Website_TailwindCSS",
    demo:"https://mohasin-patel.netlify.app/"
  },
];