import { skillCategories } from '../../data/skills';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">
          <span>02.</span>Skills
        </h2>
        <p className="section-subtitle">Technologien und Werkzeuge, mit denen ich arbeite.</p>

        <div className={styles.grid}>
          {skillCategories.map((cat) => (
            <div key={cat.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{cat.icon}</span>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
              </div>
              <div className={styles.pills}>
                {cat.skills.map((skill) => (
                  <span key={skill} className={styles.pill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
