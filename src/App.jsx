import { useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import AboutContact from './components/AboutContact';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior for in-page navigation and the overall cinematic feel
    if ('scrollBehavior' in document.documentElement.style) return;
    // Fallback could be added if needed; modern browsers support smooth behavior.
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-slate-900 to-black font-['Inter',_system-ui]">
      {/* HERO / TITLE */}
      <Hero />

      {/* PROJECTS */}
      <Projects />

      {/* EXPERIENCE */}
      <Experience />

      {/* ABOUT & CONTACT */}
      <AboutContact />

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/60">
        <p>© {new Date().getFullYear()} Abhishek Brahmbhatt · Built with a dark cinematic vibe</p>
      </footer>
    </div>
  );
}
