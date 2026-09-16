import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Iniciante",
    price: "R$ 89",
    period: "/mês",
    description: "Para escolinhas com até 60 alunos.",
    features: [
      "Até 60 alunos cadastrados",
      "Gestão de turmas e horários",
      "Cobrança de mensalidades via Pix",
      "Chamada digital",
    ],
    highlighted: false,
    cta: "Começar teste grátis",
  },
  {
    name: "Profissional",
    price: "R$ 179",
    period: "/mês",
    description: "Para escolinhas em crescimento.",
    features: [
      "Até 250 alunos cadastrados",
      "Tudo do plano Iniciante",
      "App de comunicação para os pais",
      "Relatórios financeiros e de evasão",
      "Suporte prioritário via WhatsApp",
    ],
    highlighted: true,
    cta: "Começar teste grátis",
  },
  {
    name: "Rede de escolinhas",
    price: "Sob consulta",
    period: "",
    description: "Para redes com múltiplas unidades.",
    features: [
      "Alunos ilimitados",
      "Tudo do plano Profissional",
      "Gestão multi-unidade",
      "Onboarding e migração assistidos",
      "Gerente de conta dedicado",
    ],
    highlighted: false,
    cta: "Falar com vendas",
  },
];

export function Pricing() {
  return (
    <section id="planos" className="bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-400">
            Planos
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Um plano para cada tamanho de escolinha
          </h2>
          <p className="mt-4 text-lg text-white/60">
            14 dias grátis em qualquer plano, sem cartão de crédito. Cancele
            quando quiser.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-3xl p-8 ${
                plan.highlighted
                  ? "border-2 border-brand-400 bg-white shadow-2xl shadow-brand-500/20"
                  : "border border-white/10 bg-white/[0.03]"
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white">
                  Mais popular
                </span>
              )}
              <h3
                className={`text-lg font-bold ${
                  plan.highlighted ? "text-ink-950" : "text-white"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-1 text-sm ${
                  plan.highlighted ? "text-ink-950/60" : "text-white/50"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span
                  className={`text-4xl font-black ${
                    plan.highlighted ? "text-ink-950" : "text-white"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={
                    plan.highlighted ? "text-ink-950/50" : "text-white/50"
                  }
                >
                  {plan.period}
                </span>
              </div>

              <ul className="mt-7 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={18}
                      className={`mt-0.5 shrink-0 ${
                        plan.highlighted ? "text-brand-600" : "text-brand-400"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-ink-950/80" : "text-white/70"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-brand-500 text-white hover:bg-brand-600"
                    : "border border-white/20 text-white hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
