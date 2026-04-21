export interface Project {
  id: number;
  name: string;
  description: string;
  tags: string[];
  status: 'In Produktion' | 'In Entwicklung' | 'Abgeschlossen';
  featured: boolean;
  github?: string;
  note?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Helvetic-Projects',
    description:
      'Enterprise-Software für Unternehmenskunden, entwickelt im Rahmen des Praktikums bei Pritz-IT. Komplexe Geschäftsprozesse, skalierbare Architektur mit Spring Boot und GraphQL.',
    tags: ['Java', 'Spring Boot', 'GraphQL', 'React', 'TypeScript'],
    status: 'In Produktion',
    featured: true,
    note: 'Firmen-Repository (Pritz-IT)',
  },
  {
    id: 2,
    name: 'Pflegezeit24',
    description:
      'Healthcare-Platform für Pflegedienstleister, entwickelt bei Pritz-IT. Verwaltung von Pflegepersonal und Patienten mit modernem Full-Stack-Ansatz.',
    tags: ['Java', 'Spring Boot', 'React', 'TypeScript', 'REST-APIs'],
    status: 'In Entwicklung',
    featured: true,
    note: 'Firmen-Repository (Pritz-IT)',
  },
  {
    id: 3,
    name: 'ActivityNow',
    description:
      'Social Platform für lokale Aktivitäten und Events, entwickelt bei Pritz-IT mit GraphQL API und Apollo Client.',
    tags: ['React', 'TypeScript', 'GraphQL', 'Apollo Client'],
    status: 'Abgeschlossen',
    featured: false,
    note: 'Firmen-Repository (Pritz-IT)',
  },
  {
    id: 4,
    name: 'EduAI Marketplace',
    description:
      'Social Learning Platform für Lehrpersonen — entwickelt beim Innovationcamp Hackathon 2026 in Zusammenarbeit mit Smartfeld. Lehrpersonen können KI-gestützte Unterrichtsmaterialien entdecken, teilen und bewerten.',
    tags: [
      'React Native',
      'Expo',
      'TypeScript',
      'Zustand',
      'TanStack Query',
    ],
    status: 'Abgeschlossen',
    featured: true,
    github: 'https://github.com/Ctygamer/EduAi-Smartfeld-Hackathon2026',
  },
  {
    id: 5,
    name: 'Studentensystem',
    description:
      'Vollständiges Studenten-Verwaltungssystem als Microservice-Architektur. Spring Boot Backend, React Frontend mit Material UI, Echtzeit-Chat via WebSocket/STOMP, PostgreSQL, Docker und CI/CD mit GitHub Actions.',
    tags: [
      'Spring Boot',
      'React',
      'Material UI',
      'WebSocket',
      'PostgreSQL',
      'Docker',
      'GitHub Actions',
    ],
    status: 'Abgeschlossen',
    featured: false,
    github: 'https://github.com/Ctygamer/Studentensystem',
  },
  {
    id: 6,
    name: 'Decide Roulette',
    description:
      'Native iOS-App zur Entscheidungsfindung per Roulette-Mechanismus. Vollständig in Swift entwickelt und im App Store veröffentlicht.',
    tags: ['Swift', 'iOS', 'Xcode'],
    status: 'Abgeschlossen',
    featured: false,
    github: 'https://github.com/Ctygamer/Decide-Roulette',
  },
  {
    id: 7,
    name: 'Budgetplaner',
    description:
      'Budget-Tracker zur Verwaltung von Einnahmen und Ausgaben mit Kategorisierung und Übersicht, entwickelt bei Pritz-IT.',
    tags: ['React', 'TypeScript', 'JavaScript'],
    status: 'Abgeschlossen',
    featured: false,
    note: 'Firmen-Repository (Pritz-IT)',
  },
  {
    id: 8,
    name: 'TodoApp AI',
    description: 'Todo-Applikation mit KI-Features als React Native App.',
    tags: ['JavaScript', 'React Native'],
    status: 'Abgeschlossen',
    featured: false,
    github: 'https://github.com/Ctygamer/TodoAppAI',
  },
  {
    id: 9,
    name: 'Flappy Flamingo',
    description:
      'Flappy Bird Clone als Schulprojekt, entwickelt mit Unity. Pixel-Art Grafiken designt mit Piskel.',
    tags: ['Unity', 'C#', 'Piskel', 'Game Dev'],
    status: 'Abgeschlossen',
    featured: false,
  },
];
