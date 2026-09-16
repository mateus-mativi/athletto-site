import {
  BarChart3,
  CalendarClock,
  ClipboardCheck,
  MessagesSquare,
  ShieldCheck,
  Wallet,
} from "lucide-react";

const FEATURES = [
  {
    icon: Wallet,
    title: "Mensalidades sem dor de cabeça",
    description:
      "Cobranças automáticas via Pix e boleto, controle de inadimplência e conciliação financeira em tempo real.",
  },
  {
    icon: CalendarClock,
    title: "Turmas e agenda de treinos",
    description:
      "Organize horários, professores e categorias. Remanejamentos e reposições em poucos cliques.",
  },
  {
    icon: ClipboardCheck,
    title: "Presença digital",
    description:
      "Chamada pelo celular em campo, com histórico de frequência por aluno e por turma.",
  },
  {
    icon: MessagesSquare,
    title: "Comunicação com os pais",
    description:
      "Avisos, fotos e boletins de desempenho direto no app dos responsáveis — chega de grupo de WhatsApp lotado.",
  },
  {
    icon: BarChart3,
    title: "Relatórios que fazem sentido",
    description:
      "Receita, evasão, ocupação de turmas e evolução dos atletas em painéis simples de entender.",
  },
  {
    icon: ShieldCheck,
    title: "Dados seguros e organizados",
    description:
      "Cadastro de atletas, responsáveis, documentos e atestados médicos centralizados e protegidos.",
  },
];

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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/10"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                <feature.icon size={22} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink-950">
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
