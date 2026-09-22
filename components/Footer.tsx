const LINK_GROUPS = [
  {
    title: "Produto",
    links: [
      { label: "Funcionalidades", href: "#funcionalidades" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Planos", href: "#planos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Contato", href: "#contato" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-sm font-black text-white">
                A
              </span>
              <span className="text-lg font-extrabold tracking-tight text-ink-950">
                Athletto
              </span>
            </div>
            <p className="mt-3 text-sm text-ink-950/50">
              A gestão que cabe no intervalo: turmas, mensalidades e presença,
              para qualquer modalidade de aula.
            </p>
          </div>

          <div className="flex flex-wrap gap-16">
            {LINK_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="text-sm font-bold text-ink-950">
                  {group.title}
                </p>
                <ul className="mt-3 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-ink-950/50 transition-colors hover:text-ink-950"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-black/5 pt-6 text-xs text-ink-950/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Athletto. Todos os direitos reservados.</p>
          <p>Feito para quem dá aula.</p>
        </div>
      </div>
    </footer>
  );
}
