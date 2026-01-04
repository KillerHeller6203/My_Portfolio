import chat from "/public/image/travel.jpg";
import blog from "/public/image/crefin.jpg";
import microservices from "/public/image/ayla.jpg";


export const projectsData = [
  {
    id: 1,
    name: "Blog Management Backend",
    description:
      "Developed a scalable blog management backend using Spring Boot, providing RESTful APIs for user authentication, blog posts, comments, and likes. Secured endpoints using JWT authentication and role-based authorization with Spring Security. Designed relational data models using MySQL and Spring Data JPA. Containerized the application using Docker and created API documentation to improve onboarding and maintainability.",
    tools: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "JWT",
      "MySQL",
      "Spring Data JPA",
      "Docker"
    ],
    role: "Backend Developer",
    link: "",
    code: "https://github.com/KillerHeller6203",
    demo: "",
    image: blog,
  },
  {
    id: 2,
    name: "Microservices Blog Platform",
    description:
      "Built a microservices-based blog platform by decomposing a monolithic application into independent services for user management, posts, categories, and authentication. Implemented an API Gateway using Spring Cloud Gateway to act as a single entry point for routing and request handling. Secured inter-service communication using JWT authentication and centralized security logic. Containerized all services with Docker and managed service-to-service communication using REST APIs, improving scalability and maintainability.",
    tools: [
      "Java",
      "Spring Boot",
      "Spring Cloud Gateway",
      "Microservices",
      "JWT",
      "REST APIs",
      "PostgreSQL",
      "Docker"
    ],
    role: "Backend Developer",
    link: "",
    code: "https://github.com/KillerHeller6203",
    demo: "",
    image: microservices,
  },

  {
    id: 3,
    name: "Real-Time Chat Application",
    description:
      "Designed and developed a real-time chat backend using Spring Boot and WebSockets, supporting authenticated messaging across multiple chat rooms. Implemented JWT-based authentication and role-based access control (RBAC) to ensure secure communication. Built REST APIs for user management, chat room creation, and message history persistence using PostgreSQL and Spring Data JPA. Containerized the application with Docker and deployed it for testing, achieving reliable real-time communication with support for 100+ concurrent sessions.",
    tools: [
      "Java",
      "Spring Boot",
      "WebSockets",
      "JWT",
      "Spring Security",
      "PostgreSQL",
      "Spring Data JPA",
      "Docker"
    ],
    role: "Backend Developer",
    link: "",
    code: "https://github.com/KillerHeller6203",
    demo: "",
    image: chat,
  },
  // {
  //     id: 4,
  //     name: 'Newsroom Management',
  //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
  //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
  //     code: '',
  //     demo: '',
  //     image: ayla,
  //     role: 'Full Stack Developer',
  // }
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
