export type IconName =
  | 'wave'
  | 'shield'
  | 'community'
  | 'child'
  | 'globe'
  | 'measure'
  | 'width'
  | 'smile'
  | 'levels'
  | 'tower'
  | 'spark'
  | 'medal'
  | 'flag'
  | 'leaf'
  | 'pin';

export function Icon({ name }: { name: IconName }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <svg className="icon" viewBox="0 0 48 48" aria-hidden="true">
      {name === 'wave' && (
        <>
          <path {...common} d="M5 18c5 0 5-4 10-4s5 4 10 4 5-4 10-4 5 4 8 4" />
          <path {...common} d="M5 26c5 0 5-4 10-4s5 4 10 4 5-4 10-4 5 4 8 4" />
          <path {...common} d="M5 34c5 0 5-4 10-4s5 4 10 4 5-4 10-4 5 4 8 4" />
        </>
      )}
      {name === 'shield' && (
        <path {...common} d="M24 5 39 11v11c0 10-6 17-15 21C15 39 9 32 9 22V11Z" />
      )}
      {name === 'medal' && (
        <>
          <circle {...common} cx="24" cy="19" r="12" />
          <circle {...common} cx="24" cy="19" r="8" />
          <path {...common} d="M24 13.5 26 17.4 30.4 18 27.2 21.1 28 25.5 24 23.4 20 25.5 20.8 21.1 17.6 18 22 17.4Z" />
          <path {...common} d="M17.5 29 13.5 43 24 36.5 34.5 43 30.5 29" />
          <path {...common} d="M20.3 35.2 17.8 39.3M27.7 35.2l2.5 4.1" />
        </>
      )}
      {name === 'flag' && (
        <>
          <path {...common} d="M14 42V8" />
          <path {...common} d="M14 10c7-5 13 4 20-1v19c-7 5-13-4-20 1" />
        </>
      )}
      {name === 'community' && (
        <>
          <circle {...common} cx="24" cy="14" r="6" />
          <path {...common} d="M14 39c1-8 5-13 10-13s9 5 10 13" />
          <circle {...common} cx="10" cy="21" r="4" />
          <circle {...common} cx="38" cy="21" r="4" />
          <path {...common} d="M4 38c1-6 4-9 8-10M44 38c-1-6-4-9-8-10" />
        </>
      )}
      {name === 'child' && (
        <>
          <circle {...common} cx="24" cy="15" r="7" />
          <path {...common} d="M16 30c3 4 13 4 16 0M15 21l-5 4M33 21l5 4M18 39l3-8M30 39l-3-8" />
        </>
      )}
      {name === 'globe' && (
        <>
          <circle {...common} cx="24" cy="24" r="17" />
          <path {...common} d="M7 24h34M24 7c6 6 6 28 0 34M24 7c-6 6-6 28 0 34" />
        </>
      )}
      {name === 'measure' && (
        <>
          <path {...common} d="M8 15h32v18H8z" />
          <path {...common} d="M14 15v7M22 15v5M30 15v7M38 15v5" />
        </>
      )}
      {name === 'width' && (
        <>
          <path {...common} d="M10 24h28" />
          <path {...common} d="m17 16-8 8 8 8M31 16l8 8-8 8" />
        </>
      )}
      {name === 'smile' && (
        <>
          <circle {...common} cx="24" cy="24" r="17" />
          <path {...common} d="M17 21h.1M31 21h.1M17 29c4 4 10 4 14 0" />
        </>
      )}
      {name === 'levels' && (
        <>
          <path {...common} d="M12 34V25M20 34V19M28 34V13M36 34V8" />
          <path {...common} d="M8 38h32" />
        </>
      )}
      {name === 'tower' && (
        <>
          <path {...common} d="M17 42h14M20 42l4-30 4 30M15 17h18M18 26h12" />
          <path {...common} d="M13 12h22l-4-6H17Z" />
        </>
      )}
      {name === 'spark' && (
        <path {...common} d="M24 5 29 19 43 24 29 29 24 43 19 29 5 24 19 19Z" />
      )}
      {name === 'leaf' && (
        <>
          <path {...common} d="M24 43V24" />
          <path {...common} d="M24 25C16 19 10 14 9 6c8 1 15 5 19 13 2 5 1 9-4 6Z" />
          <path {...common} d="M24 24c-3-6-7-10-13-14" />
          <path {...common} d="M26 24c9-1 17-9 18-20-11 1-20 8-22 18-1 4 0 5 4 2Z" />
          <path {...common} d="M27 22c4-7 9-12 16-16" />
          <path {...common} d="M17 15c1 1 4 1 7 0M34 13c-1 2-1 5 0 8" />
        </>
      )}
      {name === 'pin' && (
        <>
          <path {...common} d="M24 43s14-12 14-25A14 14 0 0 0 10 18c0 13 14 25 14 25Z" />
          <circle {...common} cx="24" cy="18" r="5" />
        </>
      )}
    </svg>
  );
}
