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
    link: "https://github.com/KillerHeller6203/blog-backend",
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
    link: "https://github.com/KillerHeller6203/blog-microservices-backend",
    code: "https://github.com/KillerHeller6203",
    demo: "",
    image: microservices,
  },

  {
      id: 3,
      name: 'AquaSenseAI',
      description: "Developed a real-time water quality monitoring dashboard tracking 9+ parameters (pH, DO, BOD, turbidity, etc.) across 44+ monitoring stations in 28 Indian states. Implemented automated NSF Water Quality Index (WQI) computation and ARIMA-based time-series forecasting to analyze long-term water quality trends using historical data (2000–2022). Built interactive visualizations with geographic insights and basic anomaly detection for data validation.",
      tools: ['Python', 'ARIMA', 'Javascript', 'Matplotlib', "Chart.js"],
      role: 'Full-Stack Developer | Data Analytics Engineer',
      link: "https://aqua-sense-ai.vercel.app/",
      code: "https://github.com/KillerHeller6203/Aqua-Sense-AI",
      demo: "",
      image: chat,
  },
  {
      id: 4,
      name: 'PrepWell - AI Mock Interview System',
      description: "Built an AI-powered mock interview platform that simulates real interview scenarios using role-specific, adaptive question generation with Google Gemini. Integrated Vapi AI for real-time voice-based interviews with low-latency speech synthesis and responses. Designed configurable interviewer personas using prompt engineering and developed an automated evaluation module providing structured feedback, transcripts, skill-wise scoring, and improvement suggestions to track user performance.",
      tools: ['Javascript', 'Firebase (Auth)', 'Vapi AI', 'Google Gemini API', "ShadCN UI"],
      role: 'Full-Stack Developer | AI Application Developer',
      link: "https://github.com/KillerHeller6203/AI_PrepWell",
      code: "https://github.com/KillerHeller6203",
      demo: '',
      image: chat,
  },

  {
      id: 5,
      name: 'AI Automation Workflow Prototype',
      description: "End-to-end GenAI-powered automation workflow prototype built using n8n, LLMs, and external APIs. Designed modular, event-driven workflows using webhooks and cron triggers to automate tasks like lead processing, notifications, and data transformation. Implemented reusable JSON templates, mock AI agents for decision-making, and integrations with Slack/CRM/Email systems. Focused on scalability, extensibility, and real-world automation patterns used in production AI ops.",
      tools: ['n8n', 'JavaScript', 'AI Agents (Mocked)', 'Webhooks', 'Cron', 'JSON Templates',"Slack/CRM/Email (Mock)"],
      role: 'AI Automation Engineer | Workflow Automation Developer',
      link: "https://github.com/KillerHeller6203/ai-automation-engineer-prototype",
      code: "https://github.com/KillerHeller6203",
      demo: '',
      image: chat,
  },

  {
    id: 6,
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
    link: "https://github.com/KillerHeller6203/Chat-Application",
    code: "https://github.com/KillerHeller6203",
    demo: "",
    image: chat,
  },
  
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
