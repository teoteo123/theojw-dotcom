"use client";

import { HTMLAttributes, useState } from "react";

export interface TabItem {
  value: string;
  label: string;
  count?: number;
  disabled?: boolean;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  items: (TabItem | string)[];
  value?: string;
  onChange?: (value: string) => void;
  variant?: "underline" | "enclosed";
}

export function Tabs({ items = [], value, onChange, variant = "underline", className = "", ...rest }: TabsProps) {
  const first = items[0] ? (typeof items[0] === "string" ? items[0] : items[0].value) : undefined;
  const [internal, setInternal] = useState(first);
  const isControlled = value !== undefined;
  const active = isControlled ? value : internal;

  const select = (v: string) => {
    if (!isControlled) setInternal(v);
    if (onChange) onChange(v);
  };

  return (
    <div
      role="tablist"
      className={["tw-tabs", variant === "enclosed" ? "tw-tabs--enclosed" : "", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {items.map((raw) => {
        const it: TabItem = typeof raw === "string" ? { value: raw, label: raw } : raw;
        return (
          <button
            key={it.value}
            role="tab"
            type="button"
            className="tw-tabs__tab"
            aria-selected={active === it.value}
            disabled={it.disabled}
            onClick={() => select(it.value)}
          >
            {it.label}
            {it.count !== undefined ? <span className="tw-tabs__count">{it.count}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
