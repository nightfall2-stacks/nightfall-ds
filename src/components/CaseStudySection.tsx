"use client";

import { useEffect, useRef, useState } from "react";

const caseStudy = {
  client: "TransCarga",
  industry: "Logística de última milla",
  duration: "14 semanas",
  stack: ["Node.js", "PostgreSQL", "PostGIS", "Redis", "Next.js", "React Native", "AWS ECS", "Terraform"],
  problem: {
    title: "Tasa de entrega en primer intento: 68%",
    description:
      "TransCarga opera 340 vehículos con 4,000–6,000 entregas diarias. Cada reintento costaba entre $3.50–$7.00 USD. La brecha contra el estándar de la industria (85-90%) representaba ~$42,000 USD mensuales en costos evitables.",
    bullets: [
      "Monolito PHP 5.6 — query de entregas por zona: 14 segundos",
      "MySQL 5.5 sin réplicas, tabla de 12M de registros, un solo índice",
      "Rutas calculadas una vez al día — sin reasignación en tiempo real",
      "Deploy manual por SSH — MTTR promedio: 3.2 horas",
      "Cero observabilidad: sin logs, sin métricas, sin alertas",
    ],
    solution: [
      "Strangler fig pattern — servicios nuevos alrededor del monolito",
      "PostgreSQL 15 + PostGIS para queries geoespaciales (23ms vs 14s)",
      "Redis + Bull para reasignación de rutas en tiempo real (<30s)",
      "CI/CD con GitHub Actions — deploy automático en 8 minutos",
      "Monitoreo con CloudWatch + Grafana — MTTR reducido a 12 min",
    ],
  },
  metrics: [
    { label: "Query entregas/zona", before: "14 seg", after: "23 ms", change: "99.7%" },
    { label: "Deploy a producción", before: "~2 hrs", after: "8 min", change: "93%" },
    { label: "Entrega 1er intento", before: "68%", after: "87.3%", change: "+19.3pts" },
    { label: "Ahorro mensual", before: "—", after: "$38.4K", change: "ROI 2.8m" },
  ],
  // Terraform config snippet for the code window
  codeSnippet: `# infra/main.tf — TransCarga Production

provider "aws" {
  region = "us-east-1"
}

module "ecs_cluster" {
  source       = "./modules/ecs"
  cluster_name = "transcarga-prod"
  
  services = {
    api_rutas = {
      image    = "transcarga/api-rutas:latest"
      cpu      = 512
      memory   = 1024
      replicas = 3
      health_check = "/health"
    }
    api_entregas = {
      image    = "transcarga/api-entregas:latest"
      cpu      = 256
      memory   = 512
      replicas = 2
      health_check = "/health"
    }
    worker_optimizacion = {
      image    = "transcarga/worker:latest"
      cpu      = 1024
      memory   = 2048
      replicas = 1
    }
  }
}

module "database" {
  source         = "./modules/rds"
  engine         = "postgres"
  engine_version = "15.4"
  instance_class = "db.r6g.large"
  
  extensions = ["postgis", "pg_stat_statements"]
  
  backup_retention = 14
  multi_az         = true
}

module "cache" {
  source     = "./modules/elasticache"
  engine     = "redis"
  node_type  = "cache.r6g.large"
  num_nodes  = 2
}`,
};

type View = "problem" | "solution";

export function CaseStudySection() {
  const sectionRef = useRef(null);
  const [view, setView] = useState<View>("problem");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-up");
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const bullets = view === "problem" ? caseStudy.problem.bullets : caseStudy.problem.solution;

  return (
    <section className="relative w-full bg-[#0A0A0A] py-section-gap px-6">
      <div ref={sectionRef} className="max-w-6xl mx-auto opacity-0">
        {/* Section heading */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 w-fit mx-auto mb-6">
            <span className="text-xs font-medium text-zinc-400 tracking-wide">
              Caso de estudio
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4">
            Cómo lo resolvimos.
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            No mostramos logos. Mostramos diagnóstico, arquitectura y resultados
            medidos en producción.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left column — text */}
          <div>
            {/* Client header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-zinc-50">
                  {caseStudy.client}
                </h3>
                <span className="px-2.5 py-0.5 text-xs font-medium text-zinc-400 border border-zinc-800 rounded-full">
                  {caseStudy.industry}
                </span>
              </div>
              <p className="text-sm text-zinc-500">
                {caseStudy.duration} · {caseStudy.stack.slice(0, 4).join(" · ")}
              </p>
            </div>

            {/* Problem description */}
            <p className="text-zinc-400 leading-relaxed mb-6">
              {caseStudy.problem.description}
            </p>

            {/* Toggle */}
            <div className="flex gap-1 p-1 bg-zinc-900/80 border border-zinc-800 rounded-lg w-fit mb-6">
              <button
                onClick={() => setView("problem")}
                className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
                  view === "problem"
                    ? "bg-zinc-800 text-zinc-100"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                Diagnóstico
              </button>
              <button
                onClick={() => setView("solution")}
                className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
                  view === "solution"
                    ? "bg-zinc-800 text-zinc-100"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                Arquitectura
              </button>
            </div>

            {/* Bullet list */}
            <ul className="space-y-3">
              {bullets.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    view === "problem" ? "bg-zinc-600" : "bg-emerald-500"
                  }`} />
                  <span className="text-sm text-zinc-400 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-zinc-800/50">
              {caseStudy.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-[11px] text-zinc-600 uppercase tracking-wider mb-1">
                    {m.label}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-zinc-600 line-through">
                      {m.before}
                    </span>
                    <span className="text-lg font-bold text-zinc-100">
                      {m.after}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-emerald-500">
                    {m.change}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Code editor mock */}
          <div className="code-window sticky top-8">
            {/* macOS-style title bar */}
            <div className="code-window-header">
              <div className="code-window-dot bg-[#FF5F57]" />
              <div className="code-window-dot bg-[#FEBC2E]" />
              <div className="code-window-dot bg-[#28C840]" />
              <span className="ml-3 text-[11px] text-zinc-500 font-mono">
                infra/main.tf
              </span>
            </div>

            {/* Code content */}
            <div className="p-5 overflow-x-auto max-h-[520px] overflow-y-auto">
              <pre className="font-mono text-xs leading-relaxed">
                {caseStudy.codeSnippet.split("\n").map((line, i) => (
                  <div key={i} className="flex">
                    <span className="w-8 text-right text-zinc-700 select-none flex-shrink-0 mr-4">
                      {i + 1}
                    </span>
                    <span
                      className={
                        line.startsWith("#")
                          ? "text-zinc-600"
                          : line.includes("=")
                          ? "text-zinc-300"
                          : line.includes("{") || line.includes("}")
                          ? "text-zinc-500"
                          : "text-zinc-400"
                      }
                    >
                      {line || " "}
                    </span>
                  </div>
                ))}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
