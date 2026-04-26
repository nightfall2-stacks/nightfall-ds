"use client";

import { useEffect, useRef } from "react";
import { IconAutomation, IconSecurity, IconAnalytics, IconOptimization } from "./Icons";

const arcoSteps = [
  {
    id: "A",
    letter: "A",
    title: "Automatiza",
    description: "Digitalizamos tus procesos manuales y operativos. Eliminamos el cuello de botella humano para acelerar tu producción y reducir los costos operativos de forma inmediata.",
    icon: <IconAutomation />,
  },
  {
    id: "R",
    letter: "R",
    title: "Resguarda",
    description: "Blindamos tu infraestructura tecnológica. Aseguramos la continuidad de tu negocio protegiendo tu información crítica con protocolos de ciberseguridad corporativa de primer nivel.",
    icon: <IconSecurity />,
  },
  {
    id: "C",
    letter: "C",
    title: "Cuantifica",
    description: "Lo que no se mide, no se mejora. Extraemos y centralizamos los datos de tus nuevas operaciones automatizadas para establecer indicadores de rendimiento (KPIs) precisos y transparentes.",
    icon: <IconAnalytics />,
  },
  {
    id: "O",
    letter: "O",
    title: "Optimiza",
    description: "Aplicamos análisis avanzado e inteligencia artificial sobre tus datos para identificar nuevas áreas de mejora, reiniciando el ciclo y llevando la eficiencia de tu empresa al siguiente nivel.",
    icon: <IconOptimization />,
  },
];

export function ArcoCycle() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-up");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-dark-bg py-section-gap px-6 border-y border-white/5">
      <div
        ref={ref}
        className="max-w-7xl mx-auto opacity-0"
      >
        {/* Section heading */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full glass-effect w-fit mx-auto mb-6">
            <span className="text-accent-gold">◆</span>
            <span className="text-xs font-semibold text-text-secondary tracking-widest uppercase">
              Nuestra Metodología de Crecimiento
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            El Ciclo A.R.C.O.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            En Nightfall DS, no implementamos herramientas aisladas; ejecutamos un sistema de mejora continua diseñado exclusivamente para garantizar el retorno de inversión (ROI) y la escalabilidad de tu empresa. Nuestro proceso se basa en cuatro fases estratégicas:
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {arcoSteps.map((step, index) => (
            <div
              key={step.id}
              className="group relative glass-effect rounded-lg p-8 flex flex-col h-full transition-all duration-300 hover:border-accent-gold/30 hover:shadow-glow hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Large background letter */}
              <div className="absolute -bottom-4 -right-2 text-[120px] font-black text-white/[0.02] group-hover:text-accent-gold/5 transition-colors duration-500 pointer-events-none select-none leading-none">
                {step.letter}
              </div>

              {/* Icon & Title Container */}
              <div className="flex flex-col gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-xl glass-effect flex items-center justify-center text-accent-gold border border-accent-gold/20 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:bg-accent-gold/10 group-hover:scale-110 transition-all duration-300">
                  <div className="scale-75">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-text-primary">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-text-tertiary leading-relaxed relative z-10 flex-grow">
                {step.description}
              </p>

              {/* Glowing hover border */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
