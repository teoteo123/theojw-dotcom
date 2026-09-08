import { HTMLAttributes, ReactNode } from "react";

export interface StatProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  value: ReactNode;
  caption?: ReactNode;
  size?: "sm" | "lg";
  ruled?: boolean;
}

export function Stat({ label, value, caption, size = "lg", ruled = false, className = "", ...rest }: StatProps) {
  return (
    <div className={["tw-stat", ruled ? "tw-stat--ruled" : "", className].filter(Boolean).join(" ")} {...rest}>
      {label ? <div className="tw-stat__label">{label}</div> : null}
      <div className={"tw-stat__value" + (size === "sm" ? " tw-stat__value--sm" : "")}>{value}</div>
      {caption ? <div className="tw-stat__caption">{caption}</div> : null}
    </div>
  );
}
