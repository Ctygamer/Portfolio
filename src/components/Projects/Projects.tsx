import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { FadeUp, staggerContainer, cardVariant } from '../ui/AnimateOnScroll';
import { TiltCard } from '../ui/TiltCard';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

export function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <FadeUp>
          <h2 className="section-title">
            <span>03.</span>Projekte
          </h2>
          <p className="section-subtitle">Ausgewählte Projekte aus meiner Entwicklungsarbeit.</p>
        </FadeUp>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((p) => (
            <motion.div key={p.id} variants={cardVariant} style={{ perspective: 800 }}>
              <TiltCard>
                <ProjectCard project={p} />
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
