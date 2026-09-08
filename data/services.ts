/* The five services, verbatim from the Theo Wallace design system brief. */
export interface Service {
  key: string;
  label: string;
  headline: string;
  detail: string;
  deliverables: string[];
  stack: string[];
}

export const SERVICES: Service[] = [
  {
    key: "web",
    label: "Websites & web apps",
    headline: "Custom websites and web apps, built, launched, and maintained",
    detail:
      "Design, build and launch, then stay on to keep it running. You own the code and the hosting account from day one.",
    deliverables: ["Design and build", "Launch and DNS handover", "Ongoing maintenance", "Performance budget"],
    stack: ["Next.js", "React", "Postgres", "Vercel"],
  },
  {
    key: "analytics",
    label: "Analytics",
    headline: "Google Analytics and Google Tag Manager setup and handoff",
    detail:
      "A measurement plan first, then a clean GA4 and GTM implementation, documented and handed to your team.",
    deliverables: ["Measurement plan", "GA4 property setup", "GTM container and events", "Written handoff doc"],
    stack: ["GA4", "Tag Manager", "Looker Studio"],
  },
  {
    key: "dashboards",
    label: "Dashboards",
    headline: "Dashboards built to your specs, pulling from your live data",
    detail:
      "The numbers you actually run the business on, in one place, refreshed from the systems you already use.",
    deliverables: ["Metric definitions", "Live data connections", "Dashboard build", "Access and permissions"],
    stack: ["Postgres", "BigQuery", "Looker Studio", "REST APIs"],
  },
  {
    key: "cms",
    label: "CMS setups",
    headline: "CMS setups so your team can publish and edit without a developer",
    detail:
      "Editable pages with guardrails, so publishing a post or changing a headline never needs a deploy or a phone call.",
    deliverables: ["Content model", "Editor roles", "Preview and publish flow", "Team walkthrough"],
    stack: ["Sanity", "Payload", "WordPress"],
  },
  {
    key: "api",
    label: "API integrations",
    headline: "API integrations, built and deployed to connect your existing tools",
    detail:
      "Get your CRM, billing, forms and internal tools talking to each other, with error handling and logs you can read.",
    deliverables: ["Integration map", "Build and deploy", "Retries and logging", "Runbook"],
    stack: ["Node", "Webhooks", "OAuth", "Cron"],
  },
];
