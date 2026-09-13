import type { Metadata } from "next";
import { Button } from "@/components/ds/Button";
import { Card } from "@/components/ds/Card";
import { Tag } from "@/components/ds/Tag";
import { Stat } from "@/components/ds/Stat";
import { SectionHead } from "@/components/site/SectionHead";
import { Placeholder } from "@/components/site/Placeholder";
import { JsonLd } from "@/components/site/JsonLd";
import { EXPERIENCE, SKILLS } from "@/data/projects";
import { PERSON_JSON_LD } from "@/data/site";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "Software engineer and independent consultant. Sites, dashboards, analytics and integrations for small and growing businesses.",
  path: "/about",
});

const PRINCIPLES = [
  ["You own everything", "Code, hosting, analytics and CMS accounts are in your name from the first day, not mine."],
  [
    "Written scope first",
    "A fixed price and a date before work starts. If scope changes, that is a new sentence in the document, not a surprise invoice.",
  ],
  ["Plain language", "No stack opinions you did not ask for. I will tell you what it does and what it costs to keep running."],
  ["Handover is the deliverable", "A build nobody on your team can edit is not finished."],
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={PERSON_JSON_LD} />
      <section className="wrap hero" style={{ paddingBottom: "var(--space-11)" }}>
        <div className="shead__k">About</div>
        <h1 className="hero__h1">A software engineer who still builds on the side.</h1>
      </section>

      <section className="wrap" style={{ paddingBottom: "var(--section-y)" }}>
        <div className="split">
          <Placeholder height={340} caption="Portrait, coming soon" />
          <div>
            <p style={{ font: "var(--type-body-lg)", color: "var(--text-body)" }}>
              I&apos;m Theo Wallace, a software engineer and independent consultant. I&apos;m a recent Virginia
              Tech computer science grad, and I take on projects like this one on the side, nights and weekends.
            </p>
            <p style={{ font: "var(--type-body)", color: "var(--text-muted)", marginTop: "var(--space-7)" }}>
              I got here through my own projects. It started with Quikmint, a Stripe-to-crypto checkout I built in
              high school, and it kept going through P.S., the startup that taught me how to operate, and still
              ship, when nothing about the situation was certain. Now I build and maintain software for small and
              growing businesses: sites, dashboards, analytics setups, and the integrations that connect the tools
              you already pay for.
            </p>
            <div style={{ display: "flex", gap: "var(--space-4)", marginTop: "var(--space-9)", flexWrap: "wrap" }}>
              {SKILLS.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <div className="g3" style={{ marginTop: "var(--space-11)" }}>
              <Stat ruled size="sm" label="Based in" value="Raleigh, NC" caption="Open to remote work" />
              <Stat ruled size="sm" label="Building since" value="2021" caption="Quikmint onward" />
              <Stat ruled size="sm" label="School" value="VT '26" caption="B.S. Computer Science" />
            </div>
          </div>
        </div>
      </section>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <SectionHead eyebrow="Early career" title="Where the experience came from." />
        <div className="rlist">
          {EXPERIENCE.map((e) => (
            <div className="rlist__row" key={e.company}>
              <div className="rlist__n">{e.period}</div>
              <div>
                <div className="rlist__t">
                  {e.role} · {e.company}
                </div>
                {e.location ? <div className="rlist__d" style={{ marginTop: 0 }}>{e.location}</div> : null}
                <ul style={{ margin: "var(--space-4) 0 0", padding: 0, listStyle: "none" }}>
                  {e.bullets.map((b) => (
                    <li key={b} className="rlist__d" style={{ marginTop: "var(--space-2)" }}>
                      • {b}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-6)", flexWrap: "wrap" }}>
                  {e.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section" style={{ paddingTop: 0 }}>
        <SectionHead eyebrow="How I work" title="A few things I care about." />
        <div className="g2">
          {PRINCIPLES.map(([t, d], i) => (
            <Card key={t} eyebrow={String(i + 1).padStart(2, "0")} title={t} padding="md">
              {d}
            </Card>
          ))}
        </div>
      </section>

      <section className="wrap section--tight">
        <div className="band">
          <h2 className="band__h">Still reading? Let&apos;s talk.</h2>
          <p className="band__p">Reach out and I&apos;ll let you know if I&apos;m the right fit.</p>
          <div style={{ marginTop: "var(--space-9)" }}>
            <Button size="lg" variant="inverse" iconRight="arrow-right" href="/contact">
              Get in touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
