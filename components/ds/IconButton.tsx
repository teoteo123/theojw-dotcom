import { ButtonHTMLAttributes } from "react";
import { Icon } from "./Icon";

type Variant = "plain" | "outline" | "solid";
type Size = "sm" | "md" | "lg";

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  icon: string;
  label: string;
  variant?: Variant;
  size?: Size;
}

export function IconButton({
  icon,
  label,
  variant = "plain",
  size = "md",
  disabled = false,
  className = "",
  ...rest
}: IconButtonProps) {
  const glyph = size === "sm" ? 14 : size === "lg" ? 20 : 16;
  return (
    <button
      className={["tw-iconbtn", "tw-iconbtn--" + variant, "tw-iconbtn--" + size, className].filter(Boolean).join(" ")}
      aria-label={label}
      title={label}
      disabled={disabled}
      type="button"
      {...rest}
    >
      <Icon name={icon} size={glyph} />
    </button>
  );
}
