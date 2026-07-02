"use client";

import { useEffect, useRef } from "react";
import { Cloud, Server, Database, Container, GitBranch, Layers } from "lucide-react";

const techStack = [
  {
    icon: Cloud,
    title: "AWS",
    description:
      "ECS Fargate para servicios, S3 para assets, CloudFront como CDN. Infraestructura declarativa con Terraform — cada cambio en un PR auditable.",
  },
  {
    icon: Layers,
    title: "React / Next.js",
    description:
      "TypeScript estricto, SSR/SSG híbrido para SEO real y tiempos de carga sub-segundo. Componentes reutilizables, state management con Zustand.",
  },
  {
    icon: Server,
    title: "Node.js",
    description:
      "APIs REST y WebSockets para tiempo real. Event loop no-bloqueante para miles de conexiones concurrentes con footprint de memoria predecible.",
  },
  {
    icon: Database,
    title: "PostgreSQL",
    description:
      "Para datos relacionales críticos y alta concurrencia. ACID completo, PostGIS para geoespacial, JSONB para flexibilidad sin sacrificar integridad.",
  },
  {
    icon: Container,
    title: "Docker",
    description:
      "Imágenes multi-stage para builds livianos. Mismo entorno en dev, staging y producción. Sin el clásico 'en mi máquina sí funciona'.",
  },
  {
    icon: GitBranch,
    title: "CI/CD",
    description:
      "GitHub Actions: tests automatizados, build, deploy a staging, smoke tests, promoción a prod. Rollback automático si fallan health checks.",
  },
];

export function StackShowcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-up");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stack"
      className="relative w-full bg-[#0A0A0A] py-section-gap px-6"
    >
      <div ref={sectionRef} className="max-w-5xl mx-auto opacity-0">
        {/* Section heading */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 w-fit mx-auto mb-6">
            <span className="text-xs font-medium text-zinc-400 tracking-wide">
              Stack definido, no negociable
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4">
            Nuestra Ingeniería
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Cada tecnología elegida por una razón técnica concreta — y
            documentada. Si algo no necesita código custom, te lo decimos.
          </p>
        </div>

        {/* Tech grid — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={tech.title}
                className="group bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 rounded-lg p-6 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-md bg-zinc-800/80 flex items-center justify-center group-hover:bg-zinc-700/80 transition-colors">
                    <IconComponent className="w-4.5 h-4.5 text-zinc-400 group-hover:text-zinc-200 transition-colors" size={18} />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-100">
                    {tech.title}
                  </h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  );
}
