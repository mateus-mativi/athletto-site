import { CalendarCheck2, MessageCircleMore, Wallet } from "lucide-react";

const STATS = [
  { value: "R$ 0", label: "para organizar tudo" },
  { value: "R$ 0,30", label: "por cobrança enviada" },
  { value: "0", label: "de fidelidade ou multa" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, rgba(23,184,98,0.35) 0%, rgba(6,18,12,0) 60%)",
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

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-16 md:grid-cols-2 md:items-center md:pb-28 md:pt-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-300">
            Feito para quem dá aula
          </span>

          <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            A gestão que cabe{" "}
            <span className="text-brand-400">no intervalo</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Turmas, presença e mensalidade no celular, entre uma turma e
            outra. O Athletto começa grátis — você paga quando cobra.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#planos"
              className="rounded-full bg-brand-500 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-colors hover:bg-brand-600"
            >
              Criar conta grátis
            </a>
            <a
              href="#como-funciona"
              className="rounded-full border border-white/15 px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Ver como funciona
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-extrabold text-white sm:text-3xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs text-white/50 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-3 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="rounded-2xl bg-white p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-950/40">
                    Turma
                  </p>
                  <p className="text-base font-bold text-ink-950">
                    Sub-11 · Terça e Quinta
                  </p>
                </div>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                  24 alunos
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 rounded-xl bg-brand-50 p-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500 text-white">
                    <CalendarCheck2 size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink-950">
                      Presença de hoje registrada
                    </p>
                    <p className="text-xs text-ink-950/50">
                      22 de 24 presentes
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-ink-950/[0.03] p-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink-950 text-white">
                    <Wallet size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink-950">
                      Mensalidades de outubro
                    </p>
                    <p className="text-xs text-ink-950/50">
                      21 pagas · 3 pendentes
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-ink-950/[0.03] p-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink-950 text-white">
                    <MessageCircleMore size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink-950">
                      Aviso enviado aos responsáveis
                    </p>
                    <p className="text-xs text-ink-950/50">
                      &ldquo;Treino de sexta transferido&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-xl shadow-black/20 sm:block">
            <p className="text-xs font-semibold text-ink-950/40">
              Receita do mês
            </p>
            <p className="text-xl font-extrabold text-brand-600">
              R$ 18.420
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
