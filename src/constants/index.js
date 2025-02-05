import {
  backend,
  creator,
  css,
  docker,
  ecom,
  expense,
  figma,
  git,
  html,
  IT,
  javascript,
  lws,
  manual,
  mobile,
  mongodb,
  nodejs,
  projectify,
  reactjs,
  realestate,
  redux,
  selenium,
  tailwind,
  threejs,
  typescript,
  web,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Web designer",
    icon: backend,
  },
  {
    title: "Software Tester",
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
    title: "Reactive Accelerator course",
    company_name: "Learn with Sumit",
    icon: lws,
    iconBg: "#383E56",
    date: "August 2024 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Hands on SQA Course",
    company_name: "IT Training Bd",
    icon: IT,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - june 2024",
    points: [
      "Writing and Reviewing Test Cases.",
      "Test Execution and Evaluation",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Creating Test Report, Root cause analysis & Bug Reporting using Test management tools",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
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
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Hasib proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Hasib does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Hasib optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "221B Baker Street",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "DailyShop",
    description:
      "Web-based platform that allows users to search, select, buy  daily needs from various providers, providing a convenient and efficient solution for consumers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://ecom-productlist.vercel.app/",
  },
  {
    name: "Projectify",
    description:
      "Web application that enables users to search for Task openings, view estimated Task Time ranges and deadlines.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: projectify,
    source_code_link: "https://projectify-six.vercel.app/",
  },
  {
    name: "Expense-tracker",
    description:
      "A comprehensive tracking  platform that allows users to track daily expense and income.",
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
    image: expense,
    source_code_link: "https://expense-tracker-chi-snowy.vercel.app/",
  },
  {
    name: "Real-estate",
    description: "Where user Buy and sell their properties.",
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
    image: realestate,
    source_code_link: "https://real-estate-webapp-blond.vercel.app/",
  },
  {
    name: "Automation Testing with selenium",
    description: "Interacting Interface testing scripts",
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
    image: selenium,
    source_code_link: "https://github.com/Rafidulhasib/BreakDown_Automation",
  },
  {
    name: "Manual Testing with Test cases",
    description: "Rokomari.com user interaction Test cases",
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
    image: manual,
    source_code_link: "https://github.com/Rafidulhasib/Manual_Testing_project2",
  },
];

export { experiences, projects, services, technologies, testimonials };
