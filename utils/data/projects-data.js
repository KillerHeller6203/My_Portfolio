import chat from "/public/image/travel.jpg";
import blog from "/public/image/crefin.jpg";
import microservices from "/public/image/ayla.jpg";


export const projectsData = [
  {
    id: 1,
    name: 'AI Avatar Interaction System',
    description: "Real-time, voice-based AI interview system enabling low-latency conversations using STT, LLMs, and TTS. Built a WebSocket-driven streaming pipeline with FastAPI to handle bi-directional audio and token streaming. Integrated offline Whisper for speech-to-text, streaming LLM inference, and browser-side audio playback with clean session and state isolation. Designed a modular backend architecture separating STT, LLM, and TTS components for scalability and production readiness.",
    tools: ['Python', 'FastAPI', 'WebSockets', 'Whisper (STT)', 'LLMs', 'TTS', 'Next.js', 'React', 'FFmpeg', 'Web Audio API'],
    role: 'AI Systems Engineer | Real-Time AI Developer',
    link: "https://github.com/KillerHeller6203/Ai-Avatar-Interaction",
    code: "https://github.com/KillerHeller6203/Aqua-Sense-AI",
    demo: "",
    image: chat,
},
  {
    id: 2,
    name: "RAG Vector Search Benchmark",
    description:
      "Built and benchmarked three retrieval strategies (raw vector search, query expansion + reranking, and HyDE) against a distributed-systems document corpus, measuring MRR, Hit@3, context precision, and latency. Designed every component (embedder, vector store, retriever) behind abstract base classes for a documented, swappable migration path to Vertex AI. Backed by a 25-test pytest suite with coverage reporting to validate embeddings, storage, retrieval, and evaluation logic independently.",
    tools: [
      "Python",
      "FAISS",
      "Sentence Transformers",
      "Cross-Encoder Reranking",
      "HyDE",
      "pytest",
      "Vector Search",
      "RAG"
    ],
    role: "GenAI Engineer | Backend AI Systems Developer",
    link: "https://github.com/KillerHeller6203/Teleport-Sementic-RAG-Vector-Search",
    code: "https://github.com/KillerHeller6203",
    demo: "",
    image: blog,
  },
  {
    id: 3,
    name: "SAP O2C Graph Explorer",
    description:
      "Built a context-graph system with an LLM-powered natural-language query interface for exploring real SAP Order-to-Cash data across 19 relational tables. Implemented two-stage LLM prompting (NL-to-SQL generation, then grounded response synthesis) with conversation memory for follow-up queries, and prompt-injection guardrails that reject off-topic questions before executing any query. Built an interactive D3.js graph frontend with live node highlighting tied to query results, and a transparent NL-to-SQL toggle for every response.",
    tools: [
      "Python",
      "FastAPI",
      "Gemini",
      "SQLite",
      "SQLAlchemy",
      "D3.js",
      "Prompt Engineering",
      "Guardrails"
    ],
    role: "Backend / GenAI Developer",
    link: "https://github.com/KillerHeller6203/sap_o2c_graph_explorer",
    code: "https://github.com/KillerHeller6203",
    demo: "https://sap-o2c-graph-explorer-2nd1.onrender.com/",
    image: chat,
  },
  {
    id: 4,
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
      id: 5,
      name: 'Support Ticket System',
      description: "Production-style full-stack Support Ticket System built with Django REST Framework, React, and PostgreSQL, containerized using Docker Compose. Designed REST APIs for ticket creation, filtering, search, status workflows, and aggregated analytics using optimized database queries. Integrated an LLM-based real-time classification service to suggest category and priority, with graceful fallback handling to maintain reliability. Focused on clean data modeling, backend validation, and scalable API design aligned with SaaS workflows.",
      tools: ['Python', 'Django', 'Django REST Framework', 'React', 'PostgreSQL', 'Docker', 'LLM Integration', 'REST APIs'],
      role: 'Backend Developer | Full-Stack Engineer',
      link: "https://github.com/KillerHeller6203/Improved-Support-Ticket-System",
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
