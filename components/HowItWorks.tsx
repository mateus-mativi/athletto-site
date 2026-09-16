const STEPS = [
  {
    number: "01",
    title: "Cadastre sua escolinha",
    description:
      "Importe alunos, responsáveis e turmas em minutos — ou comece do zero com nosso time te ajudando.",
  },
  {
    number: "02",
    title: "Configure turmas e mensalidades",
    description:
      "Defina categorias, horários e planos de cobrança. O Athletto cuida dos lembretes e das cobranças automáticas.",
  },
  {
    number: "03",
    title: "Gerencie o dia a dia em campo",
    description:
      "Faça chamada, envie avisos e acompanhe pagamentos pelo celular, direto do campo ou de casa.",
  },
];

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

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink-950 text-sm font-black text-white">
                  {step.number}
                </span>
                {index < STEPS.length - 1 && (
                  <div className="hidden h-px flex-1 bg-ink-950/10 md:block" />
                )}
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink-950">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-950/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
