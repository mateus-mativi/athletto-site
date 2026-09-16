"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const QUESTIONS = [
  {
    question: "Preciso instalar algum programa?",
    answer:
      "Não. O Athletto funciona direto no navegador, no computador ou no celular. Não é preciso instalar nada.",
  },
  {
    question: "Como funciona a cobrança das mensalidades?",
    answer:
      "Você configura os valores por turma ou por aluno e o Athletto gera as cobranças via Pix e boleto automaticamente, com lembretes para os responsáveis.",
  },
  {
    question: "Dá para migrar os dados de outra planilha ou sistema?",
    answer:
      "Sim. Nosso time ajuda a importar alunos, responsáveis e histórico de pagamentos durante o onboarding, sem custo adicional.",
  },
  {
    question: "Existe fidelidade ou multa de cancelamento?",
    answer:
      "Não. Os planos são mensais e você pode cancelar quando quiser, direto no painel.",
  },
  {
    question: "O aplicativo para os pais é cobrado à parte?",
    answer:
      "Não, o acesso dos responsáveis está incluso nos planos Profissional e Rede de escolinhas, sem custo por família.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-600">
            Perguntas frequentes
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-ink-950 sm:text-4xl">
            Ainda com dúvidas?
          </h2>
        </div>

        <div className="mt-12 divide-y divide-black/5 rounded-2xl border border-black/5">
          {QUESTIONS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="px-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold text-ink-950">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-ink-950/40 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-ink-950/60">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
