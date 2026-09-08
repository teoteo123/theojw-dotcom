"use client";

import { InputHTMLAttributes, useId } from "react";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  mono?: boolean;
}

export function Input({
  label,
  hint,
  error,
  required = false,
  size = "md",
  mono = false,
  id,
  className = "",
  ...rest
}: InputProps) {
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
      <input
        id={fid}
        className={["tw-control", "tw-control--" + size, mono ? "tw-control--mono" : "", error ? "tw-control--invalid" : ""]
          .filter(Boolean)
          .join(" ")}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error || hint ? fid + "-d" : undefined}
        required={required}
        {...rest}
      />
      {error ? (
        <div id={fid + "-d"} className="tw-field__error">
          {error}
        </div>
      ) : hint ? (
        <div id={fid + "-d"} className="tw-field__hint">
          {hint}
        </div>
      ) : null}
    </div>
  );
}
