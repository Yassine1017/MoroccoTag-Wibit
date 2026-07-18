import heroCanvas from '../assets/hero-clean-background-1836.webp';
import heroCanvasMedium from '../assets/hero-clean-background-1200.webp';
import heroCanvasSmall from '../assets/hero-clean-background-780.webp';

const heroPillars = [
  { label: 'Sécurité', icon: 'shield' },
  { label: 'Impact local', icon: 'community' },
  { label: 'Durabilité', icon: 'leaf' },
] as const;

type HeroPillarIcon = (typeof heroPillars)[number]['icon'];

function PillarIcon({ icon }: { icon: HeroPillarIcon }) {
  return (
    <svg className={`hero-pillar-icon hero-pillar-icon-${icon}`} viewBox="0 0 56 56" aria-hidden="true">
      {icon === 'shield' && (
        <>
          <path className="hero-pillar-gold" d="M28 5.5 43.8 11.9v12.8c0 11.2-6.2 19.9-15.8 24.4-9.6-4.5-15.8-13.2-15.8-24.4V11.9Z" />
        </>
      )}
      {icon === 'community' && (
        <>
          <circle className="hero-pillar-gold" cx="28" cy="15.7" r="5.8" />
          <path className="hero-pillar-gold" d="M17.7 39c1-8 4.9-12.3 10.3-12.3S37.3 31 38.3 39" />
          <circle className="hero-pillar-gold" cx="13.5" cy="24.8" r="4.6" />
          <path className="hero-pillar-gold" d="M6.4 40c.9-6.3 4.2-10 9.1-10.4" />
          <circle className="hero-pillar-gold" cx="42.5" cy="24.8" r="4.6" />
          <path className="hero-pillar-gold" d="M49.6 40c-.9-6.3-4.2-10-9.1-10.4" />
        </>
      )}
      {icon === 'leaf' && (
        <>
          <path className="hero-pillar-gold" d="M28 47V28.8" />
          <path className="hero-pillar-gold" d="M27.8 28.5C18.9 27.8 12.5 21 10.7 9.8c11 1 18.4 7.2 19.7 15.6.3 2.3-.5 3.4-2.6 3.1Z" />
          <path className="hero-pillar-gold" d="M29.3 28.5c8.8-.7 15.2-7.5 17-18.7-11 1-18.4 7.2-19.7 15.6-.3 2.3.5 3.4 2.7 3.1Z" />
          <path className="hero-pillar-gold" d="M17.2 15.2c4.6 3.7 8.2 7.9 10.8 13.6M39 15.2c-4.6 3.7-8.2 7.9-10.8 13.6" />
        </>
      )}
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero" id="accueil">
      <img
        className="hero-scene"
        src={heroCanvas}
        srcSet={`${heroCanvasSmall} 780w, ${heroCanvasMedium} 1200w, ${heroCanvas} 1836w`}
        sizes="100vw"
        alt=""
        aria-hidden="true"
      />
      <div className="hero-copy">
        <p className="trust-line">Partenaire municipal fiable • Sécurité • Impact • Durabilité</p>
        <h1>
          <span>Le partenaire qui</span>
          <span>fait vivre votre plage</span>
        </h1>
        <p className="hero-lede">
          Conception, installation et opérations clés en main pour un parc aquatique Wibit à Saïdia.
        </p>
        <div className="hero-actions">
          <a className="button button-gold" href="#saidia">
            Découvrir le projet
          </a>
          <a className="button button-outline" href="#impact">
            Voir les engagements
          </a>
        </div>
        <div className="hero-pillars" aria-label="Engagements du projet">
          {heroPillars.map((item) => (
            <div className="hero-pillar" key={item.label}>
              <PillarIcon icon={item.icon} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
