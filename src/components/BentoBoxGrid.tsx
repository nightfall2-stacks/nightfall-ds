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
    title: "Automatización de procesos internos.",
    description:
      "Si tu equipo copia datos entre sistemas, genera reportes manualmente o depende de Excel para operaciones críticas — eso es deuda operativa. La reemplazamos con pipelines automatizados y APIs que conectan tus sistemas. ROI medido en horas-persona recuperadas.",
    wide: true,
  },
  {
    id: "2",
    icon: Bot,
    title: "Agentes IA en producción.",
    description:
      "Agentes con LLMs fine-tuned para tareas específicas: clasificación de tickets, extracción de datos, soporte L1 automatizado. Con guardrails, observabilidad y fallbacks definidos.",
    wide: false,
  },
  {
    id: "3",
    icon: ShieldCheck,
    title: "Seguridad desde la arquitectura.",
    description:
      "HTTPS everywhere, secrets en vault, menor privilegio, JWT con refresh tokens rotados, audit logs inmutables. Está en cada capa desde el primer commit.",
    wide: false,
  },
  {
    id: "4",
    icon: LayoutDashboard,
    title: "Plataformas B2B a medida.",
    description:
      "ERPs, CRMs internos, portales de proveedores — software que tu equipo usa 8 horas al día y no existe como SaaS para tu industria. Lo diseñamos contigo, lo construimos con nuestro stack, y te entregamos el código. Sin vendor lock-in.",
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
            Lo que construimos.
          </h2>
          <p className="text-zinc-400 max-w-xl">
            Software que resuelve problemas reales de operación. Sin plantillas,
            sin WordPress disfrazado, sin dependencia de terceros.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solutionCards.map((card) => (
            <BentoCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
