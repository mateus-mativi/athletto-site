import {
  type LucideIcon,
  Settings2,
  Smartphone,
  UserPlus,
} from "lucide-react";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
};

const STEPS: Step[] = [
  {
    icon: UserPlus,
    title: "Cadastre sua escolinha",
    description:
      "Importe alunos, responsáveis e turmas em minutos — ou comece do zero com nosso time te ajudando.",
    benefits: [
      "Importação de alunos e responsáveis em minutos",
      "Time de suporte te ajuda na configuração",
      "Sem planilhas soltas ou papelada",
    ],
  },
  {
    icon: Settings2,
    title: "Configure turmas e mensalidades",
    description:
      "Defina categorias, horários e planos de cobrança. O Athletto cuida dos lembretes e das cobranças automáticas.",
    benefits: [
      "Categorias, horários e professores personalizáveis",
      "Cobrança automática via Pix e boleto",
      "Lembretes de vencimento enviados sozinhos",
    ],
  },
  {
    icon: Smartphone,
    title: "Gerencie o dia a dia em campo",
    description:
      "Faça chamada, envie avisos e acompanhe pagamentos pelo celular, direto do campo ou de casa.",
    benefits: [
      "Chamada digital pelo celular, direto do campo",
      "Avisos e comunicados para os responsáveis",
      "Pagamentos acompanhados em tempo real",
    ],
  },
];

function StepCard({ icon: Icon, title, description, benefits }: Step) {
  return (
    <div className="group relative rounded-2xl border border-black/5 bg-white p-6 text-ink-950 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-brand-400/50 hover:bg-brand-50/40 hover:shadow-lg hover:shadow-brand-500/10">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-bold text-ink-950">{title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-ink-950/60">
        {description}
      </p>
      <ul className="space-y-3">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-3">
            <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-500/20">
              <div className="h-2 w-2 rounded-full bg-brand-500" />
            </div>
            <span className="text-sm text-ink-950/60">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-brand-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-600">
            Como funciona
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-ink-950 sm:text-4xl">
            No ar em três passos
          </h2>
        </div>

        <div className="relative mx-auto mt-14 w-full">
          <div
            aria-hidden="true"
            className="absolute left-[16.6667%] top-1/2 hidden h-px w-[66.6667%] -translate-y-1/2 bg-ink-950/10 md:block"
          />
          <div className="relative hidden grid-cols-3 md:grid">
            {STEPS.map((step, index) => (
              <div
                key={step.title}
                className="flex h-8 w-8 items-center justify-center justify-self-center rounded-full bg-ink-950 text-sm font-bold text-white ring-4 ring-brand-50"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <StepCard key={step.title} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
