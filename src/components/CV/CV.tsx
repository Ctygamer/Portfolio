import styles from './CV.module.css';

const EXPERIENCE = [
  {
    period: '2024 – heute',
    role: 'Full-Stack Developer',
    company: 'Helvetic-Projects',
    description:
      'Entwicklung von Enterprise-Software mit Java, Spring Boot, GraphQL (DGS Netflix) und React/TypeScript. Verantwortlich für Backend-APIs und Frontend-Komponenten.',
    tags: ['Java', 'Spring Boot', 'GraphQL', 'React', 'TypeScript'],
  },
  {
    period: '2020 – 2024',
    role: 'Lernender Informatiker EFZ',
    company: 'Helvetic-Projects',
    description:
      'Ausbildung zum Applikationsentwickler. Mitarbeit an realen Kundenprojekten, Aufbau von Full-Stack-Kenntnissen und Entwicklung eigener Projekte.',
    tags: ['Java', 'React', 'TypeScript', 'PostgreSQL'],
  },
];

const EDUCATION = [
  {
    period: '2022 – 2024',
    role: 'Berufsmaturität Technik',
    company: 'Berufsmaturitätsschule',
    description: 'Technische Berufsmaturität parallel zur Informatik-Ausbildung.',
    tags: [],
  },
  {
    period: '2020 – 2024',
    role: 'Informatiker EFZ Applikationsentwicklung',
    company: 'Berufsschule',
    description:
      'Eidgenössisches Fähigkeitszeugnis in Informatik mit Schwerpunkt Applikationsentwicklung.',
    tags: [],
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
