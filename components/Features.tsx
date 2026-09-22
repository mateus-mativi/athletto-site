import {
  CalendarClock,
  ClipboardCheck,
  type LucideIcon,
  MessageCircleMore,
  ReceiptText,
  UserPlus,
  Wallet,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: ClipboardCheck,
    title: "Chamada",
    description: "Um toque por aluno, direto do celular.",
  },
  {
    icon: CalendarClock,
    title: "Turmas e horários",
    description: "Organize por dia, horário e nível.",
  },
  {
    icon: UserPlus,
    title: "Cadastro de alunos",
    description: "Traga a planilha inteira de uma vez.",
  },
  {
    icon: Wallet,
    title: "Mensalidades",
    description: "Valor e vencimento para cada aluno.",
  },
  {
    icon: MessageCircleMore,
    title: "Cobrança no WhatsApp",
    description: "Link de pagamento enviado no dia certo.",
  },
  {
    icon: ReceiptText,
    title: "Recebimentos",
    description: "Quem pagou, quem deve, quanto entrou.",
  },
];

export function Features() {
  return (
    <section id="funcionalidades" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-600">
            Tudo o que dá para fazer
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-ink-950 sm:text-4xl">
            O que dá para fazer no Athletto
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                <feature.icon size={24} />
              </span>
              <h3 className="mt-6 text-lg font-bold text-ink-950">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-950/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
