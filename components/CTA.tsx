export function CTA() {
  return (
    <section id="contato" className="bg-brand-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-black tracking-tight text-ink-950 sm:text-4xl">
          Sua próxima turma começa em dez minutos.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-ink-950/60">
          Dá tempo de criar a conta, sem cartão de crédito. Se precisar de
          ajuda, é só chamar a gente.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#planos"
            className="rounded-full bg-brand-500 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition-colors hover:bg-brand-600"
          >
            Criar conta grátis
          </a>
          <a
            href="mailto:contato@athletto.com.br"
            className="rounded-full border border-ink-950/15 px-7 py-3.5 text-center text-sm font-semibold text-ink-950 transition-colors hover:bg-ink-950/5"
          >
            Falar com a gente
          </a>
        </div>
      </div>
    </section>
  );
}
