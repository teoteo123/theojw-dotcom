"use client";

import { InputHTMLAttributes, useState } from "react";

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export function Switch({ label, checked, disabled = false, className = "", onChange, ...rest }: SwitchProps) {
  const [internal, setInternal] = useState(false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  return (
    <label className={["tw-switch", disabled ? "tw-switch--disabled" : "", className].filter(Boolean).join(" ")}>
      <input
        type="checkbox"
        role="switch"
        checked={on}
        disabled={disabled}
        onChange={(e) => {
          if (!isControlled) setInternal(e.target.checked);
          if (onChange) onChange(e);
        }}
        {...rest}
      />
      <span className={"tw-switch__track" + (on ? " tw-switch__track--on" : "")}>
        <span className="tw-switch__thumb" />
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
