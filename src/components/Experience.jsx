export default function Experience() {
  const items = [
    {
      title: 'Research Assistant — XR / VR (IIT Chicago)',
      bullets: [
        'Worked on immersive/near-miss VR training experiences.',
        'Quest deployment and eye-tracker sync.',
        'Collaboration with faculty.',
      ],
    },
    {
      title: 'Game / Software Projects',
      bullets: [
        'Unity and Unreal builds.',
        'Rapid prototyping.',
      ],
    },
  ];

  return (
    <section id="experience" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16 text-white">
        <h2 className="text-3xl md:text-4xl font-semibold">Experience & Roles</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)]"
            >
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/80 list-disc pl-5">
                {it.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
