"use client";

import { useEffect, useRef } from "react";

const manifestoPoints = [
  {
    num: "I",
    title: "Cada línea de código pasa por otra persona.",
    subtitle: "Code Review obligatorio via Pull Requests",
    description:
      "Ningún commit llega a producción sin ser revisado por al menos un ingeniero que no lo escribió. GitHub con branch protection: main está bloqueado, PRs requieren aprobación y CI verde, force-push prohibido. Sin excepciones.",
    tags: ["Branch protection", "Approval requerido", "CI verde obligatorio", "No force-push"],
  },
  {
    num: "II",
    title: "Si no tiene test, no existe.",
    subtitle: "Testing automatizado desde el Sprint 1",
    description:
      "Tests unitarios para lógica de negocio, tests de integración para APIs, y tests E2E para flujos críticos. CI no permite mergear si la cobertura baja del umbral. Los bugs aparecen en el pipeline, no en producción un viernes a las 11 PM.",
    tags: ["Unit", "Integration", "E2E", "Cobertura enforced", "CI bloquea si falla"],
  },
  {
    num: "III",
    title: "Deploy el día uno. Deploy todos los días.",
    subtitle: "CI/CD — Integración y Entrega Continua",
    description:
      "El pipeline se configura antes de la primera feature. Push a main → tests → build Docker → staging → smoke tests → producción → rollback automático si fallan health checks. El deploy más peligroso es el que se hace una vez al mes con 47 cambios acumulados.",
    tags: ["GitHub Actions", "Docker", "Staging automático", "Rollback < 60 seg"],
  },
  {
    num: "IV",
    title: "La deuda técnica se paga o se documenta.",
    subtitle: "Gestión explícita de Technical Debt",
    description:
      "Registro explícito de toda deuda técnica con contexto, riesgo e impacto. Porcentaje fijo por sprint para pagarla. Cuando nos dicen 'pero funciona', respondemos: 'Hoy funciona. En 6 meses, esa query sin índice va a tumbar tu base de datos un lunes a las 9 AM.'",
    tags: ["Backlog de deuda", "% fijo por sprint", "Documentada con riesgo e impacto"],
  },
];

export function EngineeringManifesto() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-up");
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-[#0A0A0A] py-section-gap px-6">
      <div ref={sectionRef} className="max-w-4xl mx-auto opacity-0">
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 w-fit mx-auto mb-6">
            <span className="text-xs font-mono text-zinc-400">#!/bin/manifesto</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4">
            Manifiesto de Ingeniería
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Cuatro compromisos no negociables. No son aspiracionales — son
            requisitos mínimos para que nuestro código llegue a producción.
          </p>
        </div>

        {/* Manifesto points */}
        <div className="space-y-4">
          {manifestoPoints.map((point) => (
            <div
              key={point.num}
              className="group bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all duration-200 overflow-hidden"
            >
              <div className="p-6 md:p-8">
                {/* Numeral + Title */}
                <div className="flex items-start gap-5 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-zinc-800/80 flex items-center justify-center group-hover:bg-zinc-700/80 transition-colors">
                    <span className="text-zinc-400 font-semibold text-sm font-mono group-hover:text-zinc-200 transition-colors">
                      {point.num}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-semibold text-zinc-100 mb-0.5">
                      {point.title}
                    </h3>
                    <p className="text-xs text-zinc-500 font-mono">
                      {point.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-5 md:pl-[60px]">
                  {point.description}
                </p>

                {/* Tags */}
                <div className="md:pl-[60px] flex flex-wrap gap-2">
                  {point.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 rounded group-hover:text-zinc-400 group-hover:border-zinc-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="mt-12 pt-8 border-t border-zinc-800/50 text-center max-w-xl mx-auto">
          <p className="text-zinc-500 leading-relaxed text-sm italic">
            &quot;No escribimos código que &apos;funciona por ahora&apos;. Escribimos código
            que funciona bajo carga, que otro ingeniero puede mantener, y que
            el cliente puede auditar cuando quiera.&quot;
          </p>
          <p className="text-zinc-600 text-xs font-mono mt-3">
            — Equipo de Ingeniería, Nightfall DS
          </p>
        </div>
      </div>
    </section>
  );
}
