"use client";

import {
  IconMining,
  IconFintech,
  IconLogistics,
  IconEducation,
  IconAgro,
  IconRetail,
  IconLegal,
  IconSalud,
  IconInmuebles,
  IconSaaS,
  IconNube,
  IconIATape,
  IconEscala,
  IconFluidez,
  IconAhorro,
  IconBlindaje,
} from "./Icons";

export function SocialProofTape() {
  const industries = [
    { icon: <IconMining />, name: "Minería" },
    { icon: <IconFintech />, name: "Fintech" },
    { icon: <IconLogistics />, name: "Logística" },
    { icon: <IconEducation />, name: "Educación" },
    { icon: <IconAgro />, name: "Agro" },
    { icon: <IconRetail />, name: "Retail" },
    { icon: <IconLegal />, name: "Legal" },
    { icon: <IconSalud />, name: "Salud" },
    { icon: <IconInmuebles />, name: "Inmuebles" },
    { icon: <IconSaaS />, name: "SaaS" },
    { icon: <IconNube />, name: "Cloud" },
    { icon: <IconIATape />, name: "IA" },
    { icon: <IconEscala />, name: "Escala" },
    { icon: <IconFluidez />, name: "Fluidez" },
    { icon: <IconAhorro />, name: "Ahorro" },
    { icon: <IconBlindaje />, name: "Seguridad" },
  ];

  return (
    <section className="w-full bg-[#0A0A0A] py-12 overflow-hidden border-y border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[11px] font-medium text-zinc-600 tracking-widest uppercase text-center mb-10">
          Infraestructura diseñada para operaciones críticas en:
        </p>

        {/* Infinite scroll tape */}
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-scroll-tape">
            {/* Original set */}
            {industries.map((industry, i) => (
              <div
                key={`original-${i}`}
                className="flex items-center gap-2.5 whitespace-nowrap flex-shrink-0"
              >
                <div className="w-7 h-7 text-zinc-600 flex-shrink-0">
                  {industry.icon}
                </div>
                <span className="text-sm font-medium text-zinc-500">
                  {industry.name}
                </span>
              </div>
            ))}

            {/* Duplicated for seamless loop */}
            {industries.map((industry, i) => (
              <div
                key={`duplicate-${i}`}
                className="flex items-center gap-2.5 whitespace-nowrap flex-shrink-0"
              >
                <div className="w-7 h-7 text-zinc-600 flex-shrink-0">
                  {industry.icon}
                </div>
                <span className="text-sm font-medium text-zinc-500">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>

          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none" />
        </div>
      </div>

      {/* CSS animation */}
      <style>{`
        @keyframes scroll-tape {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-tape {
          animation: scroll-tape 60s linear infinite;
        }
        .animate-scroll-tape svg {
          width: 100%;
          height: 100%;
          display: block;
        }
      `}</style>
    </section>
  );
}
