import { proofStats } from '../data/siteContent';
import { Icon } from './Icons';

export function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Chiffres Wibit">
      <div className="proof-context">
        <span>Références mondiales Wibit</span>
        <p>
          Ces chiffres positionnent Morocco Tag avec une technologie aquatique éprouvée, déjà installée dans des
          destinations balnéaires et de loisirs à l’international.
        </p>
      </div>
      <div className="proof-grid">
        {proofStats.map((stat) => (
          <div className="proof-item" key={stat.label}>
            <Icon name={stat.icon} />
            <div className="proof-copy">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <p>{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
