import { useState, useRef, useCallback } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

/**
 * Scramble-Effekt: Buchstaben zappeln durch zufällige Zeichen
 * bevor sie sich zum Original-Text zusammensetzen.
 */
export function useScrambleText(originalText: string) {
  const [displayText, setDisplayText] = useState(originalText);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const iterationRef = useRef(0);

  const scramble = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    iterationRef.current = 0;

    intervalRef.current = setInterval(() => {
      setDisplayText(
        originalText
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (i < iterationRef.current) return originalText[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(''),
      );

      iterationRef.current += 0.4;

      if (iterationRef.current >= originalText.length) {
        clearInterval(intervalRef.current!);
        setDisplayText(originalText);
      }
    }, 35);
  }, [originalText]);

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayText(originalText);
  }, [originalText]);

  return { displayText, scramble, reset };
}
