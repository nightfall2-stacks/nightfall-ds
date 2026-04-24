"use client";

import { useState, useRef, useEffect } from "react";

export function ConversionForm() {
  const [formData, setFormData] = useState({
    email: "",
    nameCompany: "",
    problem: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-up");
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ email: "", nameCompany: "", problem: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="w-full bg-dark-bg py-section-gap px-6">
      <div
        ref={containerRef}
        className="max-w-2xl mx-auto text-center opacity-0"
      >
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-black text-text-primary mb-6 leading-tight">
          Escala tus operaciones hoy.
        </h2>
        <p className="text-lg text-text-secondary mb-16">
          Solicita un mapa de eficiencia digital diseñado por nuestros
          arquitectos de software.
        </p>

        {/* Form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-lg mx-auto"
          >
            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="correo.corporativo@empresa.com"
                required
                className="w-full bg-transparent text-text-primary placeholder-text-tertiary border-b border-white/20 focus:border-accent-gold py-3 px-0 outline-none transition-colors"
              />
            </div>

            {/* Name + Company */}
            <div className="relative">
              <input
                type="text"
                name="nameCompany"
                value={formData.nameCompany}
                onChange={handleChange}
                placeholder="Nombre y Empresa"
                required
                className="w-full bg-transparent text-text-primary placeholder-text-tertiary border-b border-white/20 focus:border-accent-gold py-3 px-0 outline-none transition-colors"
              />
            </div>

            {/* Problem Text Area */}
            <div className="relative">
              <textarea
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                placeholder="Cuéntanos tu problema, nosotros lo solucionamos..."
                required
                rows={4}
                className="w-full bg-transparent text-text-primary placeholder-text-tertiary border border-white/20 focus:border-accent-gold py-3 px-3 outline-none transition-colors resize-none rounded-lg"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button
                type="submit"
                className="w-full py-4 bg-accent-gold hover:bg-accent-copper text-dark-bg font-bold text-lg rounded-full transition-all duration-300 shadow-glow hover:shadow-glow hover:shadow-lg"
              >
                Solicitar Análisis Técnico
              </button>
            </div>

            {/* Trust signal */}
            <p className="text-xs text-text-tertiary mt-6">
              Respuesta dentro de 24 horas. Nos comprometemos con tus objetivos.
            </p>
          </form>
        ) : (
          /* Success state */
          <div className="max-w-lg mx-auto py-12 text-center">
            <div className="text-6xl mb-6 font-bold text-accent-gold">✓</div>
            <h3 className="text-2xl font-bold text-text-primary mb-3">
              ¡Solicitud enviada!
            </h3>
            <p className="text-text-tertiary">
              Nuestro equipo en Arequipa revisará tu caso y se pondrá en
              contacto dentro de 24 horas.
            </p>
            <p className="text-text-tertiary text-sm mt-6">
              Mientras tanto, revisamos tu infraestructura...
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
