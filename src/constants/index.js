import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Enthusiastic in Web 3",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Campus Ambassador",
    company_name: "E-CELL IIT KANPUR",
    icon: starbucks,
    iconBg: "#383E56",
    date: "December 2022 - Fabuary 2023",
    points: [
      "Gain experience in leadership and communication skills.",
      "Got access to networking opportunities and make connections with professionals.",
      "Maintain upkeep of computers, classroom equipment, and 200 printers across campus.",
     
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Oasis Infobyte",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2023 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Assisted in the implementation of responsive and visually appealing user interfaces.",
      "Contributed to the frontend logic by writing JavaScript code to enhance user interactivity.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Ensured the website’s responsiveness across various devices and screen sizes, making it user-friendly and accessible to a broader audience.",
    ],
  },
  // {
  //   title: "Web Developer Intern",
  //   company_name: "Info aidTech",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "30 Hours Hackathon",
    company_name: "Hack4Bengal",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2023",
    points: [
      "Participated in a high-intensity 30-hour hackathon, working closely with a team of 4 members to develop a full-stack web application from ideation to implementation",
      "Assisted in backend development tasks, leveraging appropriate technologies e.g., Node.js, Express.js, Django to design robust APIs and manage data interactions.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Soura proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Soura does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Soura optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Shopping Cart",
    description:
      "In this project, I embarked on creating a dynamic and user-friendly shopping cart website using the power of React. The goal was to develop an intuitive platform that allows users to explore products. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/soura07/Shopping-Cart",
  },
  {
    name: "React E-Commerce",
    description:
      "A modern e-commerce website with great UI UX built using react with google pay, visa, mastercard and paypal integration.And 4 page and many layouts are available.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/soura07/React-E-Commerce-Website",
  },
  {
    name: "Travel Agency Website",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/soura07/Travel-Agency-Website",
  },
];

export { services, technologies, experiences, testimonials, projects };
