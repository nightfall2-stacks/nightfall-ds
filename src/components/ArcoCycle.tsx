"use client";

import { useEffect, useRef } from "react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const arcoSteps = [
  {
    id: "A",
    letter: "A",
    title: "Auditar",
    icon: Search,
    description:
      "Diagnóstico real de tu sistema: base de datos, cuellos de botella en queries, deuda técnica acumulada, procesos manuales. El resultado es un documento técnico con hallazgos priorizados por impacto.",
  },
  {
    id: "R",
    letter: "R",
    title: "Rediseñar",
    icon: PenTool,
    description:
      "Arquitectura objetivo: qué servicios, qué base de datos y por qué, cómo se comunican, cómo se despliega. Cada decisión documentada con alternativas evaluadas.",
  },
  {
    id: "C",
    letter: "C",
    title: "Construir",
    icon: Code2,
    description:
      "Sprints de 2 semanas con demos funcionales — no mockups. TypeScript estricto, code reviews obligatorios, tests desde el sprint uno, CI/CD antes de lógica de negocio.",
  },
  {
    id: "O",
    letter: "O",
    title: "Operar",
    icon: Rocket,
    description:
      "Deploy no es el final. Monitoreo con alertas, runbooks de operación, transferencia de conocimiento. Los primeros 30 días post-launch, nuestro equipo está en guardia.",
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
      { threshold: 0.05 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-[#0A0A0A] py-section-gap px-6 border-y border-zinc-800/50">
      <div ref={ref} className="max-w-5xl mx-auto opacity-0">
        {/* Section heading */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 w-fit mx-auto mb-6">
            <span className="text-xs font-medium text-zinc-400 tracking-wide">
              Proceso de Ingeniería
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4">
            El Ciclo A.R.C.O.
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Cuatro fases con entregables concretos. Sin sprints infinitos, sin
            scope creep. Cada fase tiene un output que el cliente aprueba antes
            de avanzar.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {arcoSteps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.id}
                className="group relative bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 rounded-lg p-6 flex flex-col h-full transition-all duration-200"
              >
                {/* Large background letter */}
                <div className="absolute -bottom-2 -right-1 text-[100px] font-black text-zinc-900/50 pointer-events-none select-none leading-none">
                  {step.letter}
                </div>

                {/* Icon */}
                <div className="w-10 h-10 rounded-md bg-zinc-800/80 flex items-center justify-center mb-4 group-hover:bg-zinc-700/80 transition-colors">
                  <IconComponent className="text-zinc-400 group-hover:text-zinc-200 transition-colors" size={18} />
                </div>

                <h3 className="text-lg font-semibold text-zinc-100 mb-3 relative z-10">
                  {step.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed relative z-10 flex-grow">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
