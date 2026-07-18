import kidsZone from '../assets/kids-zone-photo-610.webp';
import lifeguardStation from '../assets/lifeguard-station-1200.jpg';
import lifeguardStationSmall from '../assets/lifeguard-station-640.jpg';
import parkLayout from '../assets/park-plan-target-media-1192.webp';
import parkLayoutMedium from '../assets/park-plan-target-media-900.webp';
import parkLayoutSmall from '../assets/park-plan-target-media-640.webp';
import theWaveSlide from '../assets/the-wave-slide-1200.jpg';
import theWaveSlideSmall from '../assets/the-wave-slide-640.jpg';
import theWaveVideo from '../assets/the-wave-action-video-optimized.mp4';
import durabilityLeafLogo from '../assets/durability-leaf-exact.png';
import wibitWorldMapLocations from '../assets/wibit-world-map-locations-1672.webp';
import wibitWorldMapLocationsMedium from '../assets/wibit-world-map-locations-1200.webp';
import wibitWorldMapLocationsSmall from '../assets/wibit-world-map-locations-760.webp';

export const navItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Projet', href: '#saidia' },
  { label: 'Wibit', href: '#wibit' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Impact', href: '#impact' },
];

export const assets = {
  kidsZone,
  lifeguardStation,
  parkLayout,
  parkLayoutMedium,
  parkLayoutSmall,
  theWaveSlide,
  theWaveVideo,
  wibitWorldMapLocations,
  wibitWorldMapLocationsMedium,
  wibitWorldMapLocationsSmall,
};

export const proofStats = [
  {
    value: '30 ans',
    label: "d'expérience",
    description: 'Innovation et leadership Wibit',
    icon: 'medal',
  },
  {
    value: '+10 000',
    label: 'installations',
    description: 'Parcs aquatiques dans le monde entier',
    icon: 'globe',
  },
  {
    value: '+100',
    label: 'pays',
    description: 'Une présence mondiale et une expertise locale',
    icon: 'flag',
  },
  {
    value: '+3 000',
    label: 'Mega Parcs',
    description: "Créateur de l'industrie du parc aquatique gonflable",
    icon: 'community',
  },
] as const;

export const experienceCards = [
  {
    title: 'Pour les enfants',
    image: kidsZone,
    alt: 'Zone Wibit dédiée aux enfants sur l’eau',
    copy: 'Aires adaptées pour les 4 à 9 ans, pensées pour jouer en sécurité.',
  },
  {
    title: 'Pour les familles',
    image: lifeguardStation,
    imageSmall: lifeguardStationSmall,
    alt: 'Poste flottant avec sauveteur sur un parc aquatique',
    copy: 'Un projet de plage vivant, encadré et accessible.',
  },
  {
    title: 'Pour les aventuriers',
    image: theWaveSlide,
    imageSmall: theWaveSlideSmall,
    alt: 'Grand module The Wave avec glissades sur l’eau',
    copy: "The Wave, glissades et parcours dynamique sur l'eau.",
  },
];

export const impactItems = [
  {
    title: 'Sécurité avant tout',
    icon: 'shield',
    points: [
      'Un parc aquatique gonflable iconique',
      'Une expérience lisible et encadrée',
      'Postes de surveillance flottants gratuits',
      'Standards des grands parcs internationaux',
    ],
  },
  {
    title: 'Impact local positif',
    icon: 'community',
    points: [
      'Journées gratuites pour associations locales',
      'Accès pensé pour la communauté',
      'Activation de plage clé en main',
      'Destination familiale distinctive',
    ],
  },
  {
    title: 'Durabilité',
    icon: 'leaf',
    iconImage: durabilityLeafLogo,
    points: [
      'Installation saisonnière maîtrisée',
      'Gestion responsable de l’expérience de plage',
      'Projet compatible avec le site balnéaire',
      'Approche structurée et réutilisable',
    ],
  },
] as const;

export const wibitProofItems = [
  {
    title: 'Ingénierie allemande',
    text: 'Créateur de l’industrie des parcs aquatiques gonflables.',
    icon: 'shield',
  },
  {
    title: 'Réseau mondial',
    text: 'Des destinations balnéaires et de loisirs dans plus de 100 pays.',
    icon: 'globe',
  },
  {
    title: 'Expérience éprouvée',
    text: '+10 000 installations et +3 000 Mega Parcs.',
    icon: 'spark',
  },
  {
    title: 'Partenaire fiable',
    text: 'Une référence internationale pour structurer l’expérience locale.',
    icon: 'community',
  },
] as const;

export const wibitLocations = [
  {
    name: 'Kelowna',
    detail: 'Canada',
    x: 16.5,
    y: 35,
  },
  {
    name: 'Ewa Beach',
    detail: 'Hawaï',
    x: 10.2,
    y: 50.5,
  },
  {
    name: 'Windsor',
    detail: 'Royaume-Uni',
    x: 43.2,
    y: 36.8,
  },
  {
    name: 'Lacanau',
    detail: 'France',
    x: 45.1,
    y: 43.7,
  },
  {
    name: 'Jeddah',
    detail: 'Arabie Saoudite',
    x: 57.8,
    y: 50.5,
  },
  {
    name: 'Dubai JBR',
    detail: 'Émirats arabes unis',
    x: 50.1,
    y: 70.8,
  },
  {
    name: 'Siyam World',
    detail: 'Maldives',
    x: 66.8,
    y: 66.5,
  },
  {
    name: 'Jakarta',
    detail: 'Indonésie',
    x: 82.4,
    y: 54.2,
  },
] as const;
