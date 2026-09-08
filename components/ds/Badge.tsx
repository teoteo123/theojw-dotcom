import { HTMLAttributes } from "react";

type Tone = "neutral" | "accent" | "success" | "warning" | "danger" | "info" | "outline";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  dot?: boolean;
}

export function Badge({ children, tone = "neutral", dot = false, className = "", ...rest }: BadgeProps) {
  return (
    <span className={["tw-badge", "tw-badge--" + tone, className].filter(Boolean).join(" ")} {...rest}>
      {dot ? <span className="tw-badge__dot" /> : null}
      {children}
    </span>
  );
}
