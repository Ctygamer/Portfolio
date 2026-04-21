import { useRef } from 'react';
import { useMatrixRain } from '../../hooks/useMatrixRain';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import styles from './Hero.module.css';

const TYPING_TEXTS = [
  'Full-Stack Developer',
  'Java Entwickler',
  'React Entwickler',
  'TypeScript Enthusiast',
];

const STATS = [
  { value: '3+', label: 'Jahre Erfahrung' },
  { value: '9+', label: 'Projekte' },
  { value: '10+', label: 'Technologien' },
];

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useMatrixRain(canvasRef, 0.04);
  const typedText = useTypingEffect(TYPING_TEXTS, 80);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className={styles.hero} id="hero">
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.content}>
        <p className={styles.greeting}>
          <span className={styles.prompt}>$</span> Hallo, ich bin
        </p>

        <h1 className={styles.name} data-text="CANER YILMAZ">
          CANER YILMAZ
        </h1>

        <p className={styles.typing}>
          <span className={styles.typedText}>{typedText}</span>
          <span className={styles.cursor}>|</span>
        </p>

        <div className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.buttons}>
          <button className={styles.btnPrimary} onClick={() => scrollTo('#projects')}>
            Projekte ansehen
          </button>
          <button className={styles.btnSecondary} onClick={() => scrollTo('#contact')}>
            Kontakt
          </button>
        </div>
      </div>

      <button className={styles.scrollIndicator} onClick={() => scrollTo('#about')} aria-label="Nach unten scrollen">
        <span />
      </button>
    </section>
  );
}
