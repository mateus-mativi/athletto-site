"use client";

import { useEffect, useRef, type ReactNode } from "react";
import {
  BarChart3,
  CalendarClock,
  ClipboardCheck,
  type LucideIcon,
  MessagesSquare,
  ShieldCheck,
  Wallet,
} from "lucide-react";

const REVENUE_BARS = [
  { label: "Mai", value: 55 },
  { label: "Jun", value: 68 },
  { label: "Jul", value: 62 },
  { label: "Ago", value: 80 },
  { label: "Set", value: 92 },
  { label: "Out", value: 100 },
];

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  span: string;
};

const FEATURES: Feature[] = [
  {
    icon: BarChart3,
    title: "Relatórios que fazem sentido",
    description:
      "Receita, evasão, ocupação de turmas e evolução dos atletas em painéis simples de entender.",
    span: "col-span-1 sm:col-span-2 lg:col-span-4 lg:row-span-2",
  },
  {
    icon: CalendarClock,
    title: "Turmas e agenda de treinos",
    description:
      "Organize horários, professores e categorias. Remanejamentos e reposições em poucos cliques.",
    span: "col-span-1 lg:col-span-2",
  },
  {
    icon: ClipboardCheck,
    title: "Presença digital",
    description:
      "Chamada pelo celular em campo, com histórico de frequência por aluno e por turma.",
    span: "col-span-1 lg:col-span-2",
  },
  {
    icon: ShieldCheck,
    title: "Dados seguros e organizados",
    description:
      "Cadastro de atletas, responsáveis, documentos e atestados médicos centralizados e protegidos.",
    span: "col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    icon: MessagesSquare,
    title: "Comunicação com os pais",
    description:
      "Avisos, fotos e boletins de desempenho direto no app dos responsáveis — chega de grupo de WhatsApp lotado.",
    span: "col-span-1 sm:col-span-2 lg:col-span-4",
  },
  {
    icon: Wallet,
    title: "Mensalidades sem dor de cabeça",
    description:
      "Cobranças automáticas via Pix e boleto, controle de inadimplência e conciliação financeira em tempo real.",
    span: "col-span-1 lg:col-span-2",
  },
];

function BentoItem({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = item.getBoundingClientRect();
      item.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      item.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    item.addEventListener("mousemove", handleMouseMove);
    return () => item.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={itemRef}
      className={`group relative min-h-[180px] overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/10 ${className ?? ""}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(240px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(23,184,98,0.14), transparent 70%)",
        }}
      />
      <div className="relative flex h-full flex-col">{children}</div>
    </div>
  );
}

export function Features() {
  return (
    <section id="funcionalidades" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-600">
            Funcionalidades
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-ink-950 sm:text-4xl">
            Tudo que a sua escolinha precisa, em um só sistema
          </h2>
          <p className="mt-4 text-lg text-ink-950/60">
            Substitua planilhas soltas, cadernos de chamada e grupos de
            WhatsApp por uma plataforma feita para o dia a dia de quem forma
            atletas.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[minmax(180px,auto)]">
          {FEATURES.map((feature, index) => (
            <BentoItem key={feature.title} className={feature.span}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                <feature.icon size={22} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink-950">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-950/60">
                {feature.description}
              </p>

              {index === 0 && (
                <div className="mt-6 flex flex-1 items-end gap-2.5 rounded-xl bg-ink-950/[0.03] p-4">
                  {REVENUE_BARS.map((bar) => (
                    <div
                      key={bar.label}
                      className="flex flex-1 flex-col items-center gap-2"
                    >
                      <div className="flex h-24 w-full items-end overflow-hidden rounded-md bg-brand-500/10">
                        <div
                          className="w-full rounded-md bg-gradient-to-t from-brand-600 to-brand-400"
                          style={{ height: `${bar.value}%` }}
                        />
                      </div>
                      <span className="text-[11px] font-medium text-ink-950/40">
                        {bar.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </BentoItem>
          ))}
        </div>
      </div>
    </section>
  );
}
