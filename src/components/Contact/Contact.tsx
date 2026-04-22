import { type FormEvent, useState } from 'react';
import styles from './Contact.module.css';

export function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    setSending(true);
    setError(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/caner@mustafa.ch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio Kontakt von ${name}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      if (!response.ok) {
        throw new Error('Nachricht konnte nicht gesendet werden.');
      }

      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 4000);
    } catch {
      setError('Senden fehlgeschlagen. Bitte versuche es erneut oder schreibe mir direkt per Email.');
    } finally {
      setSending(false);
    }
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
                href="mailto:caner@mustafa.ch"
                className={styles.link}
              >
                <span className={styles.linkIcon}>✉️</span>
                <span>
                  <strong>Email</strong>
                  <br />
                  caner@mustafa.ch
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
              {sending ? 'Wird gesendet…' : sent ? '✓ Gesendet!' : 'Nachricht senden →'}
            </button>

            {error && <p className={styles.error}>{error}</p>}
            {sent && !error && (
              <p className={styles.success}>
                Danke, deine Nachricht wurde direkt an meine Mail gesendet.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
