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
      "Automatizamos tus procesos manuales en logística y manufactura para reducir errores y ahorrar dinero desde el primer día.",
    wide: true,
  },
  {
    id: "2",
    icon: <IconAI />,
    title: "IA que trabaja por ti.",
    description:
      "Implementamos agentes inteligentes que resuelven consultas masivas y operan tu soporte 24/7 de forma autónoma.",
    wide: false,
  },
  {
    id: "3",
    icon: <IconSecurity />,
    title: "Tus datos blindados.",
    description:
      "Seguridad de nivel bancario y minero. Protegemos tu información confidencial en cada proceso para que operes sin riesgos.",
    wide: false,
  },
  {
    id: "4",
    icon: <IconEducationPlatform />,
    title: "Plataformas de Alta Disponibilidad.",
    description:
      "Desarrollamos software tipo SaaS a medida, diseñado para centralizar operaciones complejas en arquitecturas que escalan sin límites.",
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
      className={`group relative overflow-hidden glass-effect rounded-lg p-8 transition-all duration-300 hover:border-accent-gold/30 hover:shadow-glow cursor-pointer ${card.wide ? "col-span-2" : "col-span-1"
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
            Ingeniería que acelera tu negocio.
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
