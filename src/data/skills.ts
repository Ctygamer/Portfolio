export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      'Java',
      'Spring Boot',
      'Node.js',
      'GraphQL',
      'REST-APIs',
      'RabbitMQ (RPC)',
      'DataLoader',
      'SQL',
    ],
  },
  {
    title: 'Frontend',
    icon: '🖥️',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'Apollo Client',
      'Tailwind CSS',
      'Keycloak',
      'Keycloakify',
      'HTML5',
      'CSS3',
    ],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: [
      'Git',
      'GitHub',
      'IntelliJ IDEA',
      'VS Code',
      'Postman',
      'Docker',
    ],
  },
];
