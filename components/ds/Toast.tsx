import { HTMLAttributes, ReactNode } from "react";
import { IconButton } from "./IconButton";

export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  message?: ReactNode;
  tone?: "default" | "success" | "danger" | "warning";
  onClose?: () => void;
}

export function Toast({ title, message, tone = "default", onClose, className = "", ...rest }: ToastProps) {
  return (
    <div className={["tw-toast", tone !== "default" ? "tw-toast--" + tone : "", className].filter(Boolean).join(" ")} role="status" {...rest}>
      <span className="tw-toast__accent" />
      <div>
        {title ? <div className="tw-toast__title">{title}</div> : null}
        {message ? <div className="tw-toast__msg">{message}</div> : null}
      </div>
      {onClose ? <IconButton className="tw-toast__close" icon="x" label="Dismiss" size="sm" onClick={onClose} /> : null}
    </div>
  );
}
