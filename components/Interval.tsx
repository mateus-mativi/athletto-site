import { DoorOpen, MessageCircleMore, CircleCheckBig } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MOMENTS = [
  {
    icon: DoorOpen,
    title: "O próximo aluno já chegou",
    description:
      "Enquanto a turma anterior sai, o de trás já está na porta. A chamada leva um toque — sobra tempo pra cumprimentar todo mundo.",
    span: "lg:col-span-2",
  },
  {
    icon: MessageCircleMore,
    title: "A mensagem que ficou pra depois",
    description:
      "Aquele pai perguntou do boleto ontem. Hoje a cobrança já saiu sozinha, com o link, no horário certo.",
    span: "lg:col-span-2",
  },
  {
    icon: CircleCheckBig,
    title: "Quem ainda não pagou",
    description:
      "Antes de fechar a sala, um olhar rápido mostra quem está em dia. Sem abrir o caderno.",
    span: "lg:col-span-2",
  },
];

export function Interval() {
  return (
    <section id="intervalo" className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 100%, rgba(23,184,98,0.35) 0%, rgba(6,18,12,0) 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-400">
            O intervalo
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Você tem dez minutos até a próxima turma.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Nesse tempo você arruma a sala, responde três mensagens e tenta
            lembrar quem ainda não pagou. O Athletto cuida disso com você.
          </p>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-5 lg:grid-cols-6">
          {MOMENTS.map((moment) => (
            <Card
              key={moment.title}
              className={`relative overflow-hidden border-white/10 bg-white/[0.03] shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/10 ${moment.span}`}
            >
              <CardContent className="pt-6">
                <div className="relative flex size-12 items-center justify-center rounded-full border border-brand-400/20 before:absolute before:-inset-2 before:rounded-full before:border before:border-brand-400/10">
                  <moment.icon className="size-5 text-brand-400" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">
                  {moment.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {moment.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
