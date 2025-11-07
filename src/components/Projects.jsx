import { ExternalLink } from 'lucide-react';

const featured = [
  {
    title: 'Character Rig & Animation Demo',
    href: 'https://abhishekb31.github.io/AbhishekBrahmbhatt/CharacterRig.html',
    tags: ['3D', 'Rigging', 'Game Pipeline'],
    text: 'Demonstration of character rig/animation workflow for game environments.',
  },
  {
    title: 'Mario Platformer',
    href: 'https://abhishekb31.github.io/AbhishekBrahmbhatt/Mario.html',
    tags: ['Game', 'Platformer'],
    text: 'Recreated classic platforming movement, collisions and level flow.',
  },
  {
    title: 'Gameplay Prototype — Bog',
    href: 'https://abhishekb31.github.io/AbhishekBrahmbhatt/Bog.html',
    tags: ['Prototype'],
    text: 'Rapid prototype to test mechanics and interaction.',
  },
];

const secondary = [
  {
    title: 'Bog',
    href: 'https://abhishekb31.github.io/AbhishekBrahmbhatt/Bog.html',
    tag: 'Prototype',
    text: 'Small interactive/game prototype.',
  },
  {
    title: 'SWF',
    href: 'https://abhishekb31.github.io/AbhishekBrahmbhatt/SWF.html',
    tag: 'Prototype',
    text: 'Lightweight prototype to explore mechanics/UI.',
  },
  {
    title: 'FC',
    href: 'https://abhishekb31.github.io/AbhishekBrahmbhatt/FC.html',
    tag: 'Prototype',
    text: 'Prototype built to test a specific interaction/flow.',
  },
];

const applications = [
  {
    title: 'Pharmacy Management System',
    href: 'https://abhishekb31.github.io/AbhishekBrahmbhatt/PharmacyMS.html',
    tags: ['Web App', 'CRUD'],
    text: 'Pharmacy inventory and customer management system.',
  },
  {
    title: 'Sports Management System',
    href: 'https://abhishekb31.github.io/AbhishekBrahmbhatt/SportsMS.html',
    tags: ['Web App', 'Dashboard'],
    text: 'System to manage sports data and records.',
  },
];

function Tag({ children }) {
  return (
    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-0.5 text-[11px] text-cyan-100">
      {children}
    </span>
  );
}

function FeaturedCard({ item }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(34,211,238,0.2)] cursor-pointer"
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="h-44 md:h-full md:col-span-1 bg-gradient-to-br from-cyan-500/20 via-transparent to-transparent" />
        <div className="md:col-span-2 p-6">
          <div className="flex flex-wrap items-center gap-2">
            {item.tags?.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <h3 className="mt-3 text-xl font-semibold text-white flex items-center gap-2">
            {item.title}
            <ExternalLink className="h-4 w-4 opacity-70 transition group-hover:translate-x-0.5" />
          </h3>
          <p className="mt-2 text-sm text-white/70">{item.text}</p>
        </div>
      </div>
    </a>
  );
}

function GridCard({ item }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)] cursor-pointer"
    >
      <div className="h-28 w-full rounded-lg bg-gradient-to-br from-cyan-500/20 via-transparent to-transparent" />
      <div className="mt-4 flex items-center gap-2">
        <span className="text-[11px] text-cyan-200/90 font-mono border border-cyan-400/30 rounded-full px-2 py-0.5">{item.tag}</span>
      </div>
      <h4 className="mt-2 text-lg font-semibold text-white flex items-center gap-2">
        {item.title}
        <ExternalLink className="h-4 w-4 opacity-70 transition group-hover:translate-x-0.5" />
      </h4>
      <p className="mt-1 text-sm text-white/70">{item.text}</p>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-16 text-white">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold">Projects</h2>
          <p className="mt-2 text-white/70">Selected game, XR and application builds.</p>
        </div>

        {/* A) Featured Game/XR */}
        <div className="space-y-5">
          {featured.map((item) => (
            <FeaturedCard key={item.title} item={item} />
          ))}
        </div>

        {/* B) Secondary Prototype Grid */}
        <div className="mt-12">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-medium text-white/90">Secondary Prototypes</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {secondary.map((item) => (
              <GridCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        {/* C) Applications */}
        <div className="mt-12">
          <h3 className="text-xl font-medium text-white/90">Application / Management Builds</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
            {applications.map((item) => (
              <FeaturedCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
