const TESTIMONIALS = [
  {
    quote:
      "Parei de correr atrás de mensalidade atrasada no grupo de WhatsApp. Hoje sei quem pagou sem precisar perguntar.",
    name: "Fernando Ribeiro",
    role: "Diretor, Escolinha Craques do Amanhã",
  },
  {
    quote:
      "A chamada pelo celular mudou nossa rotina. Sei exatamente quem faltou e já aviso os pais no grupo certo.",
    name: "Carla Menezes",
    role: "Coordenadora, Instituto Bola nos Pés",
  },
  {
    quote:
      "Migramos de três planilhas para o Athletto numa tarde só. O suporte ajudou a importar tudo, sem perder histórico.",
    name: "João Pedro Alves",
    role: "Fundador, Escolinha Gol de Placa",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-600">
            Depoimentos
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-ink-950 sm:text-4xl">
            Professores que já usam o Athletto
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-2xl border border-black/5 bg-brand-50/40 p-7"
            >
              <blockquote className="text-[15px] leading-relaxed text-ink-950/80">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                  {testimonial.name
                    .split(" ")
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join("")}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink-950">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-ink-950/50">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
