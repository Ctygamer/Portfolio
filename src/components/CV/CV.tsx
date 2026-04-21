import styles from './CV.module.css';

const EXPERIENCE = [
  {
    period: '2025 – aktuell',
    role: 'Praktikant Applikationsentwickler EFZ',
    company: 'Pritz-IT',
    description:
      'Mitarbeit an einer internen Full-Stack-Applikation mit Backend- und Frontend-Komponenten.',
    tags: [
      'Spring Boot',
      'Node.js',
      'GraphQL',
      'React',
      'RabbitMQ',
      'DataLoader',
      'REST-APIs',
      'Java',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'Keycloak',
      'Keycloakify',
      'Apollo Client',
      'Docker',
      'SQL',
    ],
  },
  {
    period: '2018 – 2024',
    role: 'Monteur/Heizungsinstallateur',
    company: 'Klimamacher/Strässle/SIRA/Fürer',
    description:
      'Tätigkeit als Monteur und Heizungsinstallateur in verschiedenen Unternehmen.',
    tags: [],
  },
  {
    period: '2015 – 2018',
    role: 'Lernender Heizungsinstallateur EFZ',
    company: 'Cofely AG',
    description:
      'Grundausbildung zum Heizungsinstallateur EFZ.',
    tags: [],
  },
];

const EDUCATION = [
  {
    period: '2025 – aktuell',
    role: 'Ausbildung Applikationsentwickler EFZ',
    company: 'Benedict Schule Altstätten/Zürich',
    description:
      'Aktuelle Ausbildung mit Noten in Informatikkompetenzen 5.5, Überbetrieblichen Kursen 5.5, Mathematik 5.5 und Englisch 5.',
    tags: ['Informatikkompetenzen 5.5', 'Überbetriebliche Kurse 5.5', 'Mathematik 5.5', 'Englisch 5'],
  },
];

interface TimelineItem {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

function TimelineEntry({ item }: { item: TimelineItem }) {
  return (
    <div className={styles.entry}>
      <div className={styles.dot} />
      <div className={styles.entryContent}>
        <span className={styles.period}>{item.period}</span>
        <h3 className={styles.role}>{item.role}</h3>
        <span className={styles.company}>@ {item.company}</span>
        <p className={styles.desc}>{item.description}</p>
        {item.tags.length > 0 && (
          <div className={styles.tags}>
            {item.tags.map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function CV() {
  return (
    <section id="cv">
      <div className="container">
        <h2 className="section-title">
          <span>04.</span>CV
        </h2>
        <p className="section-subtitle">Mein Werdegang als Entwickler.</p>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              <span className={styles.columnIcon}>💼</span> Berufserfahrung
            </h3>
            <div className={styles.timeline}>
              {EXPERIENCE.map((e) => (
                <TimelineEntry key={e.period + e.role} item={e} />
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              <span className={styles.columnIcon}>🎓</span> Ausbildung
            </h3>
            <div className={styles.timeline}>
              {EDUCATION.map((e) => (
                <TimelineEntry key={e.period + e.role} item={e} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
