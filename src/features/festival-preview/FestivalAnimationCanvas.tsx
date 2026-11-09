"use client";

import React, { useEffect, useRef } from "react";
import { FestivalId, YearEdition } from "./festivalData";

interface FestivalAnimationCanvasProps {
  festivalId: FestivalId | string;
  year: YearEdition;
  interactive?: boolean;
  className?: string;
}


interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  maxAlpha: number;
  rotation: number;
  vRot: number;
  life: number;
  maxLife: number;
  type: "sparkle" | "petal" | "ember" | "powder" | "kite" | "star";
}

export function FestivalAnimationCanvas({
  festivalId,
  year,
  interactive = true,
  className = "",
}: FestivalAnimationCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (festivalId === "original") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Color palettes for particles based on festival & year
    const getParticlePalette = () => {
      switch (festivalId) {
        case "diwali":
          return year === "2026"
            ? ["#fbbf24", "#f59e0b", "#d97706", "#fef08a", "#ffffff"]
            : ["#f43f5e", "#fbbf24", "#06b6d4", "#a855f7", "#ec4899"];
        case "republic-day":
        case "independence-day":
          return ["#f97316", "#ffffff", "#10b981", "#3b82f6", "#fef08a"];
        case "ganesh-chaturthi":
          return ["#ea580c", "#f59e0b", "#dc2626", "#fbbf24", "#fed7aa"];
        case "holi":
          return ["#ec4899", "#8b5cf6", "#06b6d4", "#eab308", "#10b981", "#f97316"];
        case "navratri":
          return year === "2026"
            ? ["#f43f5e", "#fb923c", "#facc15", "#c084fc", "#e11d48"]
            : ["#38bdf8", "#818cf8", "#c084fc", "#f472b6", "#e879f9"];
        case "dussehra":
          return ["#f59e0b", "#ea580c", "#fbbf24", "#f43f5e", "#fef3c7"];
        case "gudi-padwa":
          return ["#f59e0b", "#10b981", "#ea580c", "#fef08a", "#84cc16"];
        case "makar-sankranti":
          return ["#3b82f6", "#ef4444", "#eab308", "#10b981", "#f97316", "#a855f7"];
        case "janmashtami":
          return ["#06b6d4", "#3b82f6", "#10b981", "#fbbf24", "#6366f1"];
        case "ram-navami":
          return ["#ea580c", "#f59e0b", "#facc15", "#fbbf24", "#fef08a"];
        default:
          return ["#a855f7", "#6366f1", "#38bdf8"];
      }
    };

    const palette = getParticlePalette();

    const getParticleType = (): Particle["type"] => {
      switch (festivalId) {
        case "diwali":
          return "ember";
        case "ganesh-chaturthi":
        case "gudi-padwa":
        case "navratri":
          return "petal";
        case "holi":
          return "powder";
        case "makar-sankranti":
          return "kite";
        case "independence-day":
        case "republic-day":
          return "petal";
        case "janmashtami":
        case "ram-navami":
        case "dussehra":
          return "sparkle";
        default:
          return "sparkle";
      }
    };

    const particles: Particle[] = [];
    const maxParticles = window.innerWidth < 768 ? 24 : 45;

    const createParticle = (spawnAnywhere = false): Particle => {
      const color = palette[Math.floor(Math.random() * palette.length)];
      const type = getParticleType();
      const pLife = Math.random() * 200 + 120;

      let vx = (Math.random() - 0.5) * 0.8;
      let vy = -0.4 - Math.random() * 0.8; // default upward drift for embers/sparkles

      if (type === "petal") {
        vy = 0.4 + Math.random() * 0.7; // drift down
        vx = (Math.random() - 0.5) * 1.2;
      } else if (type === "kite") {
        vx = 0.5 + Math.random() * 0.8; // soaring diagonally
        vy = -0.3 - Math.random() * 0.5;
      } else if (type === "powder") {
        vx = (Math.random() - 0.5) * 1.5;
        vy = (Math.random() - 0.5) * 1.2;
      }

      return {
        x: spawnAnywhere ? Math.random() * width : Math.random() * width,
        y: spawnAnywhere
          ? Math.random() * height
          : type === "petal"
          ? -20
          : height + 20,
        vx,
        vy,
        size: type === "kite" ? 14 : type === "petal" ? 8 : Math.random() * 4 + 2,
        color,
        alpha: 0.1,
        maxAlpha: Math.random() * 0.55 + 0.35,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.04,
        life: 0,
        maxLife: pLife,
        type,
      };
    };

    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(true));
    }

    // Optional mouse interaction
    let mouseX = -100;
    let mouseY = -100;
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    const drawKite = (ctx: CanvasRenderingContext2D, p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.lineTo(p.size * 0.8, 0);
      ctx.lineTo(0, p.size * 0.9);
      ctx.lineTo(-p.size * 0.8, 0);
      ctx.closePath();
      ctx.fill();

      // Tail
      ctx.strokeStyle = p.color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, p.size * 0.9);
      ctx.quadraticCurveTo(
        Math.sin(p.life * 0.1) * 8,
        p.size * 1.6,
        0,
        p.size * 2.2
      );
      ctx.stroke();
      ctx.restore();
    };

    const drawPetal = (ctx: CanvasRenderingContext2D, p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const drawSparkle = (ctx: CanvasRenderingContext2D, p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2);
      ctx.fill();

      // Cross flare
      ctx.strokeStyle = p.color;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(-p.size * 1.5, 0);
      ctx.lineTo(p.size * 1.5, 0);
      ctx.moveTo(0, -p.size * 1.5);
      ctx.lineTo(0, p.size * 1.5);
      ctx.stroke();
      ctx.restore();
    };

    const drawEmber = (ctx: CanvasRenderingContext2D, p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.globalAlpha = p.alpha;
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 1.5);
      grad.addColorStop(0, "#ffffff");
      grad.addColorStop(0.3, p.color);
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, p.size * 1.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const drawPowder = (ctx: CanvasRenderingContext2D, p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.globalAlpha = p.alpha * 0.6;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(0, 0, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life += 1;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;

        // Fade in and out
        const progress = p.life / p.maxLife;
        if (progress < 0.2) {
          p.alpha = (progress / 0.2) * p.maxAlpha;
        } else if (progress > 0.8) {
          p.alpha = ((1 - progress) / 0.2) * p.maxAlpha;
        } else {
          p.alpha = p.maxAlpha;
        }

        // Slight drift modulation
        p.vx += Math.sin(p.life * 0.05) * 0.02;

        // Subtle repulsion from mouse
        if (interactive && mouseX > 0 && mouseY > 0) {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            p.x += (dx / dist) * 1.5;
            p.y += (dy / dist) * 1.5;
          }
        }

        // Render based on type
        if (p.type === "kite") {
          drawKite(ctx, p);
        } else if (p.type === "petal") {
          drawPetal(ctx, p);
        } else if (p.type === "ember") {
          drawEmber(ctx, p);
        } else if (p.type === "powder") {
          drawPowder(ctx, p);
        } else {
          drawSparkle(ctx, p);
        }

        // Respawn if out of screen or dead
        if (
          p.life >= p.maxLife ||
          p.x < -30 ||
          p.x > width + 30 ||
          p.y < -30 ||
          p.y > height + 30
        ) {
          particles[i] = createParticle(false);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [festivalId, year, interactive]);

  if (festivalId === "original") return null;

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-10 h-full w-full ${className}`}
      style={{ mixBlendMode: "screen" }}
    />
  );
}

export default FestivalAnimationCanvas;

