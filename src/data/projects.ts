export interface Project {
  id: number;
  name: string;
  description: string;
  tags: string[];
  status: 'In Produktion' | 'In Entwicklung' | 'Abgeschlossen';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Helvetic-Projects',
    description:
      'Enterprise Software für Unternehmenskunden mit komplexen Geschäftsprozessen und skalierbarer Architektur.',
    tags: ['Java', 'Spring Boot', 'GraphQL', 'DGS Netflix'],
    status: 'In Produktion',
    featured: true,
  },
  {
    id: 2,
    name: 'Pflegezeit24',
    description:
      'Healthcare Platform für Pflegedienstleister und Patienten mit Echtzeit-Datensynchronisation.',
    tags: ['Java', 'React', 'TypeScript', 'Spring Boot'],
    status: 'In Entwicklung',
    featured: true,
  },
  {
    id: 3,
    name: 'ActivityNow',
    description:
      'Social Platform für lokale Aktivitäten und Events mit GraphQL API und Apollo Client.',
    tags: ['React', 'TypeScript', 'Apollo Client', 'GraphQL'],
    status: 'Abgeschlossen',
    featured: false,
  },
  {
    id: 4,
    name: 'DecideRoulette',
    description:
      'Entscheidungshilfe-Tool mit interaktivem Roulette-Mechanismus und anpassbaren Optionen.',
    tags: ['React', 'TypeScript', 'CSS Animations'],
    status: 'Abgeschlossen',
    featured: false,
  },
  {
    id: 5,
    name: 'Studentsystem',
    description:
      'Studenten-Verwaltungssystem mit vollständiger REST API, CRUD-Operationen und PostgreSQL.',
    tags: ['Java', 'Spring Boot', 'REST API', 'PostgreSQL'],
    status: 'Abgeschlossen',
    featured: false,
  },
  {
    id: 6,
    name: 'ToDoApp',
    description:
      'Task Management App mit React Hooks, lokaler Persistenz und Drag-and-Drop Interface.',
    tags: ['React', 'TypeScript', 'React Hooks'],
    status: 'Abgeschlossen',
    featured: false,
  },
  {
    id: 7,
    name: 'Budgetplaner',
    description:
      'Budget-Tracker mit Einnahmen/Ausgaben-Verwaltung, Kategorisierung und Chart-Visualisierung.',
    tags: ['React', 'TypeScript', 'Charts'],
    status: 'Abgeschlossen',
    featured: false,
  },
  {
    id: 8,
    name: 'TicTacToe',
    description:
      'Klassisches Strategie-Spiel als React-App mit KI-Gegner und Gewinn-Erkennung.',
    tags: ['React', 'TypeScript', 'Game Logic'],
    status: 'Abgeschlossen',
    featured: false,
  },
  {
    id: 9,
    name: 'Flappy Flamingo',
    description:
      'Endlos-Browser-Game inspiriert von Flappy Bird, vollständig mit Canvas API entwickelt.',
    tags: ['JavaScript', 'Canvas API', 'Game Dev'],
    status: 'Abgeschlossen',
    featured: false,
  },
];
