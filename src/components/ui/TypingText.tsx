import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface TypingTextProps {
  text: string;
  delay?: number; // ms bis Start
  speed?: number; // ms pro Zeichen
  className?: string;
}

/** Tippt Text zeichenweise sobald er sichtbar wird. */
export function TypingText({ text, delay = 0, speed = 22, className }: TypingTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isInView, text, delay, speed]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {displayed.length < text.length && (
        <span style={{ opacity: Math.random() > 0.5 ? 1 : 0, transition: 'opacity 0.1s' }}>▌</span>
      )}
    </span>
  );
}
