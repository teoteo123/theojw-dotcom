import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

type Variant = "default" | "flat" | "sunken" | "inverse" | "accent";
type Padding = "none" | "sm" | "md" | "lg";

interface CommonProps {
  eyebrow?: ReactNode;
  title?: ReactNode;
  variant?: Variant;
  padding?: Padding;
  interactive?: boolean;
  footer?: ReactNode;
  className?: string;
  children?: ReactNode;
}

type DivProps = CommonProps & HTMLAttributes<HTMLDivElement> & { href?: undefined };
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Card(props: DivProps | LinkProps) {
  const {
    children,
    eyebrow,
    title,
    variant = "default",
    padding = "md",
    interactive = false,
    footer,
    className = "",
    ...rest
  } = props;

  const cls = [
    "tw-card",
    variant !== "default" ? "tw-card--" + variant : "",
    "tw-card--pad-" + padding,
    interactive || ("href" in props && props.href) ? "tw-card--interactive" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {eyebrow ? <div className="tw-card__eyebrow">{eyebrow}</div> : null}
      {title ? <h3 className="tw-card__title">{title}</h3> : null}
      {children ? <div className="tw-card__body">{children}</div> : null}
      {footer ? <div className="tw-card__footer">{footer}</div> : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a className={cls} href={href} {...anchorRest}>
        {inner}
      </a>
    );
  }
  return (
    <div className={cls} {...(rest as HTMLAttributes<HTMLDivElement>)}>
      {inner}
    </div>
  );
}
