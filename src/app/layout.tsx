import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "NIGHTFALL DS | Eficiencia Corporativa",
  description:
    "Arquitecturas para eliminar cuellos de botella. Automatización B2B y Agentes IA para empresas que necesitan escalar.",
  keywords: [
    "automatización B2B",
    "agentes IA",
    "arquitectura de software",
    "eficiencia empresarial",
  ],
  openGraph: {
    title: "NIGHTFALL DS | Eficiencia Corporativa",
    description:
      "Arquitecturas para eliminar cuellos de botella. Automatización B2B y Agentes IA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-dark-bg text-text-primary">
        {children}

        {/* Footer */}
        <footer className="bg-dark-bg border-t border-white/5 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-text-tertiary text-sm">
              © 2024 NIGHTFALL DS. Ingeniería de Eficiencia Corporativa.
            </p>
            <p className="text-text-tertiary text-xs mt-3">
              Arequipa, Perú — Soporte Global
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
