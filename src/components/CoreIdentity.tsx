"use client";

import { useEffect, useRef } from "react";

const values = [
  {
    num: "01",
    title: "Opiniones Fuertes, Código Auditable",
    description:
      "Tenemos un stack definido y lo defendemos con datos. No elegimos tecnologías por popularidad — las elegimos porque las hemos llevado a producción y sabemos dónde fallan. Si algo no lo dominamos, lo decimos antes de firmar.",
  },
  {
    num: "02",
    title: "Código Limpio como Estándar Mínimo",
    description:
      "Cada pull request pasa por code review. Cada módulo tiene tests. Cada función tiene un nombre que explica lo que hace. El código que escribimos hoy lo va a mantener otro ingeniero en 18 meses.",
  },
  {
    num: "03",
    title: "Uptime No Es Negociable",
    description:
      "Circuit breakers, health checks, retry con exponential backoff, y alertas que nos despiertan a las 3 AM antes de que el cliente se entere. Si prometemos 99.9%, está en el contrato.",
  },
  {
    num: "04",
    title: "Seguridad en Cada Capa",
    description:
      "HTTPS everywhere, secrets en vault, menor privilegio en cada servicio, auth con tokens rotados, y audit logs inmutables. No es un módulo adicional — está desde el primer commit.",
  },
  {
    num: "05",
    title: "Entregamos Propiedad, No Dependencia",
    description:
      "El código fuente es tuyo. La documentación es tuya. Los runbooks son tuyos. Si nos vuelves a llamar, es porque quieres — no porque no puedas operar sin nosotros.",
  },
];

export function CoreIdentity() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-up");
        }
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-[#0A0A0A] py-section-gap px-6">
      <div ref={containerRef} className="max-w-5xl mx-auto opacity-0">

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 md:mb-24">
          {/* Mission */}
          <div className="bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 rounded-lg p-8 md:p-10 transition-colors duration-200">
            <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-5">
              Misión
            </h2>
            <p className="text-lg text-zinc-200 leading-relaxed font-medium">
              &quot;Construir software que funcione en producción bajo carga real, que otro ingeniero pueda entender sin preguntarle al autor, y que le devuelva a nuestros clientes las horas que hoy pierden en procesos manuales y sistemas frágiles.&quot;
            </p>
          </div>

          {/* Vision */}
          <div className="bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 rounded-lg p-8 md:p-10 transition-colors duration-200">
            <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-5">
              Visión
            </h2>
            <p className="text-lg text-zinc-200 leading-relaxed font-medium">
              &quot;Ser el estudio de ingeniería que las empresas llaman cuando ya se cansaron de agencias que entregan MVPs que nunca llegan a producción. Que nos elijan por la calidad del código, no por el pitch de ventas.&quot;
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="relative">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-3">
              Cómo Trabajamos
            </h2>
            <p className="text-zinc-400 max-w-xl">
              No son valores de poster. Son reglas que aplicamos en cada commit,
              cada code review y cada deploy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((val) => (
              <div
                key={val.num}
                className="group bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 rounded-lg p-6 transition-all duration-200"
              >
                <div className="text-3xl font-black text-zinc-800 group-hover:text-zinc-700 transition-colors mb-4 font-mono">
                  {val.num}
                </div>
                <h3 className="text-base font-semibold text-zinc-100 mb-3 group-hover:text-zinc-50 transition-colors">
                  {val.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
