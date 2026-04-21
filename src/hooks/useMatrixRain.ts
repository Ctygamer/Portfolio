import { useEffect, type RefObject } from 'react';

export function useMatrixRain(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  intensity: number = 0.05
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const chars =
      'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let animationId: number;
    const fontSize = 14;
    let columns: number;
    let drops: number[];

    function resize() {
      canvas!.width = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
      columns = Math.floor(canvas!.width / fontSize);
      drops = Array(columns).fill(1);
    }

    function draw() {
      ctx!.fillStyle = `rgba(8, 11, 15, ${intensity})`;
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      ctx!.fillStyle = '#00ff88';
      ctx!.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx!.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas!.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, [canvasRef, intensity]);
}
