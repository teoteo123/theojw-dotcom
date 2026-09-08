import type { Metadata } from "next";
import { Button } from "@/components/ds/Button";
import { Card } from "@/components/ds/Card";
import { Tag } from "@/components/ds/Tag";
import { Icon } from "@/components/ds/Icon";
import { Placeholder } from "@/components/site/Placeholder";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = { title: "Work | Theo Wallace" };

export default function WorkPage() {
  return (
    <>
      <section className="wrap hero" style={{ paddingBottom: "var(--space-11)" }}>
        <div className="shead__k">Work</div>
        <h1 className="hero__h1">A look at what I&apos;ve built.</h1>
        <p className="hero__lead">
          A working sample of what I&apos;ve built: products I founded, contract work, and a few things built for
          fun at hackathons.
        </p>
      </section>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div className="g3">
          {PROJECTS.map((p) => (
            <Card key={p.key} padding="none" interactive={Boolean(p.href)} href={p.href}>
              <Placeholder height={170} caption={p.title + ", screenshot coming soon"} />
              <div style={{ padding: "var(--space-8)" }}>
                <div className="tw-card__eyebrow">
                  {p.role} · {p.period}
                </div>
                <div className="tw-card__title" style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                  {p.title}
                  {p.href ? <Icon name="arrow-up-right" size={16} /> : null}
                </div>
                <div className="tw-card__body">{p.description}</div>
                <ul style={{ margin: "var(--space-6) 0 0", padding: 0, listStyle: "none" }}>
                  {p.highlights.map((h) => (
                    <li key={h} className="tw-card__body" style={{ marginTop: "var(--space-2)" }}>
                      • {h}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", gap: "var(--space-4)", marginTop: "var(--space-8)", flexWrap: "wrap" }}>
                  {p.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="wrap section--tight">
        <div className="band">
          <div className="split" style={{ alignItems: "end" }}>
            <div>
              <h2 className="band__h">Want something built like this?</h2>
              <p className="band__p">Tell me the outcome you need and I&apos;ll tell you what it takes to get there.</p>
            </div>
            <div style={{ display: "flex", gap: "var(--space-5)", justifyContent: "flex-end", flexWrap: "wrap" }}>
              <Button size="lg" variant="inverse" iconRight="arrow-right" href="/contact">
                Book an intro call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
