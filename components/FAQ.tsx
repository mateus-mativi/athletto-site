"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const QUESTIONS = [
  {
    question: "É grátis mesmo? O que eu pago?",
    answer:
      "Sim. O plano Grátis organiza turmas, alunos e chamada sem mensalidade. Você só paga se usar a cobrança automática por WhatsApp, por envio.",
  },
  {
    question: "Quanto custa cada cobrança por WhatsApp?",
    answer:
      "R$ 0,30 por cobrança enviada no plano Grátis. No plano Básico, o valor por envio é menor.",
  },
  {
    question: "Meus alunos vão receber mensagem de quem?",
    answer:
      "Da sua escola, com o nome dela na mensagem. O Athletto só entrega o aviso e o link de pagamento.",
  },
  {
    question: "Serve para pilates, luta, natação?",
    answer:
      "Serve. Você cria os horários como turmas e organiza alunos de qualquer modalidade, não só futebol.",
  },
  {
    question: "Tenho meus alunos numa planilha. Dá para trazer?",
    answer:
      "Dá. Você importa a planilha inteira de uma vez, e nosso time ajuda se precisar.",
  },
  {
    question: "Os dados dos meus alunos ficam seguros? Quem tem acesso?",
    answer:
      "Ficam. Só você e os professores da sua escola têm acesso aos dados dos seus alunos.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Pode, direto no painel, sem fidelidade e sem multa.",
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
