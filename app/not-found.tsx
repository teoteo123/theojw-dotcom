import { Button } from "@/components/ds/Button";
import { Card } from "@/components/ds/Card";
import { Icon } from "@/components/ds/Icon";

export default function NotFound() {
  return (
    <section className="wrap hero" style={{ paddingBottom: "var(--section-y)" }}>
      <Card padding="lg" style={{ maxWidth: 480 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-5)", marginBottom: "var(--space-7)" }}>
          <span style={{ color: "var(--accent)" }}>
            <Icon name="search-x" size={22} />
          </span>
          <div className="shead__k" style={{ margin: 0 }}>
            404
          </div>
        </div>
        <h1 className="hero__h1" style={{ font: "var(--type-heading-1)" }}>
          This page is not here.
        </h1>
        <p className="hero__lead" style={{ marginTop: "var(--space-6)" }}>
          The link may be old, or the page may have moved. Start from the home page and go from there.
        </p>
        <div className="hero__cta" style={{ marginTop: "var(--space-9)" }}>
          <Button size="lg" iconLeft="arrow-left" href="/">
            Back to home
          </Button>
          <Button size="lg" variant="secondary" href="/contact">
            Get in touch
          </Button>
        </div>
      </Card>
    </section>
  );
}
