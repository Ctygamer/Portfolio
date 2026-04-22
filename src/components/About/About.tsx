import styles from './About.module.css';

const TERMINAL_LINES = [
  { cmd: 'whoami', out: 'Caner Yilmaz' },
  { cmd: 'location', out: 'Gossau, Schweiz 🇨🇭' },
  { cmd: 'languages', out: 'Deutsch (Muttersprachler), Englisch (B2), Türkisch (Muttersprachler)' },
  { cmd: 'education', out: 'Ausbildung Applikationsentwickler EFZ (2023-aktuell)' },
  { cmd: 'current_role', out: 'Praktikant Applikationsentwickler EFZ @ Pritz-IT' },
  { cmd: 'passion', out: 'Clean Code · Moderne Architekturen · Full-Stack Development' },
];

export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className="section-title">
          <span>01.</span>About
        </h2>
        <p className="section-subtitle">Wer steckt hinter dem Code?</p>

        <div className={styles.grid}>
          <div className={styles.terminal}>
            <div className={styles.terminalBar}>
              <span className={styles.dot} style={{ background: '#ff5f57' }} />
              <span className={styles.dot} style={{ background: '#ffbd2e' }} />
              <span className={styles.dot} style={{ background: '#28c840' }} />
              <span className={styles.terminalTitle}>caner@dev ~ </span>
            </div>
            <div className={styles.terminalBody}>
              {TERMINAL_LINES.map((line) => (
                <div key={line.cmd} className={styles.terminalLine}>
                  <span className={styles.terminalPrompt}>$ </span>
                  <span className={styles.terminalCmd}>{line.cmd}</span>
                  <div className={styles.terminalOut}>{line.out}</div>
                </div>
              ))}
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>$ </span>
                <span className={styles.terminalCursor}>█</span>
              </div>
            </div>
          </div>

          <div className={styles.bio}>
            <p>
              Ich bin ein angehender Applikationsentwickler EFZ mit Fokus auf
              <strong> Java</strong>, <strong>Spring Boot</strong> und{' '}
              <strong>React/TypeScript</strong>.
            </p>
            <p>
              Seit 2023 absolviere ich die Ausbildung zum Applikationsentwickler EFZ.
              Seit 2025 sammle ich bei Pritz-IT praktische Erfahrung in einer
              internen Full-Stack-Applikation.
            </p>
            <p>
              Mein Fokus liegt auf sauberer Architektur, typsicherem Code und
              modernen Entwicklungspraktiken — vom Backend-API bis zur
              React-Frontend-Komponente.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>#CleanCode</span>
              <span className={styles.tag}>#TypeSafety</span>
              <span className={styles.tag}>#FullStack</span>
              <span className={styles.tag}>#GraphQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
