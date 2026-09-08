"use client";

import { HTMLAttributes, ReactNode, useEffect } from "react";
import { IconButton } from "./IconButton";

export interface DialogProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  open?: boolean;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  size?: "default" | "wide";
  onClose?: () => void;
}

export function Dialog({
  open = true,
  title,
  description,
  children,
  footer,
  size = "default",
  onClose,
  className = "",
  ...rest
}: DialogProps) {
  useEffect(() => {
    if (!open || !onClose) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={"tw-dialog " + className}
      role="dialog"
      aria-modal="true"
      aria-label={typeof title === "string" ? title : undefined}
      {...rest}
    >
      <div className="tw-dialog__scrim" onClick={onClose} />
      <div className={"tw-dialog__panel" + (size === "wide" ? " tw-dialog__panel--wide" : "")}>
        <div className="tw-dialog__head">
          <div>
            {title ? <div className="tw-dialog__title">{title}</div> : null}
            {description ? <div className="tw-dialog__desc">{description}</div> : null}
          </div>
          {onClose ? <IconButton icon="x" label="Close" size="sm" onClick={onClose} /> : null}
        </div>
        {children ? <div className="tw-dialog__body">{children}</div> : null}
        {footer ? <div className="tw-dialog__foot">{footer}</div> : null}
      </div>
    </div>
  );
}
