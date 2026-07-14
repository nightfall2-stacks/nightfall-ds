"use client";

import { useEffect, useRef } from "react";
import { Workflow, Bot, ShieldCheck, LayoutDashboard } from "lucide-react";

interface Card {
  id: string;
  icon: typeof Workflow;
  title: string;
  description: string;
  wide: boolean;
}

const solutionCards: Card[] = [
  {
    id: "1",
    icon: Workflow,
    title: "Automatización de Procesos",
    description:
      "Reemplazamos tareas manuales con pipelines y APIs robustas. Recupera horas de trabajo de tu equipo.",
    wide: true,
  },
  {
    id: "2",
    icon: Bot,
    title: "Agentes IA Integrados",
    description:
      "Modelos LLM para tareas específicas: clasificación, extracción y soporte automatizado con seguridad.",
    wide: false,
  },
  {
    id: "3",
    icon: ShieldCheck,
    title: "Seguridad por Diseño",
    description:
      "HTTPS, rotación de tokens, logs de auditoría y gestión de secretos en cada capa del sistema.",
    wide: false,
  },
  {
    id: "4",
    icon: LayoutDashboard,
    title: "Plataformas B2B a Medida",
    description:
      "Creamos el software interno que tu empresa necesita sin depender de licencias externas. El código es tuyo.",
    wide: true,
  },
];

function BentoCard({ card }: { card: Card }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-up");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const IconComponent = card.icon;

  return (
    <div
      ref={ref}
      className={`group relative bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 rounded-lg p-6 md:p-8 transition-all duration-200 opacity-0 ${
        card.wide ? "col-span-1 md:col-span-2" : "col-span-1"
      }`}
    >
      {/* Icon */}
      <div className="w-9 h-9 rounded-md bg-zinc-800/80 flex items-center justify-center mb-4 group-hover:bg-zinc-700/80 transition-colors">
        <IconComponent className="text-zinc-400 group-hover:text-zinc-200 transition-colors" size={18} />
      </div>

      {/* Content */}
      <div className="max-w-lg">
        <h3 className="text-base font-semibold text-zinc-100 mb-2">
          {card.title}
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed">
          {card.description}
        </p>
      </div>
    </div>
  );
}

export function BentoBoxGrid() {
  return (
    <section className="relative w-full bg-[#0A0A0A] py-section-gap px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-3">
            Soluciones
          </h2>
          <p className="text-zinc-400 max-w-xl">
            Desarrollamos software para resolver problemas operativos reales, sin depender de plantillas.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionCards.map((card) => (
            <BentoCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
