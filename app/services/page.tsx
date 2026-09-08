"use client";

import { useState } from "react";
import { Button } from "@/components/ds/Button";
import { Card } from "@/components/ds/Card";
import { Tag } from "@/components/ds/Tag";
import { Icon } from "@/components/ds/Icon";
import { Badge } from "@/components/ds/Badge";
import { Tabs } from "@/components/ds/Tabs";
import { SectionHead } from "@/components/site/SectionHead";
import { SERVICES } from "@/data/services";

export default function ServicesPage() {
  const [active, setActive] = useState(SERVICES[0].key);
  const svc = SERVICES.find((s) => s.key === active) || SERVICES[0];

  return (
    <>
      <section className="wrap hero" style={{ paddingBottom: "var(--space-11)" }}>
        <div className="shead__k">Services</div>
        <h1 className="hero__h1">Websites, dashboards, analytics, and the integrations that connect them.</h1>
        <p className="hero__lead">Pick the one that sounds like your problem, or describe it and I will place it.</p>
      </section>

      <section className="wrap" style={{ paddingBottom: "var(--section-y)" }}>
        <Tabs items={SERVICES.map((s) => ({ value: s.key, label: s.label }))} value={active} onChange={setActive} />

        <div className="split" style={{ marginTop: "var(--space-11)" }}>
          <div>
            <h2 className="shead__t">{svc.headline}</h2>
            <p style={{ font: "var(--type-body-lg)", color: "var(--text-muted)", marginTop: "var(--space-7)" }}>
              {svc.detail}
            </p>
            <div style={{ display: "flex", gap: "var(--space-4)", marginTop: "var(--space-9)", flexWrap: "wrap" }}>
              {svc.stack.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <div style={{ marginTop: "var(--space-10)" }}>
              <Button iconRight="arrow-right" href="/contact">
                Start with this
              </Button>
            </div>
          </div>

          <div className="g2">
            <Card title="What you get" padding="md">
              <div style={{ display: "grid", gap: "var(--space-5)", marginTop: "var(--space-5)" }}>
                {svc.deliverables.map((d) => (
                  <div key={d} style={{ display: "flex", gap: "var(--space-5)", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent)", marginTop: 2 }}>
                      <Icon name="check" size={15} />
                    </span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card variant="sunken" title="How it is priced" padding="md">
              <div style={{ display: "grid", gap: "var(--space-6)", marginTop: "var(--space-5)" }}>
                <div>
                  <Badge tone="outline">Project</Badge>
                  <div style={{ marginTop: "var(--space-4)" }}>Fixed price agreed in writing before any work starts.</div>
                </div>
                <div>
                  <Badge tone="accent">Retainer</Badge>
                  <div style={{ marginTop: "var(--space-4)" }}>
                    A monthly block of hours for changes, monitoring and small builds.
                  </div>
                </div>
                <div style={{ font: "var(--type-mono-sm)", color: "var(--text-subtle)" }}>
                  Rates are quoted per engagement after a scoping call.
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <SectionHead eyebrow="All five" title="The full list, in plain terms." />
        <div className="rlist">
          {SERVICES.map((s, i) => (
            <div className="rlist__row rlist__row--action" key={s.key}>
              <div className="rlist__n">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <div className="rlist__t">{s.headline}</div>
                <div className="rlist__d">{s.detail}</div>
              </div>
              <Button variant="link" onClick={() => setActive(s.key)}>
                Details
              </Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
