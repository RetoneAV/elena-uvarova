import { cn } from "cn";

type ProjectVisualProps = {
  slug: string;
  className?: string;
};

export function ProjectVisual({ slug, className }: ProjectVisualProps) {
  return (
    <svg
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      <defs>
        <radialGradient id={`${slug}-vignette`} cx="50%" cy="46%" r="72%">
          <stop offset="45%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.62" />
        </radialGradient>
      </defs>
      <Scene slug={slug} />
      <rect width="1600" height="1000" fill={`url(#${slug}-vignette)`} />
    </svg>
  );
}

function Scene({ slug }: { slug: string }) {
  switch (slug) {
    case "immersive-colour-light":
      return (
        <>
          <rect width="1600" height="1000" fill="#140818" />
          <circle cx="520" cy="480" r="460" fill="#5ec8ff" opacity="0.9" />
          <circle cx="980" cy="420" r="420" fill="#ff4d9a" opacity="0.78" />
          <circle cx="800" cy="640" r="360" fill="#ffc600" opacity="0.72" />
          <circle cx="1120" cy="700" r="280" fill="#7a5cff" opacity="0.7" />
          <circle cx="760" cy="500" r="180" fill="#fff6ea" opacity="0.85" />
        </>
      );
    case "soma-sleep-lab":
      return (
        <>
          <rect width="1600" height="1000" fill="#3a0010" />
          <ellipse cx="800" cy="180" rx="920" ry="90" fill="#ff4a3a" opacity="0.35" />
          <ellipse cx="760" cy="340" rx="860" ry="78" fill="#c4102a" opacity="0.7" />
          <ellipse cx="840" cy="500" rx="900" ry="84" fill="#ff2a3c" opacity="0.55" />
          <ellipse cx="720" cy="660" rx="820" ry="70" fill="#7a0018" opacity="0.9" />
          <ellipse cx="880" cy="810" rx="940" ry="90" fill="#ff6a45" opacity="0.4" />
          <ellipse cx="800" cy="500" rx="220" ry="46" fill="#ffd0c4" opacity="0.35" />
        </>
      );
    case "somatic-states":
      return (
        <>
          <rect width="1600" height="1000" fill="#070707" />
          <circle cx="470" cy="500" r="210" fill="none" stroke="#ff3b3b" strokeWidth="18" />
          <circle cx="690" cy="430" r="180" fill="none" stroke="#ffb020" strokeWidth="16" />
          <circle cx="860" cy="580" r="230" fill="none" stroke="#ff8d9a" strokeWidth="14" />
          <circle cx="1080" cy="460" r="160" fill="none" stroke="#2ee0d0" strokeWidth="16" />
          <circle cx="980" cy="640" r="120" fill="none" stroke="#fff1df" strokeWidth="10" />
          <circle cx="690" cy="430" r="70" fill="#ffb020" opacity="0.35" />
          <circle cx="1080" cy="460" r="48" fill="#2ee0d0" opacity="0.4" />
        </>
      );
    case "have-a-wee-like-actually":
      return (
        <>
          <rect width="1600" height="1000" fill="#1c1712" />
          <polygon points="80,120 620,40 480,520" fill="#ff2bd6" opacity="0.9" />
          <polygon points="420,80 980,220 560,640" fill="#39f3ff" opacity="0.75" />
          <polygon points="860,40 1500,180 1180,620" fill="#d6ff3c" opacity="0.8" />
          <polygon points="180,420 760,360 420,960" fill="#7a5cff" opacity="0.75" />
          <polygon points="640,480 1280,420 1040,980" fill="#ffc600" opacity="0.7" />
          <polygon points="980,520 1540,640 1260,980" fill="#ff4d6d" opacity="0.85" />
          <polygon points="520,300 900,260 760,620" fill="#ffffff" opacity="0.28" />
        </>
      );
    case "feel-the-pull":
      return (
        <>
          <defs>
            <linearGradient id={`${slug}-split`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ff3b1f" />
              <stop offset="46%" stopColor="#ff8a1e" />
              <stop offset="50%" stopColor="#fff4d2" />
              <stop offset="54%" stopColor="#1aa0ff" />
              <stop offset="100%" stopColor="#1230ff" />
            </linearGradient>
          </defs>
          <rect width="1600" height="1000" fill={`url(#${slug}-split)`} />
          <path
            d="M800 40 C 980 180, 620 320, 800 500 C 980 680, 620 820, 800 980"
            fill="none"
            stroke="#fff"
            strokeWidth="3"
            opacity="0.7"
          />
          <path
            d="M800 40 C 1080 220, 520 380, 800 500 C 1080 640, 520 800, 800 980"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            opacity="0.4"
          />
          <path
            d="M800 40 C 680 200, 920 340, 800 500 C 680 660, 920 820, 800 980"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            opacity="0.4"
          />
          <circle cx="800" cy="500" r="18" fill="#fff" />
        </>
      );
    case "county-hall-shows":
      return (
        <>
          <rect width="1600" height="1000" fill="#070b16" />
          <rect x="120" y="210" width="1360" height="520" fill="#121826" />
          {Array.from({ length: 112 }).map((_, index) => {
            const column = Math.floor(index / 7);
            const row = index % 7;
            return (
              <rect
                key={index}
                x={180 + column * 78}
                y={270 + row * 58}
                width="34"
                height="36"
                fill={(column + row) % 4 === 0 ? "#ffc600" : "#243044"}
                opacity={(column * 3 + row) % 5 === 0 ? 1 : 0.55}
              />
            );
          })}
          <polygon points="0,430 1600,250 1600,560 0,760" fill="#ff2bd6" opacity="0.28" />
          <polygon points="0,520 1600,360 1600,470 0,640" fill="#39f3ff" opacity="0.22" />
          <rect y="760" width="1600" height="240" fill="#050814" />
        </>
      );
    case "hologauze-projections":
      return (
        <>
          <rect width="1600" height="1000" fill="#071018" />
          <circle cx="980" cy="500" r="340" fill="none" stroke="#d7e6ff" strokeWidth="8" opacity="0.55" />
          <circle cx="980" cy="500" r="250" fill="none" stroke="#d7e6ff" strokeWidth="2" opacity="0.35" />
          <rect x="430" y="80" width="280" height="840" fill="#f4fbff" opacity="0.16" />
          <rect x="560" y="80" width="40" height="840" fill="#ffffff" opacity="0.28" />
          <polygon points="760,430 860,500 760,570 700,500" fill="#ffc600" />
          <polygon points="860,470 1120,500 860,530" fill="#9fd6ff" opacity="0.8" />
        </>
      );
    default:
      return <rect width="1600" height="1000" fill="#111" />;
  }
}
