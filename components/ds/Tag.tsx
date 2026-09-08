import { ButtonHTMLAttributes, HTMLAttributes, MouseEvent } from "react";
import { Icon } from "./Icon";

interface TagOwnProps {
  selected?: boolean;
  onRemove?: (e: MouseEvent) => void;
  className?: string;
}

type TagProps = TagOwnProps &
  (
    | (HTMLAttributes<HTMLSpanElement> & { onClick?: undefined })
    | (ButtonHTMLAttributes<HTMLButtonElement> & { onClick: (e: MouseEvent) => void })
  );

export function Tag(props: TagProps) {
  const { children, selected = false, onRemove, className = "", onClick, ...rest } = props;

  const cls = ["tw-tag", selected ? "tw-tag--selected" : "", onClick ? "tw-tag--clickable" : "", className]
    .filter(Boolean)
    .join(" ");

  const body = (
    <>
      {children}
      {onRemove ? (
        <span
          className="tw-tag__remove"
          role="button"
          tabIndex={0}
          aria-label="Remove"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(e);
          }}
        >
          <Icon name="x" size={11} />
        </span>
      ) : null}
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        className={cls}
        aria-pressed={selected}
        onClick={onClick}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {body}
      </button>
    );
  }
  return (
    <span className={cls} {...(rest as HTMLAttributes<HTMLSpanElement>)}>
      {body}
    </span>
  );
}
