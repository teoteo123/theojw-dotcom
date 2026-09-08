"use client";

import { SelectHTMLAttributes, useId } from "react";
import { Icon } from "./Icon";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  options: (SelectOption | string)[];
  placeholder?: string;
}

export function Select({
  label,
  hint,
  error,
  required = false,
  size = "md",
  options = [],
  placeholder,
  id,
  className = "",
  ...rest
}: SelectProps) {
  const autoId = useId();
  const fid = id || autoId;
  return (
    <div className={"tw-field " + className}>
      {label ? (
        <label className="tw-field__label" htmlFor={fid}>
          {label}
          {required ? <span className="tw-field__req">*</span> : null}
        </label>
      ) : null}
      <span className="tw-select-wrap">
        <select
          id={fid}
          className={["tw-control", "tw-control--" + size, error ? "tw-control--invalid" : ""].filter(Boolean).join(" ")}
          aria-invalid={error ? "true" : undefined}
          required={required}
          defaultValue={placeholder ? "" : undefined}
          {...rest}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {options.map((o) => {
            const opt = typeof o === "string" ? { value: o, label: o } : o;
            return (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            );
          })}
        </select>
        <span className="tw-select-wrap__chevron">
          <Icon name="chevron-down" size={14} />
        </span>
      </span>
      {error ? <div className="tw-field__error">{error}</div> : hint ? <div className="tw-field__hint">{hint}</div> : null}
    </div>
  );
}
