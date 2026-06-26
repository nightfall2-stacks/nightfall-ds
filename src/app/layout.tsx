import type { Metadata } from "next";
import "../styles/globals.css";
import { Logo } from "@/components/Icons";

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
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
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
        <div className="relative min-h-screen w-full overflow-hidden">
          {/* Global Dotted Grid Background */}
          <div className="absolute inset-0 bg-grid-dots pointer-events-none opacity-60" />

          {/* Global Ambient Glows */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-accent-gold/4 rounded-full blur-[110px] animate-float-slow-1" />
            <div className="absolute top-[40%] right-[2%] w-[550px] h-[550px] bg-accent-copper/3 rounded-full blur-[130px] animate-float-slow-2" />
            <div className="absolute top-[75%] left-[8%] w-[500px] h-[500px] bg-accent-gold/3 rounded-full blur-[125px] animate-float-slow-3" />
          </div>

          <div className="relative z-10">
            {children}

            {/* Footer */}
            <footer className="bg-dark-bg border-t border-white/5 py-12 px-6">
              <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
                <Logo width={70} height={32} className="mb-4 opacity-80 hover:opacity-100 transition-opacity" />
                <p className="text-text-tertiary text-sm">
                  © 2025 NIGHTFALL DS. Ingeniería de Eficiencia Corporativa.
                </p>
                <p className="text-text-tertiary text-xs mt-2 font-mono tracking-wide">
                  RUC: 20615956491
                </p>
                <p className="text-text-tertiary text-xs mt-2">
                  Arequipa, Perú — Soporte Global
                </p>
                <div className="mt-3 flex items-center justify-center gap-4">
                  <a
                    href="mailto:ventas@nightfallds.lat"
                    className="text-accent-gold/80 hover:text-accent-gold text-xs transition-colors"
                  >
                    ventas@nightfallds.lat
                  </a>
                  <span className="text-white/20 text-xs">|</span>
                  <a
                    href="mailto:contacto@nightfallds.lat"
                    className="text-accent-gold/80 hover:text-accent-gold text-xs transition-colors"
                  >
                    soporte@nightfallds.lat
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
