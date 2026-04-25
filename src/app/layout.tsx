import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "NIGHTFALL DS | Eficiencia Corporativa",
  description:
    "Tu software no debería ser el freno de tu crecimiento. Automatización B2B y Agentes IA para empresas que necesitan escalar.",
  keywords: [
    "automatización B2B",
    "agentes IA",
    "arquitectura de software",
    "eficiencia empresarial",
  ],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "NIGHTFALL DS | Eficiencia Corporativa",
    description:
      "Tu software no debería ser el freno de tu crecimiento. Automatización B2B y Agentes IA.",
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
              © 2025 NIGHTFALL DS. Ingeniería de Eficiencia Corporativa.
            </p>
            <p className="text-text-tertiary text-xs mt-3">
              Arequipa, Perú — Soporte Global
            </p>
            <p className="mt-3">
              <a
                href="mailto:soporte@nightfallds.lat"
                className="text-accent-gold/80 hover:text-accent-gold text-xs transition-colors"
              >
                soporte@nightfallds.lat
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
