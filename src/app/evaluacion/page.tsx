import { ConversionForm } from "@/components/ConversionForm";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solicitar Evaluación Técnica | NIGHTFALL DS",
  description: "Solicita una consultoría técnica gratuita para escalar tus operaciones B2B con agentes IA.",
};

export default function EvaluacionPage() {
  return (
    <main className="min-h-[80vh] flex flex-col justify-center relative w-full pt-16 md:pt-0">
      {/* Botón de retroceso */}
      <div className="absolute top-6 left-6 md:top-8 md:left-12 z-20">
        <Link 
          href="/"
          className="group flex items-center gap-2 text-text-tertiary hover:text-accent-gold transition-colors"
        >
          <span className="transform transition-transform group-hover:-translate-x-1">←</span>
          <span className="text-sm font-medium">Volver al inicio</span>
        </Link>
      </div>

      {/* Decorative background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent-gold/5 via-accent-copper/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full flex-grow flex items-center justify-center">
        <ConversionForm />
      </div>
    </main>
  );
}
