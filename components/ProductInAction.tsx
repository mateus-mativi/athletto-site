import {
  CalendlyCarousel,
  type CarouselItem,
} from "@/components/ui/connected-carousel";

const MOMENTS: CarouselItem[] = [
  {
    id: "chamada",
    stat: "Chamada",
    quote: "A chamada é um toque por aluno. Quem faltou fica registrado.",
    author: "Início da aula",
    role: "Celular",
    defaultImage: "/screens/chamada.svg",
    selectedImage: "/screens/chamada.svg",
    alt: "Tela de chamada da turma Sub-11 com 12 alunos, 10 presentes",
  },
  {
    id: "cobranca",
    stat: "Cobrança no WhatsApp",
    quote:
      "A cobrança sai pelo WhatsApp com o link de pagamento. Quando pagam, você fica sabendo.",
    author: "Dia de vencimento",
    role: "Celular",
    defaultImage: "/screens/cobranca.svg",
    selectedImage: "/screens/cobranca.svg",
    alt: "Conversa de WhatsApp mostrando cobrança enviada e status de pagamento confirmado",
  },
  {
    id: "fechamento",
    stat: "Fechamento do mês",
    quote:
      "Sábado à noite, o mês inteiro numa tela: quem pagou, quem deve, quantos vieram.",
    author: "Fechamento do mês",
    role: "Computador",
    defaultImage: "/screens/fechamento.svg",
    selectedImage: "/screens/fechamento.svg",
    alt: "Painel de fechamento do mês com recebido, em aberto, presença e unidades",
  },
];

export function ProductInAction() {
  return (
    <section id="produto-em-acao" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-600">
            Produto em ação
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-ink-950 sm:text-4xl">
            Da primeira aula ao fechamento do mês
          </h2>
        </div>
      </div>

      <div className="mt-14 px-6">
        <CalendlyCarousel items={MOMENTS} />
      </div>
    </section>
  );
}
