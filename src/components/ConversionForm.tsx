"use client";

import { useState, useRef, useEffect } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ConversionForm() {
  const [formData, setFormData] = useState({
    email: "",
    nameCompany: "",
    problem: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<string[]>([]);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
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
    // Clear field error when user types
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateFields = (): boolean => {
    const newErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Ingresa un correo válido (ej. nombre@empresa.com)";
    }
    if (!formData.nameCompany || formData.nameCompany.trim().length < 2) {
      newErrors.nameCompany = "Ingresa tu nombre y/o empresa";
    }
    if (!formData.problem || formData.problem.trim().length < 10) {
      newErrors.problem = "Describe tu problema con al menos 10 caracteres";
    }

    setFieldErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateFields()) return;

    setStatus("loading");
    setErrors([]);

    // Simular un pequeño retraso para mostrar el spinner y dar feedback visual
    setTimeout(() => {
      setStatus("success");
      
      // Construir el mensaje de WhatsApp
      const phoneNumber = "51997470825";
      const message = `*Nueva Solicitud de Análisis Técnico*%0A%0A*Correo:* ${formData.email}%0A*Nombre/Empresa:* ${formData.nameCompany}%0A*Problema:* ${formData.problem}`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      
      // Abrir WhatsApp en una nueva pestaña
      window.open(whatsappUrl, "_blank");

      // Limpiar el formulario después de 8 segundos
      setTimeout(() => {
        setFormData({ email: "", nameCompany: "", problem: "" });
        setStatus("idle");
        setErrors([]);
      }, 8000);
    }, 800);
  };

  // Extract first name for personalized message
  const firstName = formData.nameCompany.split(" ")[0] || "Cliente";

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
          Solicita una consultoría gratuita y te daremos una solución en 24 horas.
        </p>

        {/* Form */}
        {status !== "success" ? (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-lg mx-auto"
            noValidate
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
                className={`w-full bg-transparent text-text-primary placeholder-text-tertiary border-b ${fieldErrors.email ? "border-red-500" : "border-white/20"} focus:border-accent-gold py-3 px-0 outline-none transition-colors`}
              />
              {fieldErrors.email && (
                <p className="text-red-400 text-xs mt-1 text-left">{fieldErrors.email}</p>
              )}
            </div>

            {/* Name + Company */}
            <div className="relative">
              <input
                type="text"
                name="nameCompany"
                value={formData.nameCompany}
                onChange={handleChange}
                placeholder="Nombre y/o Empresa"
                required
                className={`w-full bg-transparent text-text-primary placeholder-text-tertiary border-b ${fieldErrors.nameCompany ? "border-red-500" : "border-white/20"} focus:border-accent-gold py-3 px-0 outline-none transition-colors`}
              />
              {fieldErrors.nameCompany && (
                <p className="text-red-400 text-xs mt-1 text-left">{fieldErrors.nameCompany}</p>
              )}
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
                className={`w-full bg-transparent text-text-primary placeholder-text-tertiary border ${fieldErrors.problem ? "border-red-500" : "border-white/20"} focus:border-accent-gold py-3 px-3 outline-none transition-colors resize-none rounded-lg`}
              />
              {fieldErrors.problem && (
                <p className="text-red-400 text-xs mt-1 text-left">{fieldErrors.problem}</p>
              )}
            </div>

            {/* Server errors */}
            {errors.length > 0 && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                {errors.map((err, i) => (
                  <p key={i} className="text-red-400 text-sm">{err}</p>
                ))}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-8">
              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full py-4 font-bold text-lg rounded-full transition-all duration-300 shadow-glow hover:shadow-glow hover:shadow-lg ${
                  status === "loading"
                    ? "bg-accent-gold/60 text-dark-bg cursor-not-allowed"
                    : "bg-accent-gold hover:bg-accent-copper text-dark-bg"
                }`}
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Enviando...
                  </span>
                ) : status === "error" ? (
                  "Reintentar Envío"
                ) : (
                  "Solicitar Análisis Técnico"
                )}
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
            <div className="text-6xl mb-6 font-bold text-accent-gold animate-bounce">✓</div>
            <h3 className="text-2xl font-bold text-text-primary mb-3">
              Gracias, {firstName}.
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              Estamos analizando tu caso y te contactaremos en menos de <span className="text-accent-gold font-semibold">24 horas</span>.
            </p>
            <p className="text-text-tertiary text-sm mt-6">
              Revisa tu correo — te enviamos una confirmación con los próximos pasos.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect">
              <span className="text-accent-gold">◆</span>
              <span className="text-xs text-text-secondary">Tu análisis técnico está en camino</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
