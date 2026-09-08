"use client";

import { useState, FormEvent } from "react";
import { Card } from "@/components/ds/Card";
import { Badge } from "@/components/ds/Badge";
import { Icon } from "@/components/ds/Icon";
import { Input } from "@/components/ds/Input";
import { Textarea } from "@/components/ds/Textarea";
import { Select } from "@/components/ds/Select";
import { Checkbox } from "@/components/ds/Checkbox";
import { Radio } from "@/components/ds/Radio";
import { Switch } from "@/components/ds/Switch";
import { Dialog } from "@/components/ds/Dialog";
import { Toast } from "@/components/ds/Toast";
import { Tooltip } from "@/components/ds/Tooltip";
import { IconButton } from "@/components/ds/IconButton";
import { Button } from "@/components/ds/Button";
import { SERVICES } from "@/data/services";
import { CONTACT } from "@/data/site";

export default function ContactPage() {
  const [engagement, setEngagement] = useState("project");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Enter an email so I can reply.");
      return;
    }
    setError("");
    setConfirm(true);
  };

  return (
    <>
      <section className="wrap hero" style={{ paddingBottom: "var(--space-11)" }}>
        <div className="shead__k">Contact</div>
        <h1 className="hero__h1">Let&apos;s talk about what you need.</h1>
        <p className="hero__lead">I read every one of these myself and reply within one business day.</p>
      </section>

      <section className="wrap" style={{ paddingBottom: "var(--section-y)" }}>
        <div className="split">
          <div style={{ display: "grid", gap: "var(--space-8)", alignContent: "start" }}>
            <Card variant="sunken" padding="md" title="Before you write">
              <div style={{ display: "grid", gap: "var(--space-5)", marginTop: "var(--space-5)" }}>
                {["What is broken or missing today", "Roughly when you need it live", "Who on your team will own it after"].map(
                  (t) => (
                    <div key={t} style={{ display: "flex", gap: "var(--space-5)" }}>
                      <span style={{ color: "var(--accent)", marginTop: 2 }}>
                        <Icon name="corner-down-right" size={15} />
                      </span>
                      <span>{t}</span>
                    </div>
                  )
                )}
              </div>
            </Card>
            <Card padding="md" title="Availability">
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-5)", marginTop: "var(--space-5)" }}>
                <Badge tone="success" dot>
                  Taking new work
                </Badge>
                <Tooltip label="Updated weekly" placement="right">
                  <IconButton icon="info" label="Availability info" size="sm" />
                </Tooltip>
              </div>
              <div
                style={{
                  marginTop: "var(--space-6)",
                  display: "grid",
                  gap: "var(--space-3)",
                  font: "var(--type-mono-sm)",
                  color: "var(--text-subtle)",
                }}
              >
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/theo-wallace
                </a>
                <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
                  github.com/teoteo123
                </a>
              </div>
            </Card>
          </div>

          <Card padding="lg">
            <form onSubmit={submit} style={{ display: "grid", gap: "var(--space-8)" }}>
              <div className="g2">
                <Input label="Name" required placeholder="Your name" />
                <Input
                  label="Email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  error={error}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="g2">
                <Input label="Company" placeholder="Company name (optional)" />
                <Input label="Site URL" mono placeholder="https://" hint="If you already have one" />
              </div>
              <Select
                label="What do you need?"
                required
                placeholder="Pick the closest match"
                options={SERVICES.map((s) => ({ value: s.key, label: s.label })).concat([{ value: "other", label: "Not sure yet" }])}
              />
              <div style={{ display: "grid", gap: "var(--space-5)" }}>
                <div className="tw-field__label">Engagement</div>
                <Radio
                  name="engagement"
                  value="project"
                  label="One-off project"
                  description="Fixed scope, fixed price."
                  checked={engagement === "project"}
                  onChange={() => setEngagement("project")}
                />
                <Radio
                  name="engagement"
                  value="retainer"
                  label="Monthly retainer"
                  description="Ongoing hours for changes and monitoring."
                  checked={engagement === "retainer"}
                  onChange={() => setEngagement("retainer")}
                />
              </div>
              <Textarea label="What are you trying to build?" required rows={5} hint="A few sentences is plenty." />
              <div style={{ display: "grid", gap: "var(--space-6)" }}>
                <Checkbox label="Include ongoing maintenance in the quote" />
                <Switch label="Copy me on the reply" />
              </div>
              <div style={{ display: "flex", gap: "var(--space-5)", alignItems: "center" }}>
                <Button type="submit" size="lg" iconRight="arrow-right">
                  Send it
                </Button>
                <span style={{ font: "var(--type-caption)", color: "var(--text-subtle)" }}>No newsletter, no CRM sequence.</span>
              </div>
            </form>
          </Card>
        </div>
      </section>

      <Dialog
        open={confirm}
        onClose={() => setConfirm(false)}
        title="Send this to Theo?"
        description="You will get a reply within one business day."
        footer={
          <>
            <Button variant="ghost" onClick={() => setConfirm(false)}>
              Keep editing
            </Button>
            <Button
              onClick={() => {
                setConfirm(false);
                setSent(true);
              }}
            >
              Send request
            </Button>
          </>
        }
      >
        <div style={{ font: "var(--type-body-sm)", color: "var(--text-muted)" }}>
          Sending to <strong>{email || "your email"}</strong> as a{" "}
          {engagement === "project" ? "one-off project" : "monthly retainer"} enquiry.
        </div>
      </Dialog>

      {sent ? (
        <div style={{ position: "fixed", right: "var(--space-9)", bottom: "var(--space-9)", zIndex: 70 }}>
          <Toast tone="success" title="Request sent" message="I'll reply within one business day." onClose={() => setSent(false)} />
        </div>
      ) : null}
    </>
  );
}
