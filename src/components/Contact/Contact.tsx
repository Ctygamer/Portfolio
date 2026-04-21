import { type FormEvent, useState } from 'react';
import styles from './Contact.module.css';

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    window.location.href = `mailto:caneryilmaz99@icloud.com?subject=Portfolio Kontakt von ${name}&body=${encodeURIComponent(message)}%0A%0AVon: ${name}%0AEmail: ${email}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="section-title">
          <span>05.</span>Kontakt
        </h2>
        <p className="section-subtitle">Lass uns zusammenarbeiten.</p>

        <div className={styles.grid}>
          <div className={styles.info}>
            <p className={styles.infoText}>
              Ich freue mich über Anfragen, spannende Projekte oder einfach einen
              fachlichen Austausch. Schreib mir gerne!
            </p>

            <div className={styles.links}>
              <a
                href="mailto:caneryilmaz99@icloud.com"
                className={styles.link}
              >
                <span className={styles.linkIcon}>✉️</span>
                <span>
                  <strong>Email</strong>
                  <br />
                  caneryilmaz99@icloud.com
                </span>
              </a>

              <a
                href="https://github.com/Ctygamer"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <span className={styles.linkIcon}>🐙</span>
                <span>
                  <strong>GitHub</strong>
                  <br />
                  github.com/Ctygamer
                </span>
              </a>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className={styles.input}
                placeholder="Dein Name"
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className={styles.input}
                placeholder="deine@email.de"
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">Nachricht</label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                placeholder="Deine Nachricht..."
                rows={5}
                required
              />
            </div>

            <button type="submit" className={styles.submit}>
              {sent ? '✓ Gesendet!' : 'Nachricht senden →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
