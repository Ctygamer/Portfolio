import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills';
import { FadeUp, staggerContainer, cardVariant } from '../ui/AnimateOnScroll';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <FadeUp>
          <h2 className="section-title">
            <span>02.</span>Skills
          </h2>
          <p className="section-subtitle">Technologien und Werkzeuge, mit denen ich arbeite.</p>
        </FadeUp>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skillCategories.map((cat) => (
            <motion.div key={cat.title} className={styles.card} variants={cardVariant}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{cat.icon}</span>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
              </div>
              <div className={styles.pills}>
                {cat.skills.map((skill, i) => (
                  <span
                    key={skill}
                    className={styles.pill}
                    style={{ '--pill-delay': `${0.2 + i * 0.08}s` } as React.CSSProperties}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
