import dash from "../assets/dash.png";
import task from "../assets/task.png";
import profile from "../assets/profile.png";

export interface Project {
  id: string;
  title: string;
  status: 'Completed' | 'In Progress' | 'Planned' | 'MVP Live - Adding Features';
  shortDescription: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  images?: string[];          
  highlights: string[];
}

export const projectsData: Project[] = [
  {
  id: 'cogniflow',
  title: 'CogniFlow - Real-time Collaborative Dashboard',
  status: 'MVP Live - Adding Features',
  shortDescription: 'Full-stack real-time task management app with live updates using Socket.io. Built as my first complete MERN project to master WebSockets and clean architecture.',
  tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
  repoUrl: 'https://github.com/deveshh30/cogniflow',
  liveUrl: 'https://cogniflow-self.vercel.app/login',
  images: [dash, task, profile],
  highlights: [
    'Implemented WebSocket-based real-time task synchronization',
    'Built modular React components with custom hooks and Context API',
    'Created fully responsive dashboard using Tailwind CSS (mobile-first)',
    'Handled connection errors, optimistic UI updates, and CORS issues',
    'Learned full MERN deployment on Vercel + MongoDB Atlas'
  ]
},
  {
    id: 'task-manager',
    title: 'Advanced Task Manager with Authentication',
    status: 'Planned',
    shortDescription:
      'Full CRUD app with user auth, categories, drag-and-drop, and SQL backend (PostgreSQL).',
    tech: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    highlights: ['JWT authentication', 'Relational database modeling', 'Drag & drop UI']
  }
];