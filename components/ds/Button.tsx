import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "accent" | "secondary" | "ghost" | "inverse" | "danger" | "link";
type Size = "sm" | "md" | "lg";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  iconLeft?: string;
  iconRight?: string;
  block?: boolean;
  className?: string;
}

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
    href?: undefined;
    type?: "button" | "submit" | "reset";
  };

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function Button(props: ButtonProps | LinkProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    iconLeft,
    iconRight,
    block = false,
    className = "",
    ...rest
  } = props;

  const cls = [
    "tw-btn",
    "tw-btn--" + variant,
    variant !== "link" ? "tw-btn--" + size : "",
    block ? "tw-btn--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const glyph = size === "sm" ? 14 : 16;
  const inner = (
    <>
      {iconLeft ? <Icon name={iconLeft} size={glyph} /> : null}
      {children}
      {iconRight ? <Icon name={iconRight} size={glyph} /> : null}
    </>
  );

  if ("href" in props && props.href && !(rest as ButtonHTMLAttributes<HTMLButtonElement>).disabled) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a className={cls} href={href} {...anchorRest}>
        {inner}
      </a>
    );
  }

  const { type = "button", disabled = false, ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={cls} type={type} disabled={disabled} {...buttonRest}>
      {inner}
    </button>
  );
}
