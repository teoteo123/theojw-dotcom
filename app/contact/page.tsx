"use client";

import { useState, FormEvent } from "react";
import { Card } from "@/components/ds/Card";
import { Badge } from "@/components/ds/Badge";
import { Input } from "@/components/ds/Input";
import { Textarea } from "@/components/ds/Textarea";
import { Toast } from "@/components/ds/Toast";
import { Button } from "@/components/ds/Button";
import { CONTACT } from "@/data/site";

type FormStatus = "idle" | "pending" | "sent";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const MAILTO_HREF = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Project enquiry")}`;

function validate(fields: { name: string; email: string; message: string }): FieldErrors {
  const next: FieldErrors = {};
  if (!fields.name.trim()) next.name = "Add your name so I know who I am talking to.";
  if (!fields.email.trim() || !fields.email.includes("@")) next.email = "Enter an email so I can reply.";
  if (!fields.message.trim()) next.message = "A few sentences about what you need is enough.";
  return next;
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const next = validate({ name, email, message });
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("pending");
    // Idle → pending → sent. Swap this yield for a real fetch later.
    await Promise.resolve();
    setStatus("sent");
    setName("");
    setEmail("");
    setMessage("");
  };

  const pending = status === "pending";

  return (
    <>
      <section className="wrap hero" style={{ paddingBottom: "var(--space-11)" }}>
        <div className="shead__k">Contact</div>
        <h1 className="hero__h1">Let&apos;s talk about what you need.</h1>
        <p className="hero__lead">I read every message myself and reply within one business day.</p>
      </section>

      <section className="wrap" style={{ paddingBottom: "var(--section-y)" }}>
        <div className="split">
          <div style={{ display: "grid", gap: "var(--space-8)", alignContent: "start" }}>
            <Card padding="md" title="Prefer email?">
              <p style={{ marginTop: "var(--space-5)", marginBottom: 0 }}>
                Opens your mail app with my address already filled in. Same reply time either way.
              </p>
              <div style={{ marginTop: "var(--space-7)" }}>
                <Button size="lg" variant="secondary" iconLeft="mail" href={MAILTO_HREF} target="_blank" rel="noopener noreferrer">
                  Email me
                </Button>
              </div>
              <div
                style={{
                  marginTop: "var(--space-7)",
                  display: "grid",
                  gap: "var(--space-3)",
                  font: "var(--type-mono-sm)",
                  color: "var(--text-subtle)",
                }}
              >
                <a href={MAILTO_HREF} target="_blank" rel="noopener noreferrer">
                  {CONTACT.email}
                </a>
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </Card>

            <Card variant="sunken" padding="md" title="Availability">
              <div style={{ marginTop: "var(--space-5)" }}>
                <Badge tone="success" dot>
                  Taking new work
                </Badge>
              </div>
              <p style={{ marginTop: "var(--space-6)", marginBottom: 0, font: "var(--type-body-sm)", color: "var(--text-muted)" }}>
                What is broken or missing, roughly when you need it, and who will own it after is plenty to start.
              </p>
            </Card>
          </div>

          <Card padding="lg">
            <form noValidate onSubmit={submit} style={{ display: "grid", gap: "var(--space-8)" }}>
              <Input
                label="Name"
                required
                autoComplete="name"
                placeholder="Your name"
                value={name}
                error={errors.name}
                disabled={pending}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                }}
              />
              <Input
                label="Email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                value={email}
                error={errors.email}
                disabled={pending}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                }}
              />
              <Textarea
                label="Message"
                required
                rows={6}
                hint="A few sentences is plenty."
                placeholder="What are you trying to build or fix?"
                value={message}
                error={errors.message}
                disabled={pending}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                }}
              />
              <div style={{ display: "flex", gap: "var(--space-5)", alignItems: "center", flexWrap: "wrap" }}>
                <Button type="submit" size="lg" iconRight={pending ? undefined : "arrow-right"} disabled={pending}>
                  {pending ? "Sending…" : "Send it"}
                </Button>
                <span style={{ font: "var(--type-caption)", color: "var(--text-subtle)" }}>
                  No newsletter. I only use this to reply.
                </span>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {status === "sent" ? (
        <div style={{ position: "fixed", right: "var(--space-9)", bottom: "var(--space-9)", zIndex: 70 }}>
          <Toast
            tone="success"
            title="Message sent"
            message="I'll reply within one business day."
            onClose={() => setStatus("idle")}
          />
        </div>
      ) : null}
    </>
  );
}
