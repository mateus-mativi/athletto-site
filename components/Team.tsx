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
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    name: "Marina Duarte",
    role: "Professora de Pilates",
    photo:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    name: "Diego Almeida",
    role: "Treinador de Basquete",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    name: "Beatriz Nogueira",
    role: "Instrutora de Natação",
    photo:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    name: "Thiago Martins",
    role: "Técnico de Vôlei",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    name: "Camila Rocha",
    role: "Personal Trainer",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    name: "Eduardo Lima",
    role: "Professor de Judô",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    name: "Patrícia Souza",
    role: "Treinadora de Ginástica",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&h=800&q=80",
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
      id="equipe"
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
            Feito para todo tipo de equipe
          </h2>
          <p className="mt-4 text-lg text-ink-950/60">
            De técnicos de futebol a professores de pilates: o Athletto
            organiza turmas, presença e mensalidades para qualquer
            modalidade.
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
