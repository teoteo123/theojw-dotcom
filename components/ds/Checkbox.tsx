"use client";

import { InputHTMLAttributes, useState } from "react";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  description?: string;
}

export function Checkbox({ label, description, checked, disabled = false, className = "", onChange, ...rest }: CheckboxProps) {
  const [internal, setInternal] = useState(false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  return (
    <label className={["tw-choice", disabled ? "tw-choice--disabled" : "", className].filter(Boolean).join(" ")}>
      <input
        type="checkbox"
        checked={on}
        disabled={disabled}
        onChange={(e) => {
          if (!isControlled) setInternal(e.target.checked);
          if (onChange) onChange(e);
        }}
        {...rest}
      />
      <span className={"tw-choice__box tw-choice__box--check" + (on ? " tw-choice__box--on" : "")}>
        {on ? (
          <span className="tw-choice__mark">
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 6.4 4.6 9 10 3.4" />
            </svg>
          </span>
        ) : null}
      </span>
      <span className="tw-choice__text">
        <span>{label}</span>
        {description ? <span className="tw-choice__desc">{description}</span> : null}
      </span>
    </label>
  );
}
