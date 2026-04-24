"use client";

import { useEffect, useRef } from "react";
import { IconAutomation, IconAI, IconSecurity, IconEducationPlatform } from "./Icons";

interface Card {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  wide: boolean;
}

const solutionCards: Card[] = [
  {
    id: "1",
    icon: <IconAutomation />,
    title: "Reducción drástica de OPEX.",
    description:
      "Diseñamos flujos de trabajo automatizados y analítica de datos en tiempo real. Eliminamos la fricción manual en logística y manufactura.",
    wide: true,
  },
  {
    id: "2",
    icon: <IconAI />,
    title: "IA que ejecuta, no solo responde.",
    description:
      "Agentes de IA Generativa (RAG) autónomos para soporte 24/7 y resolución de consultas corporativas masivas.",
    wide: false,
  },
  {
    id: "3",
    icon: <IconSecurity />,
    title: "Riesgo cero en tus datos.",
    description:
      "Protección nativa de activos (PII/PCI) en cada despliegue. Infraestructura blindada para el sector financiero y minero.",
    wide: false,
  },
  {
    id: "4",
    icon: <IconEducationPlatform />,
    title: "Ecosistema Educativo de Alta Disponibilidad.",
    description:
      "SaaS propietario para centralizar la gestión académica, administrativa y de comunicaciones en una arquitectura escalable.",
    wide: true,
  },
];

function BentoCard({ card, index }: { card: Card; index: number }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-up");
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden glass-effect rounded-lg p-8 transition-all duration-300 hover:border-accent-gold/30 hover:shadow-glow cursor-pointer ${
        card.wide ? "col-span-2" : "col-span-1"
      }`}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Icon in corner */}
      <div className="absolute top-6 right-6 w-16 h-16 text-accent-gold opacity-20 group-hover:opacity-30 transition-opacity flex-shrink-0">
        {card.icon}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-lg">
        <h3 className="text-2xl font-bold text-text-primary mb-3">
          {card.title}
        </h3>
        <p className="text-text-tertiary leading-relaxed">{card.description}</p>
      </div>

      {/* Subtle hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
    </div>
  );
}

export function BentoBoxGrid() {
  return (
    <section className="relative w-full bg-dark-bg py-section-gap px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Ingeniería adaptada a tu Core.
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-gold to-accent-copper rounded-full" />
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutionCards.map((card, index) => (
            <BentoCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
