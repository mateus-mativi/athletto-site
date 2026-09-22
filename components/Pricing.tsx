import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Grátis",
    price: "R$ 0",
    period: "/mês",
    costLine: "Taxa por pagamento recebido · R$ 0,30 por cobrança enviada",
    description: "Para organizar tudo sem mensalidade.",
    includesNote: null,
    features: [
      "Até 50 alunos",
      "Turmas ilimitadas",
      "Pagamento por Pix ou cartão, com taxa por transação",
      "Cobrança por WhatsApp ou e-mail, paga por mensagem enviada",
      "Painel com o resumo do mês",
      "Suporte por ticket",
    ],
    highlighted: false,
    cta: "Criar conta grátis",
  },
  {
    name: "Básico",
    price: "R$ 69,90",
    period: "/mês",
    costLine: "Taxa por transação menor · custo por mensagem a definir",
    description: "Para quem cobra todo mês.",
    includesNote: "Tudo do Grátis, e mais:",
    features: [
      "Até 200 alunos",
      "Mais de uma pessoa na gestão da conta",
      "Painel completo do mês",
      "Acompanhamento individual de cada aluno",
      "Suporte por ticket ou e-mail",
    ],
    highlighted: true,
    cta: "Criar conta grátis",
  },
  {
    name: "Premium",
    price: "R$ 219,90",
    period: "/mês",
    costLine: "A menor taxa por transação · custo por mensagem a definir",
    description: "Para quem tem equipe e mais de uma unidade.",
    includesNote: "Tudo do Básico, e mais:",
    features: [
      "Até 500 alunos",
      "Várias unidades",
      "A marca da sua escola nas mensagens",
      "Relatórios para exportar",
      "Gerente de conta dedicado",
      "Suporte por WhatsApp, ticket ou e-mail",
      "Acesso antecipado a novidades",
    ],
    highlighted: false,
    cta: "Falar com a gente",
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
            Comece de graça. Cresça no seu tempo.
          </h2>
          <p className="mt-4 text-lg text-white/60">
            O plano Grátis não tem prazo pra acabar. Sem cartão, sem
            fidelidade — você muda ou cancela quando quiser.
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

              <p
                className={`mt-2 text-xs font-medium ${
                  plan.highlighted ? "text-ink-950/50" : "text-white/40"
                }`}
              >
                {plan.costLine}
              </p>

              {plan.includesNote && (
                <p
                  className={`mt-6 text-xs font-bold uppercase tracking-wide ${
                    plan.highlighted ? "text-brand-600" : "text-brand-400"
                  }`}
                >
                  {plan.includesNote}
                </p>
              )}

              <ul
                className={`flex-1 space-y-3 ${plan.includesNote ? "mt-3" : "mt-7"}`}
              >
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

        <p className="mt-8 text-center text-sm text-white/50">
          Sem fidelidade. Você muda ou cancela quando quiser.
        </p>
      </div>
    </section>
  );
}
