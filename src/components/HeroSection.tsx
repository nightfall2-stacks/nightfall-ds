"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Icons";
import { CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.4.1-.3.6-1.6-.1-3.3 0 0-1.2-.4-3.9 1.4a12.3 12.3 0 0 0-7 0C6 2.7 4.8 3.1 4.8 3.1c-.7 1.7-.2 3-.1 3.3-1 .9-1.5 2-1.5 3.4 0 5 3 6.2 6 6.5-.4.4-.7 1.1-.8 2.1-.7.3-2.5.9-3.6-1-1.1-1.9-3-2-3-2-1-.1-.1.1-.1.1 1.3.2 2 1.6 2 1.6 1.1 1.9 2.9 1.3 3.6 1 .1 1 .5 1.6.8 2.1v4" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, handleSubmit] = useForm("xbdvprvr");

  return (
    <>
      <section className="relative w-full min-h-[85vh] bg-[#0A0A0A] overflow-hidden flex flex-col justify-center">
        {/* Top Navbar */}
        <header className="absolute top-0 left-0 right-0 z-20 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo width={70} height={32} />
            <span className="hidden sm:block text-zinc-50 font-bold text-lg tracking-wider font-mono">
              NIGHTFALL DS
            </span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2 rounded-full border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-zinc-100 text-sm font-semibold transition-all duration-200"
          >
            Iniciar Evaluación
          </button>
        </header>

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6 fade-down mt-16">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 text-orange-400/90 bg-orange-500/5 w-fit mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span className="text-xs font-medium tracking-wide">
              Ingeniería de Software de Alto Rendimiento
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-50 leading-[1.1] tracking-tight">
            Lo que tu.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600">
              Arquitectura que escala.
            </span>
            <br />
            <span className="text-zinc-500">Sin deuda técnica oculta.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
            No somos una agencia. Construimos sistemas B2B desde cero con un
            stack definido: Next.js, Node, PostgreSQL, infraestructura en la
            nube. Tests automatizados, deploys reproducibles, código que es tuyo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 bg-zinc-100 hover:bg-white text-zinc-900 font-semibold text-sm rounded-full transition-all duration-200"
            >
              Agendar revisión de arquitectura
              <span className="ml-2">→</span>
            </button>
            <Link
              href="#stack"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-zinc-100 font-semibold text-sm rounded-full transition-all duration-200"
            >
              Ver nuestro stack
            </Link>
          </div>

          <p className="text-xs text-zinc-600">
            Con solo 30 min con nuestro equipo técnico.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8 pt-4">
            <a href="#" className="text-zinc-500 hover:text-zinc-200 transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-200 transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href="https://www.facebook.com/people/Nightfall-DS/61561271153801/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-200 transition-colors">
              <FacebookIcon size={20} />
            </a>
          </div>
        </div>

        {/* Bottom border */}
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
          <div className="w-full max-w-md bg-[#0A0A0A] border border-zinc-800 rounded-2xl p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              ✕
            </button>

            {state.succeeded ? (
              <div className="text-center py-10 fade-down">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <p className="text-zinc-100 font-medium">
                  Gracias. Te daremos una respuesta en las siguientes 24 horas.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-zinc-50 mb-2">Iniciar Evaluación</h3>
                  <p className="text-sm text-zinc-400">
                    Cuéntanos sobre tu infraestructura o proyecto actual.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-zinc-400 mb-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-zinc-900 text-zinc-100 border border-zinc-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-shadow"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-400 mt-1" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-zinc-400 mb-1">
                      Correo electrónico corporativo
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-zinc-900 text-zinc-100 border border-zinc-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-shadow"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400 mt-1" />
                  </div>

                  <div>
                    <label htmlFor="details" className="block text-xs font-medium text-zinc-400 mb-1">
                      Detalles del proyecto
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      required
                      rows={4}
                      className="w-full bg-zinc-900 text-zinc-100 border border-zinc-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-shadow resize-none"
                    ></textarea>
                    <ValidationError prefix="Details" field="details" errors={state.errors} className="text-xs text-red-400 mt-1" />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full mt-4 bg-zinc-100 hover:bg-white text-zinc-900 font-semibold text-sm rounded-lg px-4 py-2.5 transition-all duration-200 disabled:opacity-50"
                  >
                    {state.submitting ? "Enviando..." : "Enviar"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
