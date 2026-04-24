"use client";

import { useEffect, useRef } from "react";
import { CodeBlock } from "./Icons";
import Image from "next/image";

const stackItems = [
  {
    icon: <CodeBlock />,
    title: "Frontend High-End.",
    description: "Next.js y Vercel. Latencia cero y rendimiento absoluto.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&auto=format",
  },
  {
    icon: <CodeBlock />,
    title: "Backend Robusto.",
    description:
      "Node.js y PostgreSQL sobre Railway. Datos estructurados para cargas masivas.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format",
  },
  {
    icon: <CodeBlock />,
    title: "Capa Low-Code.",
    description:
      "Te damos el control. Interfaces para que tu gerencia modifique las automatizaciones sin depender de nosotros.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80&auto=format",
  },
  {
    icon: <CodeBlock />,
    title: "SaaS + Staffing TI.",
    description:
      "Proveemos la infraestructura y el talento técnico bajo demanda para asegurar que la tecnología se adopte al 100%.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format",
  },
];

function StackItem({
  item,
  index,
}: {
  item: (typeof stackItems)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isVisible = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible.current) {
          isVisible.current = true;
          entry.target.classList.add("fade-up");
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="opacity-0"
      style={{
        animationDelay: `${index * 0.15}s`,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden glass-effect border border-white/10">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex-shrink-0 text-accent-gold">
              {item.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-text-tertiary leading-relaxed text-lg">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StackShowcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll(".stack-item");
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("fade-up");
            }, index * 150);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-section-gap px-6 overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(212, 175, 55, 0.1) 25%, rgba(212, 175, 55, 0.1) 26%, transparent 27%, transparent 74%, rgba(212, 175, 55, 0.1) 75%, rgba(212, 175, 55, 0.1) 76%, transparent 77%, transparent),
                              linear-gradient(90deg, transparent 24%, rgba(212, 175, 55, 0.1) 25%, rgba(212, 175, 55, 0.1) 26%, transparent 27%, transparent 74%, rgba(212, 175, 55, 0.1) 75%, rgba(212, 175, 55, 0.1) 76%, transparent 77%, transparent)`,
            backgroundSize: "50p2050px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section heading */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-text-primary leading-tight">
            Cero plantillas.
            <br />
            <span className="text-accent-gold">Código puro.</span>
          </h2>
        </div>

        {/* Stack items with staggered animation */}
        <div className="space-y-12">
          {stackItems.map((item, index) => (
            <div key={index} className="stack-item opacity-0">
              <StackItem item={item} index={index} />
            </div>
          ))}
        </div>

        {/* Decorative code snippet at bottom */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <p className="text-text-tertiary text-sm font-mono mb-4">
            const nightfall = {"{"} efficiency, scalability, security {"}"};
          </p>
          <p className="text-text-tertiary text-xs">
            → Arquitectura lista para empresas que requieren rigor de ingeniería
            + velocidad de adopción
          </p>
        </div>
      </div>
    </section>
  );
}
