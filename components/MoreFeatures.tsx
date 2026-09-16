import {
  Activity,
  Bell,
  Building2,
  FileCheck,
  Trophy,
  UserCog,
} from "lucide-react";

const MORE_FEATURES = [
  {
    icon: Trophy,
    title: "Eventos e torneios",
    description:
      "Organize campeonatos internos, torneios e amistosos com inscrição e chaveamento simplificados.",
  },
  {
    icon: Activity,
    title: "Avaliação de desempenho",
    description:
      "Fichas técnicas, testes físicos e evolução individual de cada atleta ao longo das temporadas.",
  },
  {
    icon: UserCog,
    title: "Gestão de professores",
    description:
      "Escalas, atribuição de turmas e histórico de atuação de cada membro da comissão técnica.",
  },
  {
    icon: Bell,
    title: "Notificações automáticas",
    description:
      "Lembretes de mensalidade, treino e eventos direto no WhatsApp e no app dos responsáveis.",
  },
  {
    icon: FileCheck,
    title: "Contratos e documentos",
    description:
      "Matrícula, termo de uso de imagem e atestados assinados digitalmente, sem papelada.",
  },
  {
    icon: Building2,
    title: "Múltiplas unidades",
    description:
      "Gerencie mais de uma unidade ou filial da escolinha em um único painel centralizado.",
  },
];

export function MoreFeatures() {
  return (
    <section id="mais-funcionalidades" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-600">
            E tem mais
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-ink-950 sm:text-4xl">
            Funcionalidades para cada detalhe da escolinha
          </h2>
          <p className="mt-4 text-lg text-ink-950/60">
            Do primeiro contrato ao último torneio da temporada, o Athletto
            acompanha cada etapa da gestão da sua escolinha.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MORE_FEATURES.map((feature) => (
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
