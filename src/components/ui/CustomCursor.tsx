import { useEffect, useRef } from 'react';

interface TrailPoint { x: number; y: number; timestamp: number }
interface Ripple     { x: number; y: number; timestamp: number }

const GREEN           = '#00ff88';
const TRAIL_DURATION  = 480;
const RIPPLE_DURATION = 680;
const CURSOR_SIZE     = 28;
const CURSOR_HALF     = CURSOR_SIZE / 2;

function drawTrail(ctx: CanvasRenderingContext2D, trail: TrailPoint[], now: number) {
  trail.forEach((p) => {
    const ratio = 1 - (now - p.timestamp) / TRAIL_DURATION;
    if (ratio <= 0) return;
    ctx.save();
    ctx.beginPath();
    ctx.arc(p.x, p.y, ratio * 4.5, 0, Math.PI * 2);
    ctx.fillStyle   = `rgba(0,255,136,${ratio * 0.55})`;
    ctx.shadowColor = GREEN;
    ctx.shadowBlur  = ratio * 10;
    ctx.fill();
    ctx.restore();
  });
}

function drawRipples(ctx: CanvasRenderingContext2D, ripples: Ripple[], now: number) {
  ripples.forEach((r) => {
    const t = (now - r.timestamp) / RIPPLE_DURATION;
    if (t >= 1) return;
    const ease = 1 - Math.pow(1 - t, 3);
    [0, 0.14, 0.28].forEach((offset) => {
      const p      = Math.min(ease + offset, 1);
      const radius = p * 60;
      const alpha  = (1 - p) * 0.7;
      ctx.save();
      ctx.beginPath();
      ctx.arc(r.x, r.y, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0,255,136,${alpha})`;
      ctx.lineWidth   = 1.5;
      ctx.shadowColor = GREEN;
      ctx.shadowBlur  = 8;
      ctx.stroke();
      ctx.restore();
    });
  });
}

export function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trail     = useRef<TrailPoint[]>([]);
  const ripples   = useRef<Ripple[]>([]);
  const animRef   = useRef<number>(0);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;

    const canvas = canvasRef.current;
    const cursor = cursorRef.current;
    if (!canvas || !cursor) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Cursor global verstecken
    const styleTag = document.createElement('style');
    styleTag.id = 'custom-cursor-style';
    styleTag.textContent = '*, a, button { cursor: none !important; }';
    document.head.appendChild(styleTag);

    // Initial off-screen – wird nur von JS gesetzt, NIE aus JSX-style prop
    cursor.style.left = '-100px';
    cursor.style.top  = '-100px';

    // Canvas-Grösse = innerWidth/Height in Buffer UND CSS (kein Scaling-Bug)
    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width        = w;
      canvas.height       = h;
      canvas.style.width  = `${w}px`;
      canvas.style.height = `${h}px`;
    };
    resize();
    window.addEventListener('resize', resize);

    // Mousemove: left/top via JS (React-re-render überschreibt das NICHT,
    // da top/left nicht im JSX-style prop definiert sind)
    const onMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX - CURSOR_HALF}px`;
      cursor.style.top  = `${e.clientY - CURSOR_HALF}px`;
      trail.current.push({ x: e.clientX, y: e.clientY, timestamp: Date.now() });
    };
    window.addEventListener('mousemove', onMove);

    const onClick = (e: MouseEvent) => {
      ripples.current.push({ x: e.clientX, y: e.clientY, timestamp: Date.now() });
    };
    window.addEventListener('click', onClick);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();
      trail.current   = trail.current.filter((p) => now - p.timestamp < TRAIL_DURATION);
      ripples.current = ripples.current.filter((r) => now - r.timestamp < RIPPLE_DURATION);
      drawTrail(ctx, trail.current, now);
      drawRipples(ctx, ripples.current, now);
      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      const tag = document.getElementById('custom-cursor-style');
      if (tag) document.head.removeChild(tag);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <>
      {/* top/left absichtlich NICHT im style prop → nur JS kontrolliert Position */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: `${CURSOR_SIZE}px`,
          height: `${CURSOR_SIZE}px`,
          pointerEvents: 'none',
          zIndex: 10000,
        }}
      >
        <svg
          width={CURSOR_SIZE}
          height={CURSOR_SIZE}
          viewBox="0 0 28 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="glow-cur" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <g filter="url(#glow-cur)" stroke={GREEN} strokeWidth="1.5" fill="none">
            <circle cx="14" cy="14" r="7" />
            <circle cx="14" cy="14" r="1.8" fill={GREEN} stroke="none" />
            <line x1="14" y1="1"  x2="14" y2="5"  />
            <line x1="14" y1="23" x2="14" y2="27" />
            <line x1="1"  y1="14" x2="5"  y2="14" />
            <line x1="23" y1="14" x2="27" y2="14" />
          </g>
        </svg>
      </div>

      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      />
    </>
  );
}
