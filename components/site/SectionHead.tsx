import { ReactNode } from "react";

export function SectionHead({ eyebrow, title, aside }: { eyebrow?: ReactNode; title: ReactNode; aside?: ReactNode }) {
  return (
    <div className="shead">
      <div>
        {eyebrow ? <div className="shead__k">{eyebrow}</div> : null}
        <h2 className="shead__t">{title}</h2>
      </div>
      {aside ? <div>{aside}</div> : null}
    </div>
  );
}
