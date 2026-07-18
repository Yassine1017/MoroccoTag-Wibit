import { useEffect, useRef, useState } from 'react';
import { assets, experienceCards, impactItems, wibitProofItems } from '../data/siteContent';
import rosetteLogo from '../assets/morocco-tag-header-rosette.png';
import { Icon } from './Icons';
import { SectionHeading } from './SectionHeading';

export function WibitSection() {
  return (
    <section className="section navy-section section-transition-rule" id="wibit">
      <div className="wibit-layout">
        <div className="wibit-copy">
          <SectionHeading
            eyebrow="Pourquoi Wibit ?"
            title={
              <>
                <span>Le leader</span>
                <span>mondial des</span>
                <span>parcs aquatiques</span>
                <span>gonflables</span>
              </>
            }
            text="Wibit, entreprise allemande, est présentée comme créateur de l’industrie des parcs aquatiques gonflables et leader mondial."
          />
          <div className="wibit-copy-divider" aria-hidden="true">
            <span />
            <img src={rosetteLogo} alt="" />
            <span />
          </div>
          <div className="wibit-meta">
            <p>
              Une référence internationale déjà visible dans des destinations balnéaires et de loisirs aux Émirats arabes unis,
              aux Maldives, au Royaume-Uni, aux États-Unis, en Indonésie, en Arabie Saoudite, en France et au Canada.
            </p>
          </div>
          <div className="wibit-proof-matrix" aria-label="Preuves Wibit">
            {wibitProofItems.map((item) => (
              <article key={item.title}>
                <Icon name={item.icon} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <aside className="wibit-map-card" aria-label="Présence mondiale Wibit">
          <div className="wibit-map-stage">
            <img
              src={assets.wibitWorldMapLocations}
              srcSet={`${assets.wibitWorldMapLocationsSmall} 760w, ${assets.wibitWorldMapLocationsMedium} 1200w, ${assets.wibitWorldMapLocations} 1672w`}
              sizes="(max-width: 820px) calc(100vw - 40px), 52vw"
              alt="Carte mondiale des références Wibit avec Kelowna, Ewa Beach, Windsor, Lacanau, Jeddah, Dubai JBR, Siyam World et Jakarta"
              loading="lazy"
              decoding="async"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}

export function SaidiaLocationSection() {
  return (
    <section className="saidia-location-section" id="saidia">
      <div className="saidia-location-inner">
        <div className="saidia-location-copy">
          <p className="saidia-location-kicker">Ancrage local</p>
          <h2>Saidia, côte méditerranéenne du Maroc</h2>
          <p>
            Un contexte balnéaire clair pour connecter la référence internationale Wibit à une expérience
            familiale et estivale pensée pour le littoral marocain.
          </p>
        </div>
        <figure className="saidia-location-visual" aria-label="Carte stylisée localisant Saidia et Marrakesh au Maroc">
          <div className="saidia-map-heading">
            <Icon name="pin" />
            <span>Nord-est du Maroc</span>
          </div>
          <div className="saidia-map-frame">
            <svg className="saidia-map" viewBox="0 0 560 300" role="img" aria-label="Repères Saidia et Marrakesh au Maroc">
              <path className="saidia-sea-shape" d="M0 0h560v118C470 96 402 105 330 91 230 72 166 45 76 58 42 63 17 75 0 87Z" />
              <path className="saidia-land-shape" d="M0 86c50-23 107-26 171-10 52 13 101 33 157 37 70 5 139-14 232 11v176H0Z" />
              <path className="saidia-coast-line" d="M1 87c50-23 107-26 170-11 52 13 101 33 157 37 70 5 139-14 231 11" />
              <path className="saidia-route-line" d="M170 206C235 163 312 138 409 120" />
              <circle className="saidia-secondary-city-dot" cx="170" cy="206" r="5" />
              <circle className="saidia-city-halo" cx="413" cy="119" r="34" />
              <circle className="saidia-city-dot" cx="413" cy="119" r="7" />
              <path className="saidia-map-ornament" d="M73 188h82M88 204h50M332 220h94M349 237h58" />
            </svg>
            <span className="saidia-map-label saidia-map-label-sea">Méditerranée</span>
            <span className="saidia-map-label saidia-map-label-marrakesh">Marrakesh</span>
            <span className="saidia-map-label saidia-map-label-city">Saidia</span>
            <span className="saidia-map-label saidia-map-label-country">Maroc</span>
          </div>
          <figcaption>Côte méditerranéenne du Maroc</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function ParkPlanSection() {
  const planStats = [
    { value: '116 m', label: 'Longueur', icon: 'measure' },
    { value: '30 m', label: 'Largeur', icon: 'width' },
    { value: '4-9 ans', label: 'Zone enfants', icon: 'smile' },
    { value: 'TOUS NIVEAUX', label: 'Parcours', icon: 'levels' },
  ] as const;

  const planHighlights = [
    "Aire principale d'aventure",
    'The Wave - tour de 5 m avec irrigation intégrée',
    'Zone enfants dédiée 4 à 9 ans',
    'Parcours équilibré pour tous les niveaux',
  ];

  return (
    <section className="section plan-section" id="projet">
      <div className="plan-copy">
        <p className="plan-kicker">Le parc proposé à Saidia</p>
        <div className="plan-divider" aria-hidden="true" />
        <h2>
          <span>Un parc aquatique géant à Saidia</span>
          <span>
            <em>116 m x 30 m</em> de fun
          </span>
        </h2>
        <p className="plan-intro">
          Un parc modulaire Wibit conçu pour offrir du fun, de la sécurité et une excellente expérience pour tous les âges.
        </p>
        <div className="plan-stat-grid" aria-label="Dimensions et publics du parc">
          {planStats.map((stat) => (
            <article className="plan-stat-card" key={stat.label}>
              <Icon name={stat.icon} />
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
        <ul className="plan-highlights" aria-label="Points clés du parc proposé">
          {planHighlights.map((highlight) => (
            <li key={highlight}>
              <span className="plan-check-mark" aria-hidden="true">✓</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
      <figure className="plan-media">
        <img
          src={assets.parkLayout}
          srcSet={`${assets.parkLayoutSmall} 640w, ${assets.parkLayoutMedium} 900w, ${assets.parkLayout} 1192w`}
          sizes="(max-width: 820px) 100vw, 58vw"
          alt="Plan visuel du parc aquatique proposé à Saidia"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="section experience-section section-transition-rule" id="experience">
      <SectionHeading title="Une expérience pour chaque âge" align="center" />
      <div className="experience-cards">
        {experienceCards.map((card, index) => (
          <article className="experience-card" key={card.title}>
            <div className="experience-icon">
              <Icon name={index === 0 ? 'child' : index === 1 ? 'community' : 'wave'} />
            </div>
            <h3>{card.title}</h3>
            <div className="experience-media">
              <img
                src={card.image}
                srcSet={'imageSmall' in card ? `${card.imageSmall} 640w, ${card.image} 1200w` : undefined}
                sizes="(max-width: 820px) calc(100vw - 40px), 31vw"
                alt={card.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
            <p>{card.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ImpactSection() {
  return (
    <section className="section impact-section" id="impact">
      <span className="impact-water-sheen" aria-hidden="true" />
      <span className="impact-side-pattern impact-side-pattern-left" aria-hidden="true" />
      <span className="impact-side-pattern impact-side-pattern-right" aria-hidden="true" />
      <span className="impact-wave-lines" aria-hidden="true" />
      <div className="impact-copy">
        <div className="impact-heading">
          <p className="impact-kicker">Sécurité • Impact • Durabilité</p>
          <h2>
            Un engagement fort pour <span>Saidia</span>
          </h2>
          <span className="impact-heading-rule" aria-hidden="true" />
        </div>
        <div className="impact-list">
          {impactItems.map((item) => (
            <article key={item.title}>
              <div className="impact-icon-wrap">
                {'iconImage' in item ? (
                  <img className="impact-logo-image" src={item.iconImage} alt="" aria-hidden="true" />
                ) : (
                  <Icon name={item.icon} />
                )}
              </div>
              <div>
                <h3>{item.title}</h3>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WaveSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || shouldLoadVideo || prefersReducedMotion) return;

    if (!('IntersectionObserver' in window)) {
      setShouldLoadVideo(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: '520px 0px' },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [prefersReducedMotion, shouldLoadVideo]);

  return (
    <section className="section wave-section" id="wave" ref={sectionRef}>
      <div className="wave-copy">
        <h2 className="wave-title">The Wave</h2>
        <p className="wave-subtitle">Tour de 5 m</p>
        <p className="wave-text">
          Une attraction emblématique pour les amateurs de sensations : glissades rapides, sauts et descentes.
        </p>
        <p className="wave-fact">
          <span aria-hidden="true">✓</span>
          Tour de 5 m avec système d’irrigation intégré
        </p>
      </div>
      <figure className="wave-media">
        <video
          src={shouldLoadVideo && !prefersReducedMotion ? assets.theWaveVideo : undefined}
          poster={assets.theWaveSlide}
          aria-label="Vidéo The Wave, grand module de glisse Wibit"
          autoPlay={!prefersReducedMotion}
          muted
          loop={!prefersReducedMotion}
          playsInline
          preload={shouldLoadVideo && !prefersReducedMotion ? 'metadata' : 'none'}
        />
      </figure>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="final-cta" id="contact">
      <div className="final-cta-content">
        <div>
          <h2>Construisons ensemble la meilleure expérience de plage pour Saidia</h2>
          <p>Parlons de votre projet et de la valeur que nous pouvons créer pour votre destination.</p>
        </div>
        <div className="final-cta-actions" aria-label="Actions de contact">
          <a className="button button-gold final-cta-primary" href="#footer">
            <span>Planifier un échange</span>
            <span aria-hidden="true">→</span>
          </a>
          <a className="final-cta-secondary" href="#footer">
            <span>Nous contacter</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const quickLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Projet', href: '#saidia' },
    { label: 'Wibit', href: '#wibit' },
    { label: 'Expérience', href: '#experience' },
    { label: 'Impact', href: '#impact' },
  ];

  return (
    <footer className="footer" id="footer">
      <div className="footer-brand">
        <a className="footer-logo" href="#accueil" aria-label="Morocco Tag accueil">
          <img className="footer-logo-mark" src={rosetteLogo} alt="" aria-hidden="true" />
          <span>
            Morocco <em>Tag</em>
          </span>
        </a>
        <div className="footer-gold-divider" aria-hidden="true" />
        <p>
          Morocco Tag développe une expérience nautique clé en main pour Saidia :
          conception, installation et opérations autour du parc aquatique Wibit.
        </p>
      </div>
      <nav aria-label="Liens rapides">
        <span>Liens rapides</span>
        {quickLinks.map((link) => (
          <a key={`${link.label}-${link.href}`} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="footer-note">
        <span>FR | EN | AR</span>
        <div className="footer-contact-status">
          <strong>Coordonnées</strong>
          <p>À confirmer avec l’équipe projet.</p>
        </div>
        <small>© 2025 Morocco Tag. Contenu basé sur la présentation projet.</small>
      </div>
    </footer>
  );
}
