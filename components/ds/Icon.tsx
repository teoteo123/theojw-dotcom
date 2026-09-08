import { CSSProperties } from "react";

const LUCIDE_BASE = "https://unpkg.com/lucide-static/icons/";

export interface IconProps {
  name: string;
  size?: number;
  src?: string;
  label?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Thin wrapper over the Lucide outline set. The glyph is applied as a CSS mask
 * so it inherits currentColor and can never fight the palette.
 */
export function Icon({ name, size = 16, src, label, className = "", style }: IconProps) {
  const url = src || LUCIDE_BASE + name + ".svg";
  return (
    <span
      className={"tw-icon " + className}
      role={label ? "img" : "presentation"}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : "true"}
      style={{
        width: size,
        height: size,
        WebkitMaskImage: `url(${url})`,
        maskImage: `url(${url})`,
        ...style,
      }}
    />
  );
}
