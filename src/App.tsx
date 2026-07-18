import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProofStrip } from './components/ProofStrip';
import {
  ExperienceSection,
  FinalCta,
  Footer,
  ImpactSection,
  ParkPlanSection,
  SaidiaLocationSection,
  WaveSection,
  WibitSection,
} from './components/Sections';

function getAnchorOffset() {
  const value = getComputedStyle(document.documentElement).getPropertyValue('--anchor-offset');
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 96;
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function scrollToHash(hash: string, behavior: ScrollBehavior = 'smooth') {
  const id = decodeURIComponent(hash.replace(/^#/, ''));
  if (!id) return;

  const target = document.getElementById(id);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - getAnchorOffset();
  window.scrollTo({ top: Math.max(0, top), behavior: prefersReducedMotion() ? 'auto' : behavior });
}

export default function App() {
  useEffect(() => {
    const scrollToCurrentHash = (behavior: ScrollBehavior = 'auto') => {
      if (!window.location.hash) return;
      window.requestAnimationFrame(() => scrollToHash(window.location.hash, behavior));
    };

    const initialTimers = [
      window.setTimeout(() => scrollToCurrentHash('auto'), 80),
      window.setTimeout(() => scrollToCurrentHash('auto'), 360),
    ];

    const handleHashChange = () => scrollToCurrentHash();

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;

      const hash = link.hash;
      if (!hash || !document.getElementById(decodeURIComponent(hash.slice(1)))) return;

      event.preventDefault();
      if (window.location.hash !== hash) {
        window.history.pushState(null, '', hash);
      }
      scrollToHash(hash);
    };

    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      initialTimers.forEach((timer) => window.clearTimeout(timer));
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <WibitSection />
        <SaidiaLocationSection />
        <ParkPlanSection />
        <ExperienceSection />
        <ImpactSection />
        <WaveSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
