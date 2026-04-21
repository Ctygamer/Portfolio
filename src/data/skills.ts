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
      'GraphQL',
      'DGS Netflix',
      'REST APIs',
      'JUnit 5',
      'PostgreSQL',
      'MySQL',
    ],
  },
  {
    title: 'Frontend',
    icon: '🖥️',
    skills: [
      'React',
      'TypeScript',
      'Apollo Client',
      'HTML5',
      'CSS3',
      'JavaScript',
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
      'Maven',
      'npm',
      'Figma',
    ],
  },
];
