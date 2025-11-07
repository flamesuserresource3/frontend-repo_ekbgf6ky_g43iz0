import { Mail, Github, Linkedin } from 'lucide-react';

export default function AboutContact() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-5xl px-6 py-16 text-white">
        <h2 className="text-3xl md:text-4xl font-semibold">About Abhishek</h2>
        <p className="mt-4 text-white/80 leading-relaxed">
          Abhishek is a master’s student at Illinois Tech (IIT Chicago) focused on game development, XR/VR, and interactive systems.
          He builds Unity/Unreal prototypes and immersive learning/training experiences, and is interested in combining research work
          with production-quality game UI.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="mailto:abhishek@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-5 py-3 text-sm font-medium text-black shadow-[0_0_25px_rgba(34,211,238,0.35)] transition hover:bg-cyan-400 cursor-pointer"
          >
            <Mail className="h-4 w-4" />
            Contact me
          </a>
          <a
            href="https://github.com/abhishekb31"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/90 backdrop-blur transition hover:border-cyan-400/40 hover:text-white cursor-pointer"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-brahmbhatt-161013201/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/90 backdrop-blur transition hover:border-cyan-400/40 hover:text-white cursor-pointer"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
