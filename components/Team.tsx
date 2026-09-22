import { Users } from "lucide-react";

export type TeamMember = {
  name: string;
  role: string;
  photo: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Rafael Costa",
    role: "Técnico de Futebol",
    photo:
      "https://images.unsplash.com/photo-1570498839593-e565b39455fc?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    name: "Marina Duarte",
    role: "Professora de Pilates",
    photo:
      "https://images.unsplash.com/photo-1591258370814-01609b341790?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    name: "Diego Almeida",
    role: "Treinador de Basquete",
    photo:
      "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    name: "Beatriz Nogueira",
    role: "Instrutora de Natação",
    photo:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    name: "Thiago Martins",
    role: "Técnico de Vôlei",
    photo:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    name: "Camila Rocha",
    role: "Personal Trainer",
    photo:
      "https://images.unsplash.com/photo-1648542036561-e1d66a5ae2b1?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    name: "Eduardo Lima",
    role: "Professor de Muay Thai",
    photo:
      "https://images.unsplash.com/photo-1696454411278-a64de1369e83?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    name: "Patrícia Souza",
    role: "Treinadora de Ginástica",
    photo:
      "https://images.unsplash.com/photo-1505619730259-b1288d154955?auto=format&fit=crop&w=600&h=800&q=80",
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group/card relative aspect-[3/4] w-56 shrink-0 snap-center overflow-hidden rounded-2xl bg-ink-950 shadow-sm sm:w-64">
      <img
        src={member.photo}
        alt={member.name}
        loading="lazy"
        className="h-full w-full object-cover grayscale transition-all duration-500 ease-out group-hover/card:scale-105 group-hover/card:grayscale-0 group-active/card:grayscale-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-transparent"
      />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-base font-bold text-white">{member.name}</p>
        <p className="text-sm text-white/60">{member.role}</p>
      </div>
    </div>
  );
}

export function Team({ members }: { members: TeamMember[] }) {
  return (
    <section
      id="modalidades"
      className="relative overflow-hidden bg-brand-50/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative mx-auto max-w-2xl text-center">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-[40%_60%_65%_35%/40%_45%_55%_60%] bg-brand-200/50 blur-3xl"
          />
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-600">
            <Users size={26} />
          </span>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-ink-950 sm:text-4xl">
            Feito para quem dá aula, em qualquer modalidade
          </h2>
          <p className="mt-4 text-lg text-ink-950/60">
            Do técnico de futebol à professora de pilates, a rotina muda — a
            gestão que cabe no intervalo é a mesma.
          </p>
        </div>
      </div>

      <div className="group/marquee relative mt-14 hidden overflow-hidden lg:block">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-brand-50/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-brand-50/80 to-transparent" />
        <div className="flex w-max animate-marquee gap-6 group-hover/marquee:[animation-play-state:paused]">
          <div className="flex shrink-0 gap-6">
            {members.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
          <div className="flex shrink-0 gap-6" aria-hidden="true">
            {members.map((member) => (
              <TeamCard key={`${member.name}-duplicate`} member={member} />
            ))}
          </div>
        </div>
      </div>

      <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 lg:hidden">
        {members.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}
