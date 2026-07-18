import rosetteLogo from '../assets/morocco-tag-header-rosette.png';

export function BrandMark() {
  return (
    <a className="brand" href="#accueil" aria-label="Morocco Tag accueil">
      <img className="brand-mark" src={rosetteLogo} alt="" aria-hidden="true" />
      <span>
        <strong>Morocco <em>Tag</em></strong>
      </span>
    </a>
  );
}
