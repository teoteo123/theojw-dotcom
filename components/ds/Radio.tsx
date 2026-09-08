import { InputHTMLAttributes } from "react";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  description?: string;
}

export function Radio({ label, description, name, value, checked, disabled = false, className = "", ...rest }: RadioProps) {
  return (
    <label className={["tw-choice", disabled ? "tw-choice--disabled" : "", className].filter(Boolean).join(" ")}>
      <input type="radio" name={name} value={value} checked={checked} disabled={disabled} readOnly={!rest.onChange} {...rest} />
      <span className={"tw-choice__box tw-choice__box--radio" + (checked ? " tw-choice__box--on" : "")}>
        {checked ? <span className="tw-choice__dot" /> : null}
      </span>
      <span className="tw-choice__text">
        <span>{label}</span>
        {description ? <span className="tw-choice__desc">{description}</span> : null}
      </span>
    </label>
  );
}
