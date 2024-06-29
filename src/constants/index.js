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
  androidstudio,
  androidStudio,
  reactnative,
  kotlin,
  webpage,
  jobit,
  tripguide,
  threejs,
  react,
  java,
  kotlin1,
  tictactoi,
  recipefind,
  portfolioweb,
  todolist,
  movies,
  passwordgen,
  passwordvideo,
  recipevideo,
  tictacvideo,
  todovideo,
  movieVideo,
  portfoliovideo,
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
    title: "App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Video Editor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "java",
    icon: java,
  },
  {
    name: "Android Studio",
    icon: androidStudio,
  },
  {
    name: "kotlin",
    icon: kotlin1,
  },
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
    name: "React JS",
    icon: reactjs,
  },
];

const experiences = [
  {
    title: "Android App Developer",
    company_name: "Java & Kotlin",
    icon: kotlin,
    iconBg: "#383E56",
    date: "Nov 2023 ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Android Apps",
    icon: reactnative,
    iconBg: "#E6DEDD",
    date: "Feb 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: webpage,
    iconBg: "#383E56",
    date: "March 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "3D PortFolio",
    icon: react,
    iconBg: "#E6DEDD",
    date: "Jun 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Password Generator App",
    description:
      "Choose the character types uppercase, lowercase, numbers, or symbols. Easily copy with a LONG PRESS",
    tags: [
      {
        name: "React-Native",
        color: "blue-text-gradient",
      },
      {
        name: "npm",
        color: "green-text-gradient",
      },
      {
        name: "Android",
        color: "pink-text-gradient",
      },
    ],
    video: passwordvideo,
    image: passwordgen,
    source_code_link_linkdin:
      "https://www.linkedin.com/posts/mukesh-kumhar_reactnative-mobiledev-passwordgenerator-activity-7182053356725575680-J4E0?utm_source=share&utm_medium=member_desktop",
    source_code_link:
      "https://github.com/Codewhatyouwant/Password-Generator-App",
  },
  {
    name: "Recipe App",
    description:
      "🥗 Dive into the simplicity of four distinct categories: Salad, Main, Dessert, and Drinks. Each recipe comes with a time indicator.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Android Studio",
        color: "green-text-gradient",
      },
      {
        name: "XML",
        color: "pink-text-gradient",
      },
    ],
    video: recipevideo,
    image: recipefind,
    source_code_link_linkdin:
      "https://www.linkedin.com/posts/mukesh-kumhar_recipeapp-culinaryadventure-foodiedelight-activity-7156547974976671745-gvBL?utm_source=share&utm_medium=member_desktop",
    source_code_link: "https://github.com/Codewhatyouwant/Recipe-App",
  },
  {
    name: "Todo List App",
    description:
      "User Authentication, MongoDB Integration, Intuitive Home Page, Calendar View, Profile Section with Charts.",
    tags: [
      {
        name: "React-Native",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
      },
      {
        name: "ios",
        color: "pink-text-gradient",
      },
    ],
    video: todovideo,
    image: todolist,
    source_code_link_linkdin:
      "https://www.linkedin.com/posts/mukesh-kumhar_reactnative-expo-mongodb-activity-7172046320294064128--FLt?utm_source=share&utm_medium=member_desktop",
    source_code_link: "https://github.com/Codewhatyouwant/todoList",
  },
  {
    name: "Tic Tac Toe ",
    description:
      "The app features a handy reset button, it keeps track of turns and declares the ultimate winner!",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      },
      {
        name: "Android Studio",
        color: "green-text-gradient",
      },
      {
        name: "XML",
        color: "pink-text-gradient",
      },
    ],
    video: tictacvideo,
    image: tictactoi,
    source_code_link_linkdin:
      "https://www.linkedin.com/posts/mukesh-kumhar_androiddev-java-gamedevelopment-activity-7136625284530769920-Qqh4?utm_source=share&utm_medium=member_desktop",
    source_code_link:
      "https://www.linkedin.com/posts/mukesh-kumhar_androiddev-java-gamedevelopment-activity-7136625284530769920-Qqh4?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Movies Website",
    description:
      "Navigate and find information quickly. A search bar empowers users to find specific movies. Movies are categorized.",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      },
      {
        name: "Android Studio",
        color: "green-text-gradient",
      },
      {
        name: "XML",
        color: "pink-text-gradient",
      },
    ],
    video: movieVideo,
    image: tictactoi,
    source_code_link_linkdin:
      "https://github.com/Codewhatyouwant/Movies-Website/tree/main/Movies%20Webside-1",
    source_code_link:
      "https://github.com/Codewhatyouwant/Movies-Website/tree/main/Movies%20Webside-1",
  },
  {
    name: "PortFolio Website",
    description:
      "This likely includes clear navigation to different sections like About Me, Projects and Contact.",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      },
      {
        name: "Android Studio",
        color: "green-text-gradient",
      },
      {
        name: "XML",
        color: "pink-text-gradient",
      },
    ],
    video: portfoliovideo,
    image: tictactoi,
    source_code_link_linkdin: "linkedin.com/in/mukesh-kumhar",
    source_code_link: "https://github.com/Codewhatyouwant/PortFolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
