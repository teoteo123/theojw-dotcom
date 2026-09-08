import { Button } from "@/components/ds/Button";
import { Badge } from "@/components/ds/Badge";
import { Card } from "@/components/ds/Card";
import { Stat } from "@/components/ds/Stat";
import { Tag } from "@/components/ds/Tag";
import { SectionHead } from "@/components/site/SectionHead";
import { SERVICES } from "@/data/services";
import { PROJECTS } from "@/data/projects";

const PROCESS = [
  ["01", "Scope", "A call, then a written scope with a fixed price and a date. No discovery invoice."],
  ["02", "Build", "Weekly demos on a real URL. You see the thing working before it is finished."],
  ["03", "Handover", "You get the code, the accounts and a walkthrough. Maintenance is optional, not a hostage."],
];

export default function Home() {
  return (
    <>
      <section className="wrap hero">
        <Badge tone="success" dot>
          Available for new work
        </Badge>
        <h1 className="hero__h1">Web work for businesses that need it to just work.</h1>
        <p className="hero__lead">
          Websites, dashboards, analytics and integrations for small and medium businesses. Built, launched, and
          handed over clean.
        </p>
        <div className="hero__cta">
          <Button size="lg" iconRight="arrow-right" href="/contact">
            Book an intro call
          </Button>
          <Button size="lg" variant="secondary" href="/services">
            See what I do
          </Button>
        </div>
      </section>

      <section className="wrap section--tight">
        <div className="g4">
          <Stat ruled label="Typical build" value="4–8 wks" caption="Scoped before we start" />
          <Stat ruled label="Reply time" value="<24h" caption="Business days" />
          <Stat ruled label="Handover" value="100%" caption="You own code and accounts" />
          <Stat ruled label="Engagements" value="2" caption="Project or monthly retainer" />
        </div>
      </section>

      <section className="wrap section">
        <SectionHead
          eyebrow="Services"
          title="Five things, done properly."
          aside={
            <Button variant="link" href="/services">
              All services
            </Button>
          }
        />
        <div className="g3">
          {SERVICES.map((s, i) => (
            <Card
              key={s.key}
              eyebrow={String(i + 1).padStart(2, "0") + " / " + s.label}
              title={s.headline}
              padding="md"
              interactive
              href="/services"
            >
              {s.detail}
            </Card>
          ))}
          <Card variant="accent" padding="md" title="Not sure which of these you need?">
            That is a normal place to start. Describe the problem and I will tell you which of the five it is.
            <div style={{ marginTop: "var(--space-7)" }}>
              <Button size="sm" variant="secondary" href="/contact">
                Describe the problem
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="wrap section">
        <div className="split">
          <div>
            <div className="shead__k">How it works</div>
            <h2 className="shead__t" style={{ marginTop: "var(--space-5)" }}>
              No deck, no discovery phase, no surprises.
            </h2>
          </div>
          <div className="rlist">
            {PROCESS.map(([n, t, d]) => (
              <div className="rlist__row" key={n}>
                <div className="rlist__n">{n}</div>
                <div>
                  <div className="rlist__t">{t}</div>
                  <div className="rlist__d">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap section">
        <SectionHead
          eyebrow="Selected work"
          title="Recent projects."
          aside={
            <Button variant="link" href="/work">
              All work
            </Button>
          }
        />
        <div className="g3">
          {PROJECTS.slice(0, 3).map((p) => (
            <Card key={p.key} padding="md" title={p.title} eyebrow={p.role + " · " + p.period} interactive href="/work">
              {p.description}
              <div style={{ display: "flex", gap: "var(--space-4)", marginTop: "var(--space-8)", flexWrap: "wrap" }}>
                {p.tech.slice(0, 3).map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="wrap section--tight">
        <div className="band">
          <div className="split" style={{ alignItems: "end" }}>
            <div>
              <h2 className="band__h">Tell me what is not working.</h2>
              <p className="band__p">Thirty minutes, no deck, no obligation. If it is not something I do, I will say so.</p>
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
