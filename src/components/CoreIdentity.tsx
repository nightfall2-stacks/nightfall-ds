"use client";

import { useEffect, useRef } from "react";

const values = [
  {
    num: "01",
    title: "Frialdad Estratégica",
    description: "Frente a la saturación operativa de nuestros clientes, tomamos distancia para evaluar con objetividad. Separamos la frustración del problema estructural para diseñar soluciones basadas estrictamente en datos y ROI. Entregamos respuestas frías y precisas a problemas críticos.",
  },
  {
    num: "02",
    title: "Ingeniería Pura",
    description: "Rechazamos las plantillas genéricas porque respetamos la complejidad de tu negocio. Desarrollamos tecnología con rigor y artesanía digital, garantizando que cada línea de código que entregamos no sea un gasto, sino un activo que revalorice tu empresa.",
  },
  {
    num: "03",
    title: "Disponibilidad Absoluta",
    description: "Entendemos que un sistema caído genera pánico financiero. Diseñamos infraestructuras resilientes con un solo objetivo en mente: que tú y tu equipo puedan descansar, sabiendo que nuestros ecosistemas están construidos para soportar la carga y no fallar.",
  },
  {
    num: "04",
    title: "Seguridad por Diseño",
    description: "La protección de los datos de tu empresa no es un módulo adicional; es nuestro cimiento. Actuamos como la primera línea de defensa digital, integrando prevención de pérdida de datos (DLP) para que operes y crezcas sin el miedo constante a vulnerabilidades externas.",
  },
  {
    num: "05",
    title: "Abstracción Inteligente",
    description: "Ocultamos la extrema complejidad tecnológica en el backend para entregarte simplicidad absoluta en el frontend. Creamos herramientas e interfaces tan intuitivas que tu equipo directivo se sentirá poderoso al usarlas y gestionar sus flujos, no intimidado por la tecnología.",
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
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-dark-bg py-section-gap px-6">
      <div ref={containerRef} className="max-w-7xl mx-auto opacity-0">
        
        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 mb-24">
          
          {/* Mission */}
          <div className="relative glass-effect rounded-2xl p-10 md:p-14 border border-white/5 overflow-hidden group hover:border-accent-gold/20 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none group-hover:bg-accent-gold/10 transition-colors duration-500" />
            <h2 className="text-sm font-bold tracking-widest text-accent-gold uppercase mb-6">
              Misión
            </h2>
            <p className="text-xl md:text-2xl text-text-primary leading-relaxed font-medium">
              "Devolver el control y la tranquilidad operativa a los tomadores de decisiones. Transformamos la incertidumbre y el desgaste de los procesos manuales en infraestructuras de eficiencia crítica. Construimos ecosistemas digitales que permiten a las empresas escalar con la absoluta confianza de que su operación jamás se detendrá."
            </p>
          </div>

          {/* Vision */}
          <div className="relative glass-effect rounded-2xl p-10 md:p-14 border border-white/5 overflow-hidden group hover:border-accent-copper/20 transition-colors duration-500">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-copper/5 blur-3xl rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none group-hover:bg-accent-copper/10 transition-colors duration-500" />
            <h2 className="text-sm font-bold tracking-widest text-accent-copper uppercase mb-6">
              Visión
            </h2>
            <p className="text-xl md:text-2xl text-text-primary leading-relaxed font-medium">
              "Ser el respaldo invisible e inquebrantable detrás de los motores económicos de la región. Queremos que las empresas más exigentes tengan la certeza de que, mientras ellos lideran y expanden su industria, nuestra ingeniería blinda su tecnología."
            </p>
          </div>
        </div>

        {/* Corporate Values */}
        <div className="relative">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
              Nuestro ADN Corporativo
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-gold to-accent-copper rounded-full mx-auto md:mx-0" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div 
                key={val.num}
                className="group p-8 rounded-lg glass-effect border border-white/5 hover:border-accent-gold/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl font-black text-white/5 group-hover:text-accent-gold/20 transition-colors mb-6">
                  {val.num}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-accent-gold transition-colors">
                  {val.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
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
