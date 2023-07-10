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
  starbucks,
  carrent,
  threejs,
  bookstore,
  reservation_app,
  amazon,
  PayPal,
  
 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "UX Designer",
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
    name: "Next JS",
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
    name: "ruby",
    icon: docker,
  },
];

const experiences = [
  {
    title: "FullStack Developer",
    company_name: "Freelancer",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      
    ],
  }
];



const projects = [
  {
    name: "Restaurant",
    description:
      "The Web-based Restaurant Reservation platform enables users to access menus and book tables at their preferred restaurants. Users can conveniently view available menus, explore dishes, check table availability, and make reservations, ensuring a seamless dining experience and hassle-free table booking process.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Bernard065/The-Gericht-Garden-restaurant-application",
    live_link: "https://the-gourmet-garden-restaurant-application.vercel.app/",
  },
  {
    name: "Reservation",
    description:
      "Reservation Application is a user-friendly platform that simplifies the process of reserving hotel rooms. Users can search for available rooms, view details and amenities, select desired dates, and make reservations. With a seamless booking experience, users can effortlessly secure their accommodations for a comfortable and enjoyable stay.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Rails",
        color: "orange-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Material UI",
        color: "blue-text-gradient",
      },
      
    ],
    image: reservation_app,
    source_code_link: "https://github.com/Bernard065/reservation-App",
    live_link: "https://reservation-app-mu.vercel.app/",
  },
  {
    name: "PayPal Clone",
    description:
      "The PayPal Homepage Clone Application recreates the appearance and functionality of the PayPal homepage. Users can signup and access their accounts, and explore PayPal's services, providing a familiar and intuitive platform for online financial management.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
    ],
    image: PayPal,
    source_code_link: "https://github.com/Bernard065/paypal-clone",
    live_link: "https://paypal-clone-tau.vercel.app/",
  },
  {
    name: "Bookstore",
    description:
      "The Bookstore Application is a user-friendly platform that allows users to browse, search online. With a wide selection of titles, users can easily find and explore their favorite books, read descriptions for an enjoyable reading experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JSON API",
        color: "pink-text-gradient",
      },
    ],
    image: bookstore,
    source_code_link: "https://github.com/Bernard065/bookstore-app/tree/Bernard",
    live_link: "https://bookstore-app-topaz.vercel.app/",
  },
  {
    name: "Amazon clone",
    description:
      "The Amazon Landing Page Clone Application replicates the look and functionality of Amazon's landing page. Users can browse products, read descriptions and reviews, and make purchases. It offers a familiar and immersive shopping experience, providing a seamless e-commerce platform similar to Amazon.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      
    ],
    image: amazon,
    source_code_link: "https://github.com/Bernard065/Amazon-clone",
    live_link: "https://amazon-clone-sandy-one.vercel.app/",
  },
];

export { services, technologies, experiences, projects };