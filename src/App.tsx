import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { CV } from './components/CV/CV';
import { Contact } from './components/Contact/Contact';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CV />
        <Contact />
      </main>
      <footer className={styles.footer}>
        <div className="container">
          <p>
            <span className={styles.footerGreen}>{'<'}</span>
            {' Built with React + TypeScript + Vite '}
            <span className={styles.footerGreen}>{'/>'}</span>
            {' — © 2026 Caner Yilmaz'}
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
