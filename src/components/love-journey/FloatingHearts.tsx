"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rot: number;
  rotSpeed: number;
  alpha: number;
  type: "heart" | "petal";
  color: string;
};

const HEART_COLORS = ["#E88A9A", "#D96A7B", "#F2B8C0", "#E9B384", "#D4A574"];

function drawHeart(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  color: string,
  alpha: number,
  rot: number
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.scale(size, size);
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, 0.35);
  ctx.bezierCurveTo(0, -0.15, -0.5, -0.15, -0.5, 0.25);
  ctx.bezierCurveTo(-0.5, 0.55, -0.1, 0.8, 0, 1.05);
  ctx.bezierCurveTo(0.1, 0.8, 0.5, 0.55, 0.5, 0.25);
  ctx.bezierCurveTo(0.5, -0.15, 0, -0.15, 0, 0.35);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawPetal(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  color: string,
  alpha: number,
  rot: number
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(0, 0, size * 0.55, size * 0.3, 0.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

export default function FloatingHearts({
  density = 22,
  className = "",
}: {
  density?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let particles: Particle[] = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (initial = false): Particle => {
      const w = canvas.clientWidth || 800;
      const h = canvas.clientHeight || 600;
      return {
        x: Math.random() * w,
        y: initial ? Math.random() * h : h + 30,
        size: 0.6 + Math.random() * 1.6,
        speedY: 0.25 + Math.random() * 0.65,
        speedX: -0.2 + Math.random() * 0.4,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (-0.5 + Math.random()) * 0.012,
        alpha: 0.18 + Math.random() * 0.4,
        type: Math.random() > 0.45 ? "heart" : "petal",
        color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
      };
    };

    const init = () => {
      resize();
      particles = Array.from({ length: density }, () => spawn(true));
    };

    const tick = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y -= p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.25;
        p.rot += p.rotSpeed;
        if (p.y < -40 || p.x < -60 || p.x > w + 60) {
          particles[i] = spawn();
          continue;
        }
        if (p.type === "heart") {
          drawHeart(ctx, p.x, p.y, p.size * 10, p.color, p.alpha, p.rot);
        } else {
          drawPetal(ctx, p.x, p.y, p.size * 12, p.color, p.alpha * 0.9, p.rot);
        }
      }
      raf = requestAnimationFrame(tick);
    };

    init();
    tick();
    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
    />
  );
}
