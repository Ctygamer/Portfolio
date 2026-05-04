import { type Project } from '../../data/projects';
import styles from './Projects.module.css';

const STATUS_COLORS: Record<Project['status'], string> = {
  'In Produktion': styles.statusGreen,
  'In Entwicklung': styles.statusYellow,
  Abgeschlossen: styles.statusGray,
};

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <div className={`${styles.card} ${project.featured ? styles.featured : ''} ${project.secret ? styles.secretCard : ''}`}>
      <div className={styles.cardTop}>
        <span className={styles.folderIcon}>📁</span>
        <span className={`${styles.status} ${STATUS_COLORS[project.status]}`}>
          {project.status}
        </span>
      </div>

      <h3 className={`${styles.cardName} ${project.secret ? styles.secretName : ''}`}>
        {project.name}
      </h3>

      {project.secret ? (
        <div className={styles.secretOverlay}>
          <div className={styles.secretXPattern} aria-hidden="true" />
          <span className={styles.secretLabel}>TOP SECRET</span>
        </div>
      ) : (
        <p className={styles.cardDesc}>{project.description}</p>
      )}

      <div className={styles.cardTags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      {project.github && !project.secret && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className={styles.githubLink}
        >
          GitHub →
        </a>
      )}
    </div>
  );
}
