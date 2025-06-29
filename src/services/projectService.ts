// Project service for fetching project data

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

// Mock projects data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product listings, cart, checkout, and payment processing.",
    image: "/images/projects/project-1.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-1",
    featured: true,
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for tracking engagement across multiple social platforms.",
    image: "/images/projects/project-2.jpg",
    tags: ["React", "D3.js", "Firebase", "Material UI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-2",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Collaborative task manager with real-time updates and team workflow features.",
    image: "/images/projects/project-3.jpg",
    tags: ["Vue.js", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-3",
    featured: true,
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description:
      "Location-based weather forecasting with historical data and predictions.",
    image: "/images/projects/project-4.jpg",
    tags: ["React Native", "OpenWeather API", "Expo"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-4",
    featured: false,
  },
  {
    id: 5,
    title: "Personal Finance Tracker",
    description:
      "Track expenses, income, and savings goals with visualized reports.",
    image: "/images/projects/project-5.jpg",
    tags: ["Angular", "Chart.js", "Express", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-5",
    featured: false,
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description:
      "Workout planner with progress tracking and nutrition recommendations.",
    image: "/images/projects/project-6.jpg",
    tags: ["Flutter", "Firebase", "Google Fit API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-6",
    featured: false,
  },
];

/**
 * Fetches all projects
 * Simulates API latency with a configurable delay
 */
export async function fetchAllProjects(
  config: { delay?: number } = {}
): Promise<Project[]> {
  const { delay = 800 } = config;
  
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, delay));
  
  return [...projects];
}

/**
 * Fetches only featured projects
 * Simulates API latency with a configurable delay
 */
export async function fetchFeaturedProjects(
  config: { delay?: number } = {}
): Promise<Project[]> {
  const { delay = 800 } = config;
  
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, delay));
  
  return projects.filter(project => project.featured);
}
