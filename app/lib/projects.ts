export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "Modern and minimalist portfolio built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and responsive design.",
    image: "/images/projects/portfolio.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://asifzulfiqar.pro",
    githubUrl: "https://github.com/asifzulfiqar8/portfolio",
    featured: true,
  },
  {
    id: "chatbot",
    title: "AI Chatbot Platform",
    description:
      "An intelligent chatbot platform leveraging OpenAI's GPT models. Built with real-time capabilities and dynamic response generation.",
    image: "/images/projects/portfolio.png",
    tags: ["React", "Node.js", "OpenAI", "Socket.io"],
    githubUrl: "https://github.com/asifzulfiqar8/chatbot",
    featured: true,
  },
  {
    id: "ecommerce",
    title: "E-commerce Dashboard",
    description:
      "Full-featured e-commerce admin dashboard with inventory management, order processing, and analytics.",
    image: "/images/projects/portfolio.png",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/asifzulfiqar8/ecommerce",
  },
];
