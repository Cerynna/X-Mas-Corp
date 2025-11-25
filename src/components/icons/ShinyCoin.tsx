
interface ShinyCoinProps {
  color?: string;
  size?: number;
}

// Utilitaire pour assombrir ou éclaircir une couleur hex
function shadeColor(hex: string, percent: number): string {
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  }
  r = Math.min(255, Math.max(0, Math.round(r + (percent / 100) * 255)));
  g = Math.min(255, Math.max(0, Math.round(g + (percent / 100) * 255)));
  b = Math.min(255, Math.max(0, Math.round(b + (percent / 100) * 255)));
  return `rgb(${r},${g},${b})`;
}

export function ShinyCoin({ color = "#FFD700", size = 48 }: ShinyCoinProps) {
  // Couleur du contour (plus foncée)
  const strokeColor = shadeColor(color, -30);
  // Couleur du reflet (plus claire)
  const highlightColor = shadeColor(color, 40);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="32"
        cy="32"
        r="28"
        fill={color}
        stroke={strokeColor}
        strokeWidth="4"
        filter="url(#glow)"
      />
      <ellipse
        cx="32"
        cy="32"
        rx="22"
        ry="22"
        fill={highlightColor}
        opacity="0.15"
      />
      <ellipse
        cx="40"
        cy="24"
        rx="8"
        ry="4"
        fill={highlightColor}
        opacity="0.5"
      />
      <ellipse
        cx="24"
        cy="44"
        rx="6"
        ry="2.5"
        fill={highlightColor}
        opacity="0.3"
      />
      <defs>
        <filter id="glow" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="3" result="blur" />
        </filter>
      </defs>
    </svg>
  );
}
