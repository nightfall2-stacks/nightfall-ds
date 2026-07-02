"use client";

import { useState, useRef, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export function ConversionForm() {
  const [state, handleSubmit] = useForm("xbdvprvr");
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
    <section id="conversion-form" className="w-full bg-[#0A0A0A] py-24 px-6 min-h-[85vh] flex flex-col justify-center">
      <div
        ref={containerRef}
        className="max-w-2xl mx-auto text-center opacity-0"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-6 leading-tight tracking-tight">
          Escala tus operaciones hoy.
        </h2>
        <p className="text-lg text-zinc-400 mb-12">
          Solicita una consultoría gratuita y te daremos una solución en 24 horas.
        </p>

        {/* Form */}
        {!state.succeeded ? (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-lg mx-auto bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800"
          >
            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="correo.corporativo@empresa.com"
                required
                className="w-full bg-zinc-900 text-zinc-100 placeholder-zinc-500 border border-zinc-800 rounded-lg py-3 px-4 outline-none focus:ring-1 focus:ring-zinc-500 transition-shadow"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400 mt-1 text-left" />
            </div>

            {/* Name + Company */}
            <div className="relative">
              <input
                type="text"
                name="nameCompany"
                placeholder="Nombre y/o Empresa"
                required
                className="w-full bg-zinc-900 text-zinc-100 placeholder-zinc-500 border border-zinc-800 rounded-lg py-3 px-4 outline-none focus:ring-1 focus:ring-zinc-500 transition-shadow"
              />
              <ValidationError prefix="Nombre" field="nameCompany" errors={state.errors} className="text-xs text-red-400 mt-1 text-left" />
            </div>

            {/* Problem Text Area */}
            <div className="relative">
              <textarea
                name="problem"
                placeholder="Cuéntanos tu problema, nosotros lo solucionamos..."
                required
                rows={4}
                className="w-full bg-zinc-900 text-zinc-100 placeholder-zinc-500 border border-zinc-800 rounded-lg py-3 px-4 outline-none focus:ring-1 focus:ring-zinc-500 transition-shadow resize-none"
              />
              <ValidationError prefix="Problema" field="problem" errors={state.errors} className="text-xs text-red-400 mt-1 text-left" />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={state.submitting}
                className={`w-full py-3.5 font-semibold text-sm rounded-lg transition-all duration-200 ${
                  state.submitting
                    ? "bg-zinc-100/50 text-zinc-900 cursor-not-allowed"
                    : "bg-zinc-100 hover:bg-white text-zinc-900"
                }`}
              >
                {state.submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  "Solicitar Análisis Técnico"
                )}
              </button>
            </div>

            {/* Trust signal */}
            <p className="text-xs text-zinc-500 mt-4">
              Respuesta dentro de 24 horas. Nos comprometemos con tus objetivos.
            </p>
          </form>
        ) : (
          /* Success state */
          <div className="max-w-lg mx-auto py-12 text-center fade-up bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-zinc-50 mb-3">
              Gracias por escribirnos.
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Estamos analizando tu caso y te contactaremos en menos de <span className="text-zinc-100 font-semibold">24 horas</span>.
            </p>
            <p className="text-zinc-500 text-sm">
              Te daremos una respuesta concreta y sin compromiso.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
