import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

export function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className="section-title">
          <span>03.</span>Projekte
        </h2>
        <p className="section-subtitle">Ausgewählte Projekte aus meiner Entwicklungsarbeit.</p>

        <div className={styles.grid}>
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
