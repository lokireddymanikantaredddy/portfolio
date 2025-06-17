import { FaReact, FaJs, FaCss3, FaHtml5 } from 'react-icons/fa';
import { SiMongodb, SiOpenai, SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';
import carrental from '../../assets/car rental.png';
import dashboard from '../../assets/dashboard.png';
import portfolio1 from '../../assets/portfolio-1.png';
import billPrinter from '../../assets/bill-printer.png';
import chatInterface from '../../assets/chat-interface.png';
import portfolio from '../../assets/portfolio.png';

export const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'other', name: 'Other Projects' }
];

export const projectsData = [
  {
    id: 1,
    title: "Car Rental Platform",
    shortDescription: "Full-featured car rental platform with booking system",
    fullDescription: `A comprehensive car rental platform that allows users to browse, book, and manage vehicle rentals. 
    Built with React for the frontend and Node.js/MongoDB for the backend, featuring real-time availability and secure payments.`,
    images: [
      {
        url: carrental,
        caption: "Main dashboard view"
      }
    ],
    category: ['fullstack'],
    technologies: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3 },
      { name: 'JavaScript', icon: FaJs }
    ],
    features: [
      "Responsive design for all devices",
      "User authentication and profiles",
      "Admin dashboard for fleet management"
    ],
    challenges: [
      "Complex state management",
      "Real-time updates for bookings"
    ],
    solutions: [
      "Implemented Redux for state management"
    ],
    metrics: {
      users: "100+",
      bookings: "50+",
      rating: 4.8
    },
    links: {
      demo: "https://manirentacar.netlify.app/",
      code: "https://github.com/lokireddymanikantaredddy/car-rental.io"
    },
    status: "completed",
    completionDate: "2023",
    role: "Frontend Developer"
  },
  {
    id: 2,
    title: "Creator Dashboard",
    shortDescription: "Modern content creator dashboard with analytics",
    fullDescription: `A sleek and intuitive dashboard designed specifically for content creators. 
    Features a modern UI with Tailwind CSS, real-time analytics, and a drag-and-drop interface for task management.`,
    images: [
      {
        url: dashboard,
        caption: "Dashboard overview"
      }
    ],
    category: ['frontend'],
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'TailwindCSS', icon: SiTailwindcss },
      { name: 'JavaScript', icon: FaJs }
    ],
    features: [
      "Responsive dashboard layout",
      "Interactive data visualizations",
      "Drag-and-drop task management"
    ],
    challenges: [
      "Complex UI interactions",
      "Performance optimization",
      "State management"
    ],
    solutions: [
      "Used Framer Motion for smooth animations",
      "Implemented code splitting",
      "Utilized React Query for caching"
    ],
    metrics: {
      users: "100+",
      tasks: "100+",
      rating: 4.7
    },
    links: {
      demo: "https://creator-dashboard-nu.vercel.app/",
      code: "https://github.com/lokireddymanikantaredddy/Creator-Dashboard"
    },
    status: "completed",
    completionDate: "2024",
    role: "Full Stack Developer"
  },
  {
    id: 3,
    title: "AI Video Summarizer",
    shortDescription: "YouTube video summarizer using AI",
    fullDescription: `An innovative tool that leverages AI to automatically generate concise summaries of YouTube video transcripts. 
    Combines frontend technologies with AI services for an efficient and user-friendly experience.`,
    images: [
      {
        url: portfolio1,
        caption: "Summarizer interface"
      }
    ],
    category: ['other'],
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'OpenAI', icon: SiOpenai },
      { name: 'TailwindCSS', icon: SiTailwindcss },
      { name: 'JavaScript', icon: FaJs }
    ],
    features: [
      "YouTube video integration",
      "AI-powered summarization",
      "Adjustable summary length",
      "Copy and share functionality",
      "Mobile-friendly design"
    ],
    challenges: [
      "API integration complexity",
      "User experience optimization",
      "Mobile responsiveness"
    ],
    solutions: [
      "Implemented efficient API handling",
      "Added loading states and feedback",
      "Used responsive design patterns"
    ],
    metrics: {
      videos: "10+",
      summaries: "50+",
      accuracy: "95%"
    },
    links: {
      demo: "https://youtu.be/8fhrsuhGuaI?si=wpwJoSq4q9TParol",
      code: "https://github.com/lokireddymanikantaredddy/youtube-video-transcript-summarizer"
    },
    status: "completed",
    completionDate: "2025",
    role: "Frontend Developer & AI Integration"
  },
  {
    id: 4,
    title: "Sri Srinivasa Bill Printer",
    shortDescription: "Modern fertilizer shop management system with billing and inventory tracking",
    fullDescription: `A comprehensive shop management system built for Sri Srinivasa Fertilizers. Features include inventory management, billing system, customer tracking, and detailed analytics dashboard. Built with Next.js and TypeScript for optimal performance and type safety.`,
    images: [
      {
        url: billPrinter,
        caption: "Dashboard view with analytics"
      }
    ],
    category: ['fullstack'],
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'TailwindCSS', icon: SiTailwindcss },
      { name: 'MongoDB', icon: SiMongodb }
    ],
    features: [
      "Real-time inventory tracking",
      "Automated billing system",
      "Customer management",
      "Analytics dashboard",
      "Low stock alerts",
      "Sales reporting"
    ],
    challenges: [
      "Complex state management for real-time updates",
      "Efficient data organization for quick retrieval",
      "User-friendly interface for non-technical staff"
    ],
    solutions: [
      "Implemented efficient state management with React Context",
      "Optimized database queries for fast performance",
      "Created intuitive UI with clear visual hierarchy"
    ],
    metrics: {
      transactions: "100+",
      products: "100+",
      customers: "30+"
    },
    links: {
      demo: "https://srisrinivasafertilizers.netlify.app/dashboard",
      code: "https://github.com/lokireddymanikantaredddy/bill-printer"
    },
    status: "completed",
    completionDate: "2025",
    role: "Full Stack Developer"
  },
  {
    id: 5,
    title: "Portfolio Website",
    shortDescription: "Modern portfolio website with responsive design",
    fullDescription: `A modern portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean and responsive design with a focus on user experience.`,
    images: [
      {
        url: portfolio,
        caption: "Portfolio website"
      }
    ],
    category: ['frontend'],
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'JavaScript', icon: FaJs },
      { name: 'CSS', icon: FaCss3 },
    ],
    features: [
      "Responsive design for all devices",
      "Smooth animations and transitions",
      "Interactive portfolio sections",
      "Contact form integration"
    ],
    challenges: [
      "Performance optimization for large datasets",
      "Cross-browser compatibility",
      "Responsive design for all devices"
    ],
    solutions: [
      "Used Framer Motion for smooth animations",
      "Implemented code splitting",
      "Utilized React Query for caching"
    ],
    metrics: {
      visitors: "100+",
      views: "100++",
      engagement: "95%"
    },
    links: {
      demo: "https://manikantareddyportfolio.netlify.app/",
      code: "https://github.com/lokireddymanikantaredddy/portfolio"
    },
    status: "completed",
    completionDate: "2024",
    role: "Frontend Developer"
  },
  {
    id: 6,
    title: "AI Chatbot",
    shortDescription: "AI chatbot with real-time responses",
    fullDescription: `An AI chatbot built with React, TypeScript, and Tailwind CSS. Features a clean and responsive design with a focus on user experience.`,
    images: [
      {
        url: chatInterface,
        caption: "Chatbot interface"
      }
    ],
    category: ['other'],
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'TailwindCSS', icon: SiTailwindcss },
      { name: 'OpenAI', icon: SiOpenai }
    ],
    features: [
      "Real-time chat responses",
      "Context-aware conversations",
      "Light and dark mode",
      "User authentication",
      "Responsive design",
      "Mobile-friendly interface",
      "Typing animation",
      "Chat history"
    ],
    challenges: [
      "API integration complexity",
      "User experience optimization",
      "Mobile responsiveness",
      "Typing animation"
    ],
    solutions: [
      "Implemented efficient API handling",
      "Added loading states and feedback",
      "Used responsive design patterns",
      "Added typing animation"
    ],
    metrics: {
      chats: "1000+",
      responses: "5000+",
      accuracy: "95%"
    },
    links: {
      demo: "https://zerocode-fe.netlify.app/", 
      code: "https://github.com/lokireddymanikantaredddy/zerocode-fe-assignment"
    },
    status: "completed",
    completionDate: "2025",
    role: "Frontend Developer"
  },


];

export const getProjectsByCategory = (category) => {
  if (category === 'all') return projectsData;
  return projectsData.filter(project => project.category.includes(category));
};

export const searchProjects = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return projectsData.filter(project => 
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.shortDescription.toLowerCase().includes(lowercaseQuery) ||
    project.technologies.some(tech => tech.name.toLowerCase().includes(lowercaseQuery))
  );
}; 