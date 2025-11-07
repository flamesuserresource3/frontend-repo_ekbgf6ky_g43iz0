import { useRef, useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { Volume2, VolumeX, ChevronDown } from 'lucide-react';

export default function Hero() {
  const projectsRef = useRef(null);
  const [ambientOn, setAmbientOn] = useState(false);

  useEffect(() => {
    projectsRef.current = document.getElementById('projects');
  }, []);

  const handleScrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] w-full text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,200,255,0.15),transparent_60%)]" />

      {/* Ambient toggle */}
      <div className="absolute right-6 top-6 z-10">
        <button
          aria-label="Toggle ambient sound"
          onClick={() => setAmbientOn((v) => !v)}
          className="group flex items-center gap-2 rounded-full border border-cyan-400/30 bg-black/40 px-4 py-2 text-sm backdrop-blur-md transition hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:border-cyan-400/60 cursor-pointer"
        >
          {ambientOn ? (
            <Volume2 className="h-4 w-4 text-cyan-300" />
          ) : (
            <VolumeX className="h-4 w-4 text-cyan-300" />
          )}
          <span className="text-cyan-100/90 select-none">Ambient {ambientOn ? 'On' : 'Off'}</span>
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-black/30 px-4 py-1.5 text-xs text-cyan-200/90 backdrop-blur">
          <span className="font-mono tracking-wide">// loading immersive portfolio…</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          Abhishek Brahmbhatt
        </h1>
        <p className="mt-4 text-cyan-100/90 text-base sm:text-lg">
          Game & XR Developer · Unity / Unreal · IIT Chicago
        </p>
        <div className="mt-3 text-sm text-cyan-200/80 font-mono space-y-1">
          <p>// env: Unity · Unreal · XR</p>
        </div>
        <div className="mt-10">
          <button
            onClick={handleScrollToProjects}
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-6 py-3 text-sm font-medium text-black shadow-[0_0_25px_rgba(34,211,238,0.45)] transition hover:bg-cyan-400 cursor-pointer"
          >
            View Projects
            <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
