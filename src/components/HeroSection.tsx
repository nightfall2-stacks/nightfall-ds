"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
export function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-down");
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-dark-bg overflow-hidden flex items-center justify-center">
      {/* Radial glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent-gold/10 via-accent-copper/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div
        ref={containerRef}
        className="relative z-10 max-w-5xl mx-auto px-6 py-section-gap text-center space-y-8"
      >
        {/* Badge */}
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full glass-effect w-fit mx-auto">
          <span className="text-accent-gold">◆</span>
          <span className="text-xs font-semibold text-text-secondary tracking-widest uppercase">
            Ingeniería de Eficiencia Corporativa
          </span>
        </div>

        {/* H1 - Massive title */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-text-primary leading-tight tracking-tight">
          Tu software no debería ser
          <br />
          <span className="text-gradient">el freno de tu crecimiento.</span>
        </h1>

        {/* H2 - Supporting copy */}
        <p className="text-base md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
          Reemplazamos sistemas obsoletos con ecosistemas digitales desde cero. Automatización B2B y Agentes IA para empresas que necesitan escalar sin multiplicar su planilla.
        </p>

        {/* Code mockup / terminal */}
        <div className="relative mt-12 mx-auto max-w-3xl">
          <div className="glass-effect rounded-lg p-6 space-y-4 font-mono text-sm overflow-hidden">
            {/* Terminal lines with animation */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-accent-gold">$</span>
                <span className="text-text-secondary">nightfall --deploy architecture</span>
              </div>
              <div className="flex items-center gap-2 text-accent-gold">
                <span>→</span>
                <span>Optimizando infraestructura...</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <span className="text-accent-gold">→</span>
                <span>Configurando escalabilidad automática</span>
              </div>
              <div className="flex items-center gap-2 text-text-tertiary">
                <span className="text-accent-gold">→</span>
                <span>Inicializando redundancia</span>
              </div>
              <div className="flex items-center gap-2 text-accent-gold">
                <span className="animate-pulse">✓</span>
                <span>Sistema listo. Uptime: 99.99%</span>
              </div>
            </div>

            {/* Animated line chart */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="flex items-end gap-1 h-12">
                <div className="flex-1 h-6 bg-gradient-to-t from-accent-gold/30 to-transparent rounded-t"></div>
                <div className="flex-1 h-8 bg-gradient-to-t from-accent-gold/30 to-transparent rounded-t"></div>
                <div className="flex-1 h-5 bg-gradient-to-t from-accent-gold/30 to-transparent rounded-t"></div>
                <div className="flex-1 h-10 bg-gradient-to-t from-accent-gold/30 to-transparent rounded-t"></div>
                <div className="flex-1 h-7 bg-gradient-to-t from-accent-gold/30 to-transparent rounded-t"></div>
              </div>
            </div>
          </div>
          {/* Fade gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-bg to-transparent rounded-lg" />
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Link 
            href="/evaluacion"
            className="inline-flex items-center justify-center group relative px-8 py-4 bg-accent-gold hover:bg-accent-copper text-dark-bg font-bold text-lg rounded-full transition-all duration-300 shadow-glow hover:shadow-glow hover:shadow-lg"
          >
            Iniciar Evaluación Técnica
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
              ↗
            </span>
          </Link>
          <p className="text-xs text-text-tertiary mt-3">
            Coordina una reunión inmediata con nuestro equipo técnico
          </p>
        </div>
      </div>
    </section>
  );
}
