import { NextResponse } from 'next/server';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
    imageUrl: '/images/projects/ecommerce.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://ecommerce-demo.example.com',
    githubUrl: 'https://github.com/example/ecommerce',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A productivity app for managing tasks with drag-and-drop functionality, reminders, and team collaboration.',
    imageUrl: '/images/projects/task-manager.jpg',
    tags: ['TypeScript', 'React', 'Firebase'],
    demoUrl: 'https://taskmanager.example.com',
    githubUrl: 'https://github.com/example/task-manager',
    featured: true,
  },
  {
    id: '3',
    title: 'AI Chat Application',
    description: 'A chat application powered by AI to provide intelligent responses and assistance.',
    imageUrl: '/images/projects/ai-chat.jpg',
    tags: ['Python', 'TensorFlow', 'React', 'WebSockets'],
    demoUrl: 'https://ai-chat.example.com',
    githubUrl: 'https://github.com/example/ai-chat',
    featured: false,
  },
  {
    id: '4',
    title: 'Fitness Tracker',
    description: 'A mobile app for tracking workouts, nutrition, and fitness progress with data visualization.',
    imageUrl: '/images/projects/fitness.jpg',
    tags: ['React Native', 'GraphQL', 'D3.js'],
    demoUrl: 'https://fitness.example.com',
    githubUrl: 'https://github.com/example/fitness-tracker',
    featured: false,
  },
  {
    id: '5',
    title: 'Weather Dashboard',
    description: 'Real-time weather information and forecasts with interactive maps and location-based services.',
    imageUrl: '/images/projects/weather.jpg',
    tags: ['JavaScript', 'APIs', 'Chart.js'],
    demoUrl: 'https://weather.example.com',
    githubUrl: 'https://github.com/example/weather-app',
    featured: false,
  },
  {
    id: '6',
    title: 'Social Media Analytics',
    description: 'A dashboard for tracking and analyzing social media performance across multiple platforms.',
    imageUrl: '/images/projects/social-analytics.jpg',
    tags: ['Vue.js', 'Express', 'PostgreSQL'],
    demoUrl: 'https://analytics.example.com',
    githubUrl: 'https://github.com/example/social-analytics',
    featured: false,
  },
];

export async function GET() {
  // Simulate loading delay for demo purposes
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json({ projects });
}