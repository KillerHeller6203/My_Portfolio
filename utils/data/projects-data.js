import chat from "/public/image/travel.jpg";
import blog from "/public/image/crefin.jpg";
import microservices from "/public/image/ayla.jpg";


export const projectsData = [
  {
      id: 1,
      name: 'Ultra Doc-Intelligence – Grounded RAG System',
      description: "Backend-first, document-centric RAG system built for logistics documents with strict hallucination control. Designed an end-to-end pipeline using FastAPI, FAISS vector search, and local LLM inference (Ollama – Llama3). Implemented recursive chunking, semantic top-k retrieval, deterministic confidence scoring, and pre-generation guardrails that block weak retrieval. Built schema-stable extraction APIs with refusal logic to ensure grounded, explainable, and production-ready GenAI outputs.",
      tools: ['Python', 'FastAPI', 'FAISS', 'Sentence Transformers', 'Ollama (Llama3)', 'Streamlit', 'RAG', 'Vector Search', 'Prompt Engineering', 'Guardrails'],
      role: 'GenAI Engineer | Backend AI Systems Developer',
      link: "https://github.com/KillerHeller6203/ultra-doc-intelligence",
      code: "https://github.com/KillerHeller6203",
      demo: '',
      image: chat,
  },
  {
    id: 2,
    name: "Event-Driven RAG System",
    description:
      "Built a production-oriented Retrieval-Augmented Generation (RAG) system using an event-driven architecture. Implemented asynchronous PDF ingestion, chunking, and embeddings with Hugging Face, stored vectors in Qdrant, and enabled semantic search at query time. Orchestrated workflows with Inngest for retries and observability, and generated grounded answers using a local LLM (Ollama). Included an optional Streamlit UI for document upload and querying.",
    tools: [
      "Python",
      "FastAPI",
      "Inngest",
      "Qdrant",
      "Hugging Face",
      "Ollama",
      "Streamlit",
      "Docker"
    ],
    role: "Backend / GenAI Developer",
    link: "https://github.com/KillerHeller6203/event-driven-rag-system",
    code: "https://github.com/KillerHeller6203",
    demo: "",
    image: blog,
  },
  
  {
    id: 3,
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
      id: 4,
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
