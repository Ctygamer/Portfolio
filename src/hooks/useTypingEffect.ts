import { useState, useEffect } from 'react';

export function useTypingEffect(texts: string[], speed: number = 80): string {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) {
            setCurrentText(current.slice(0, charIndex + 1));
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setDeleting(true), 1500);
          }
        } else {
          if (charIndex > 0) {
            setCurrentText(current.slice(0, charIndex - 1));
            setCharIndex((c) => c - 1);
          } else {
            setDeleting(false);
            setTextIndex((i) => (i + 1) % texts.length);
          }
        }
      },
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts, speed]);

  return currentText;
}
