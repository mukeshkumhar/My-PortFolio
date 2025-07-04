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
  icefactory1,
  passwordgen,
  passwordvideo,
  recipevideo,
  tictacvideo,
  todovideo,
  movieVideo,
  portfoliovideo,
  nodeJspng,
  ice1,
  ice2,
  kana1,
  kana2,
  kana3,
  kana4,
  password1,
  password2,
  password3,
  password4,
  todolist1,
  todolist2,
  todolist3,
  todolist4,
  tictack1,
  tictack2,
  tictack3,
  tictack4,
  movie1,
  movie2,
  movie3,
  portfolio1,
  portfolio2,
  good1,
  good2,
  docverify1,
  docverify2,
  quantum1,
  quantum2,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
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
    icon: androidstudio,
  },
  {
    title: "Backend",
    icon: nodeJspng,
  },
  {
    title: "Database",
    icon: mongodb,
  },
];

const technologies = [
  {
    name: "java",
    icon: java,
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
    name: "Quantum Simulator App",
    description:
      "Quantum Simulator is a mobile-first learning and prototyping environment that puts the power of IBM’s Qiskit SDK in the palm of your hand.\nQuantum Basics\nBite-size tutorials and interactive diagrams that explain qubits, superposition, entanglement, and common gates—perfect for newcomers\nQuantum Code Editor\nWrite Qiskit-style Python snippets directly inside the app with syntax highlighting, autocomplete, and one-tap execution.\nCircuit Simulator\nDrag-and-drop gates, run the circuit on the built-in Aer backend, and view results as Bloch spheres, probability pie charts, or complex state-vector matrices.",
    tags: [
      {
        name: "Frontend: Kotlin + XML",
        color: "blue-text-gradient",
      },
      {
        name: "Backend API: FastAPI (Python) with Qiskit and NumPy, containerized & deployed on Render.com",
        color: "green-text-gradient",
      },
      {
        name: "Computation: Qiskit Aer for local simulation; ready to swap in real IBM Quantum backends",
        color: "pink-text-gradient",
      },
    ],
    images: [quantum1, quantum2,],
    video: icefactory1,
    image: passwordgen,
    source_code_link_linkdin:
      "https://www.linkedin.com/posts/mukesh-kumhar_quantumsimulator-qiskit-ibmq-activity-7342135266028961792-TscG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmNWJ8BdXPvJ2Z7tPZVJwMSBAlFWDzOpf8",
    source_code_link:
      "https://github.com/mukeshkumhar/Quantum-Simulator-App",
    run_app_link: "",
    download_link: "",
  },
  {
    name: "Ice Factory Management App",
    description:
      "Create & Manage Customers with email tracking Generate Detailed Bills(PDF format) organized by date, showcasing the factory name, logo, and an Excel- like structure with details on ice weight, pricing, packaging, and total cost. It's may take time upto 1 min if you are testing for the first time retry after 30 seconds. For Testing Use this ->  \n User Id: ice@gmail.com & Password: ice",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "MPAndroidChart",
        color: "green-text-gradient",
      },
      {
        name: "Pdf",
        color: "pink-text-gradient",
      },
    ],
    images: [ice1, ice2,],
    video: icefactory1,
    image: passwordgen,
    source_code_link_linkdin:
      "https://www.linkedin.com/posts/mukesh-kumhar_appdevelopment-mongodb-render-activity-7261589831435051009-wgwg?utm_source=share&utm_medium=member_desktop",
    source_code_link:
      "https://github.com/mukeshkumhar/IceFactory",
    run_app_link: "https://appetize.io/embed/b_wa4hgvvpcrl5gv3jgm2c2uodvi",
    download_link: "https://drive.google.com/file/d/1jQ3K4CmLKaIgpJDPh_9btErUqFKF707x/view?usp=sharing",
  },
  {
    name: "DocVerifyPro App",
    description:
      "DocVerifyPro is a multifunctional mobile app designed to make document handling fast, accurate, and mobile-friendly.\nHere’s a quick rundown of what it can do:\nParses PDFs in seconds, extracting name, email, phone, address, projects, and skills.\nCalculates a skill-match percentage and auto-saves only those resumes that meet or exceed a custom threshold.\nSaved-Resumes page lets recruiters review every matched candidate at a glance.\nText → QR: Create QR codes for any text, URL, or note right from your phone\nQR Scanner: Instantly decode and display information from any QR code",
    tags: [
      {
        name: "Frontend: Kotlin, Android Jetpack",
        color: "blue-text-gradient",
      },
      {
        name: "Backend: Node.js / Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Data Persistence: Room DB for on-device caching + JWT-secured API calls",
        color: "pink-text-gradient",
      },
    ],
    images: [docverify1, docverify2,],
    video: icefactory1,
    image: passwordgen,
    source_code_link_linkdin:
      "https://www.linkedin.com/posts/mukesh-kumhar_docverifypro-androiddev-kotlin-activity-7342133395814043648-sRXO?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmNWJ8BdXPvJ2Z7tPZVJwMSBAlFWDzOpf8",
    source_code_link:
      "https://github.com/mukeshkumhar/DocVerifyPro",
    run_app_link: "",
    download_link: "",
  },
  {
    name: "Good Health",
    description:
      "A mobile application designed to empower users to manage their health and well-being. Good Health integrates Gemini AI for health-related queries, provides detailed information on medications, and offers quick access to emergency services.",
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
        name: "Gemini AI",
        color: "pink-text-gradient",
      },
    ],
    images: [good1, good2,],
    video: icefactory1,
    image: passwordgen,
    source_code_link_linkdin:
      "https://www.linkedin.com/posts/mukesh-kumhar_androiddev-kotlin-mobileapp-activity-7293684216469303296-WIq7?utm_source=share&utm_medium=member_desktop",
    source_code_link:
      "https://github.com/mukeshkumhar/Good_Health_App",
    run_app_link: "https://appetize.io/embed/b_lbqy4avj4wcmksoobrnr62hs6i",
    download_link: "https://drive.google.com/file/d/1BlgG4hUWpvOZlPy1kJt26p3TOYzPdn59/view?usp=sharing",
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
    images: [kana1, kana2, kana3, kana4],
    video: recipevideo,
    image: recipefind,
    source_code_link_linkdin:
      "https://www.linkedin.com/posts/mukesh-kumhar_recipeapp-culinaryadventure-foodiedelight-activity-7156547974976671745-gvBL?utm_source=share&utm_medium=member_desktop",
    source_code_link: "https://github.com/mukeshkumhar/Recipe-App",
    run_app_link: "https://appetize.io/embed/b_wl3wdxvzsxsmcmtkdvtw2sbeoq",
    download_link: "https://drive.google.com/file/d/1Jes4YpnsA9B9Gfi0L49Js2ENzWzcpeE8/view?usp=sharing",
  },
  {
    name: "Password Generator",
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
    images: [password1, password2, password3, password4],
    video: passwordvideo,
    image: passwordgen,
    source_code_link_linkdin:
      "https://www.linkedin.com/posts/mukesh-kumhar_reactnative-mobiledev-passwordgenerator-activity-7182053356725575680-J4E0?utm_source=share&utm_medium=member_desktop",
    source_code_link:
      "https://github.com/mukeshkumhar/Password-Generator-App",
    run_app_link: "",
    download_link: "",
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
    images: [todolist1, todolist2, todolist3, todolist4],
    video: todovideo,
    image: todolist,
    source_code_link_linkdin:
      "https://www.linkedin.com/posts/mukesh-kumhar_reactnative-expo-mongodb-activity-7172046320294064128--FLt?utm_source=share&utm_medium=member_desktop",
    source_code_link: "https://github.com/mukeshkumhar/todoList",
    run_app_link: "",
    download_link: "",
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
    images: [tictack1, tictack2, tictack3, tictack4],
    video: tictacvideo,
    image: tictactoi,
    source_code_link_linkdin:
      "https://www.linkedin.com/posts/mukesh-kumhar_androiddev-java-gamedevelopment-activity-7136625284530769920-Qqh4?utm_source=share&utm_medium=member_desktop",
    source_code_link:
      "https://www.linkedin.com/posts/mukesh-kumhar_androiddev-java-gamedevelopment-activity-7136625284530769920-Qqh4?utm_source=share&utm_medium=member_desktop",
    run_app_link: "",
    download_link: "",
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
    images: [movie1, movie2, movie3],
    video: movieVideo,
    image: tictactoi,
    source_code_link_linkdin:
      "https://github.com/Codewhatyouwant/Movies-Website/tree/main/Movies%20Webside-1",
    source_code_link:
      "https://github.com/Codewhatyouwant/Movies-Website/tree/main/Movies%20Webside-1",
    run_app_link: "",
    download_link: "",
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
    images: [portfolio1, portfolio2],
    video: portfoliovideo,
    image: tictactoi,
    source_code_link_linkdin: "linkedin.com/in/mukesh-kumhar",
    source_code_link: "https://github.com/mukeshkumhar/PortFolio",
    run_app_link: "",
    download_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
