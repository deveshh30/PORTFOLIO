

export interface Project {
  id: string;
  title: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  shortDescription: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  image?: string;          
  highlights: string[];
}

export const projectsData: Project[] = [
  {
    id: 'cogniflow',
    title: 'CogniFlow Dashboard',
    status: 'In Progress',
    shortDescription:
      'Real-time collaborative task management app built with MERN stack and Socket.io for live updates.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    repoUrl: 'https://github.com/yourusername/cogniflow', 
    liveUrl: undefined, 
    highlights: [
      'Implemented WebSocket-based real-time task synchronization',
      'Modular React components with custom hooks for state management',
      'Responsive dashboard layout using Tailwind CSS',
      'Learned to handle connection errors and optimistic UI updates'
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