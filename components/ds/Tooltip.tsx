"use client";

import { HTMLAttributes, ReactNode, useState } from "react";

export interface TooltipProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  placement?: "top" | "bottom" | "left" | "right";
  children: ReactNode;
}

export function Tooltip({ label, placement = "top", children, className = "", ...rest }: TooltipProps) {
  const [shown, setShown] = useState(false);
  return (
    <span
      className={"tw-tooltip " + className}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      onFocus={() => setShown(true)}
      onBlur={() => setShown(false)}
      {...rest}
    >
      {children}
      {shown ? <span role="tooltip" className={"tw-tooltip__bubble tw-tooltip__bubble--" + placement}>{label}</span> : null}
    </span>
  );
}
