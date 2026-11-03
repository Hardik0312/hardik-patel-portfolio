import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle system
    interface Particle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      baseAlpha: number;
      phase: number;
    }

    const particleCount = Math.min(width > 768 ? 40 : 20, 50);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.2,
        baseAlpha: Math.random() * 0.4 + 0.1,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Interactive mouse glow
    let mouse = { x: width / 2, y: height / 3, targetX: width / 2, targetY: height / 3 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let frame = 0;

    const render = () => {
      frame += 0.015;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';

      // 1. Draw subtle interactive mouse glow spotlight
      const mouseGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        width > 768 ? 400 : 250
      );
      if (isDark) {
        mouseGrad.addColorStop(0, 'rgba(75, 120, 255, 0.12)');
        mouseGrad.addColorStop(0.5, 'rgba(41, 98, 255, 0.04)');
        mouseGrad.addColorStop(1, 'rgba(8, 9, 13, 0)');
      } else {
        mouseGrad.addColorStop(0, 'rgba(41, 98, 255, 0.10)');
        mouseGrad.addColorStop(0.5, 'rgba(41, 98, 255, 0.03)');
        mouseGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = mouseGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw floating ambient particles with connecting electric lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Pulsing glow
        const currentAlpha = p.baseAlpha + Math.sin(frame + p.phase) * 0.2;
        const color = isDark
          ? `rgba(75, 120, 255, ${Math.max(0.05, currentAlpha)})`
          : `rgba(41, 98, 255, ${Math.max(0.08, currentAlpha * 1.2)})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        // Connect nearby particles with subtle faint lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / 110) * (isDark ? 0.08 : 0.06);
            ctx.strokeStyle = isDark
              ? `rgba(75, 120, 255, ${lineAlpha})`
              : `rgba(41, 98, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Floating Gradient Aurora Blobs in background */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#2962FF]/20 via-[#4B78FF]/15 to-transparent blur-[120px] animate-float-slow opacity-80" />
      <div className="absolute top-1/3 -right-32 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#4B78FF]/20 via-[#8B5CF6]/15 to-transparent blur-[130px] animate-pulse-subtle opacity-75" />
      <div className="absolute -bottom-40 left-1/4 w-[700px] h-[500px] rounded-full bg-gradient-to-t from-[#2962FF]/15 via-[#4B78FF]/10 to-transparent blur-[140px] opacity-70" />

      {/* Interactive Canvas for moving connected glowing particles & mouse spotlight */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
