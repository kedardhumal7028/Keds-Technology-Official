"use client";

import React, { useEffect, useRef } from "react";

interface FireworkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
  gravity: number;
  drag: number;
  decay: number;
  trail: { x: number; y: number }[];
}

interface Rocket {
  x: number;
  y: number;
  targetY: number;
  vy: number;
  vx: number;
  color: string;
}

export function FireworksCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    const colors = [
      "#F59E0B", // Gold
      "#FDE047", // Yellow spark
      "#EA580C", // Saffron / Orange
      "#EC4899", // Magenta
      "#A855F7", // Purple
      "#06B6D4", // Cyan
      "#FFFFFF", // White flash
      "#10B981", // Emerald
    ];

    let rockets: Rocket[] = [];
    let particles: FireworkParticle[] = [];

    const createRocket = () => {
      const x = Math.random() * (width - 200) + 100;
      const targetY = Math.random() * (height * 0.45) + height * 0.1;
      const color = colors[Math.floor(Math.random() * colors.length)];
      rockets.push({
        x,
        y: height,
        targetY,
        vy: -(Math.random() * 4 + 7),
        vx: (Math.random() - 0.5) * 1.5,
        color,
      });
    };

    const explode = (x: number, y: number, color: string) => {
      const count = window.innerWidth < 768 ? 28 : 45;
      const sparkColor = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4.5 + 1.2;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: Math.random() > 0.4 ? color : sparkColor,
          size: Math.random() * 2.2 + 1.2,
          gravity: 0.04,
          drag: 0.96,
          decay: Math.random() * 0.015 + 0.012,
          trail: [],
        });
      }
    };

    // Initial launch
    createRocket();

    let lastRocketTime = Date.now();
    const rocketInterval = 1600; // Launch every 1.6s

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const now = Date.now();
      if (now - lastRocketTime > rocketInterval && rockets.length < 3) {
        createRocket();
        lastRocketTime = now;
      }

      // 1. Update & Render Rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.x += r.vx;
        r.y += r.vy;

        // Draw rocket spark line
        ctx.save();
        ctx.strokeStyle = r.color;
        ctx.lineWidth = 2;
        ctx.shadowColor = r.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.moveTo(r.x, r.y);
        ctx.lineTo(r.x - r.vx * 3, r.y - r.vy * 3);
        ctx.stroke();
        ctx.restore();

        // Check if rocket reached burst apex
        if (r.y <= r.targetY || r.vy >= 0) {
          explode(r.x, r.y, r.color);
          rockets.splice(i, 1);
        }
      }

      // 2. Update & Render Particles (Burst fireworks)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.vx *= p.drag;
        p.vy *= p.drag;
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-15 h-full w-full ${className}`}
      style={{ mixBlendMode: "screen" }}
    />
  );
}

export default FireworksCanvas;

