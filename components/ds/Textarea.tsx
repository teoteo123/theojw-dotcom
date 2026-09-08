"use client";

import { TextareaHTMLAttributes, useId } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export function Textarea({ label, hint, error, required = false, rows = 5, id, className = "", ...rest }: TextareaProps) {
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
      <textarea
        id={fid}
        rows={rows}
        className={["tw-control", "tw-textarea", error ? "tw-control--invalid" : ""].filter(Boolean).join(" ")}
        aria-invalid={error ? "true" : undefined}
        required={required}
        {...rest}
      />
      {error ? <div className="tw-field__error">{error}</div> : hint ? <div className="tw-field__hint">{hint}</div> : null}
    </div>
  );
}
