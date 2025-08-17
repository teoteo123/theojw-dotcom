import Image from "next/image";

export default function Home() {
  const projects: Array<{
    title: string;
    role: string;
    period?: string;
    href?: string;
    description: string;
    highlights: string[];
    tech: string[];
  }> = [
    {
      title: "P.S.",
      role: "Founder & CTO",
      period: "Jan 2025 – Present",
      href: "https://www.ps.app",
      description:
        "Built and operate multimodal artistic agents and customer-facing personalization journeys. Own system design, order fulfillment pipelines, and internal tools for a growing e‑commerce brand.",
      highlights: [
        "GenAI experiences used by ~200 paying customers",
        "AI-in-the-loop data labeling & product generation",
        "Shopify product creation, printing, and fulfillment",
      ],
      tech: ["Next.js", "TypeScript", "Agents", "GraphQL", "AWS", "Terraform"],
    },
    {
      title: "BountyBlocks",
      role: "Co‑creator",
      period: "ETHGlobal NYC 2025",
      href: "https://ethglobal.com/showcase/bountyblocks-tjjv6",
      description:
        "Verifiable bug bounty ledger with token‑agnostic payouts and an auditable workflow built at ETHGlobal NYC.",
      highlights: [
        "Token‑agnostic payouts via on‑chain swaps",
        "Automated quotes, routing, and slippage handling",
        "Transparent, auditable bounty records",
      ],
      tech: [
        "web3",
        "Flow Actions",
        "Cadence",
        "Walrus",
        "Next.js",
        "On‑chain swaps",
      ],
    },
    {
      title: "Fake Estate",
      role: "Lead Developer",
      period: "Spring 2024",
      description:
        "Lead generation tool for real estate. Scraped and cleaned MLS data to build a vector database powering personalized recommendations.",
      highlights: ["Data scraping & cleaning", "Vector search for retrieval"],
      tech: ["Python", "Vector stores", "ETL", "RAG"],
    },
    {
      title: "Ticketmaster Bot",
      role: "Builder",
      period: "Winter 2023/24",
      description:
        "Electron desktop app that automates Ticketmaster checkout with thread‑pooled concurrency and queue handling.",
      highlights: ["Web automation", "Desktop applications"],
      tech: ["Electron", "Node.js", "TypeScript", "Python"],
    },
    {
      title: "Quikmint",
      role: "CTO",
      period: "2021 – 2022",
      href: "https://quikmint.io",
      description:
        "Stripe integration that let non‑crypto users buy and interact with Ethereum assets using only a credit card.",
      highlights: ["Stripe checkout", "Web3 UX"],
      tech: ["Next.js", "Stripe", "Solidity"],
    },
  ];

  const emphasizedSkills = new Set<string>([
    "AI Agents",
    "Full Stack",
    "System Design",
    "React/Next.js",
    "Node.js",
    "IaC/Terraform",
    "TypeScript",
    "AWS",
    "Terraform",
    "Apache Kafka",
    "E‑commerce",
    "SQL",
    "web3",
    "Python",
  ]);

  const skills: string[] = [
    // Core product/engineering
    "AI Agents",
    "Full Stack",
    "System Design",
    "React/Next.js",
    "Node.js",
    "E‑commerce",
    // Infra/data
    "AWS",
    "IaC/Terraform",
    "SQL",
    // Languages
    "TypeScript",
    "Python",
    "Java",
    "C",
    "GraphQL",
    // Extras
    "web3",
    "ZK",
  ];

  const experience: Array<{
    company: string;
    role: string;
    location?: string;
    period: string;
    bullets: string[];
    tech: string[];
  }> = [
    {
      company: "P.S. (Bootstrapped B2C Startup)",
      role: "Founder & CTO",
      location: "Palo Alto, CA",
      period: "Jan 2025 – Present",
      bullets: [
        "Designed customer‑facing AI personalization experiences",
        "Built AI‑in‑the‑loop workflows for tagging, labeling, product generation",
        "Implemented Shopify + fulfillment pipelines end‑to‑end",
      ],
      tech: [
        "Generative AI",
        "Agents",
        "Terraform",
        "Next.js",
        "GraphQL",
        "AWS",
      ],
    },
    {
      company: "LPL Financial",
      role: "Software Engineering Intern",
      location: "Fort Mill, SC",
      period: "Jun – Aug 2025",
      bullets: [
        "Broke down on‑prem monoliths into microservices with AWS Lambda and Apache Kafka",
        "Owned Terraform‑based provisioning and configuration",
        "Reduced core service outages (~54 man‑hours saved yearly)",
      ],
      tech: ["C#/.NET", "Terraform", "AWS", "Kafka", "SQL", "SDLC"],
    },
    {
      company: "Marieke Consulting, Inc",
      role: "Software Engineering Intern",
      location: "Arlington, VA",
      period: "May – Aug 2024",
      bullets: [
        "Shipped a Swift iOS app with a team of technical interns",
        "Designed and maintained a Postgres DB on AWS",
        "CI/CD with GitHub Actions to ECS; REST API with Spring Boot",
      ],
      tech: ["Swift", "SQL", "AWS", "ECS", "Spring", "GitHub Actions"],
    },
    {
      company: "Nucleo ($4M seed)",
      role: "ZK Intern",
      location: "Remote",
      period: "Apr – May 2023",
      bullets: [
        "Built apps on private blockchains using Noir and Leo",
        "Studied cryptographic signing schemes and ZK proving",
      ],
      tech: [
        "web3",
        "ZKPs",
        "Aztec",
        "Aleo",
        "Next.js",
        "DSLs",
        "ethers",
        "hardhat",
        "Solidity",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(65%_35%_at_50%_-10%,rgba(88,101,242,0.15),transparent_60%)] dark:bg-[radial-gradient(65%_35%_at_50%_-10%,rgba(88,101,242,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,transparent,rgba(0,0,0,0.06))] dark:bg-[linear-gradient(to_bottom,transparent,transparent,rgba(0,0,0,0.35))]" />
      </div>

      <main className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
        {/* Hero */}
        <section className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/40 px-3 py-1 text-xs text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500/90 ring-2 ring-emerald-500/30" />
            Status: Building P.S.
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 bg-clip-text text-transparent dark:from-white dark:via-zinc-300 dark:to-white">
              Theo Wallace
            </span>
          </h1>

          <div className="max-w-2xl space-y-4">
            <div>
              <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Education
              </div>
              <p className="text-pretty text-base text-zinc-600 sm:text-lg dark:text-zinc-300">
                Virginia Tech — B.S. Computer Science (Class of 2026)
              </p>
            </div>
            <div>
              <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Current Role
              </div>
              <p className="text-pretty text-base text-zinc-600 sm:text-lg dark:text-zinc-300">
                Co‑founder & CTO at P.S.
              </p>
            </div>
            <div className="h-px w-24 bg-gradient-to-r from-violet-400/60 to-transparent" />
            <p className="text-pretty text-base text-zinc-600 sm:text-lg dark:text-zinc-300">
              I like to build <br />- Effortless GenAI user experiences
              <br />- High-signal internal tools
              <br />- End-to-end systems that connect data preparation, AI, and
              fulfillment.
              <br />
              <br />
              Shipped with reliability, clean UX, and good docs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:twallace22@vt.edu"
              className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white ring-1 ring-zinc-800 transition hover:bg-zinc-800 dark:bg-white/10 dark:ring-white/10 dark:hover:bg-white/15"
            >
              <span>twallace22@vt.edu</span>
              <svg
                className="size-4 opacity-80 transition group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/theo-wallace-6a31241a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 backdrop-blur transition hover:bg-white/70 dark:text-zinc-100 dark:ring-white/10 dark:hover:bg-white/10"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/teoteo123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 backdrop-blur transition hover:bg-white/70 dark:text-zinc-100 dark:ring-white/10 dark:hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-16 sm:mt-24">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {projects.map(p => (
              <a
                key={`${p.title}-${p.role}`}
                href={p.href ?? undefined}
                target={p.href ? "_blank" : undefined}
                rel={p.href ? "noopener noreferrer" : undefined}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/60 p-5 ring-1 ring-black/5 backdrop-blur transition hover:shadow-xl dark:border-white/10 dark:bg-white/[0.04] dark:ring-white/10"
              >
                <div className="absolute -right-10 -top-10 size-36 rounded-full bg-violet-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                      {p.title}{" "}
                      <span className="text-zinc-500">· {p.role}</span>
                    </h3>
                    {p.period && (
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {p.period}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {p.href && (
                      <span className="rounded-full bg-zinc-900/90 px-2 py-1 text-[10px] font-medium text-white dark:bg-white/10">
                        Visit
                      </span>
                    )}
                  </div>
                </div>
                <p className="mt-3 line-clamp-3 text-sm text-zinc-600 dark:text-zinc-300">
                  {p.description}
                </p>
                {p.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
                    {p.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="mt-1 inline-block size-1.5 rounded-full bg-violet-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span
                      key={t}
                      className="rounded-full border border-zinc-200/80 bg-white/70 px-2.5 py-1 text-xs text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-16 sm:mt-24">
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Skills
          </h2>
          <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-300">
            I&apos;m strongest in these areas
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map(s => {
              const emphasized = emphasizedSkills.has(s);
              return (
                <span
                  key={s}
                  className={
                    emphasized
                      ? "relative inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-zinc-900 shadow-sm ring-1 ring-violet-500/30 dark:text-zinc-100"
                      : "inline-flex items-center rounded-full border border-zinc-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                  }
                >
                  {emphasized && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-500/15 via-fuchsia-500/10 to-cyan-500/15 blur" />
                  )}
                  {s}
                </span>
              );
            })}
          </div>
        </section>

        {/* Resume */}
        <section id="resume" className="mt-16 sm:mt-24">
          <h2 className="mb-6 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Resume
          </h2>

          <div className="rounded-2xl border border-zinc-200/70 bg-white/60 p-6 ring-1 ring-black/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:ring-white/10">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Theo Wallace
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  CS @ Virginia Tech | Co‑founder
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Education
              </h4>
              <div className="mt-2 flex flex-col gap-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">
                    Virginia Tech — B.S. Computer Science
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    2022 – Present
                  </p>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  Dean’s List
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Experience
              </h4>
              <div className="mt-3 grid grid-cols-1 gap-5">
                {experience.map(e => (
                  <div
                    key={`${e.company}-${e.role}`}
                    className="rounded-xl border border-zinc-200/70 bg-white/70 p-4 ring-1 ring-black/5 dark:border-white/10 dark:bg-white/[0.04] dark:ring-white/10"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <p className="font-medium text-zinc-900 dark:text-zinc-100">
                        {e.company} — {e.role}
                      </p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {e.period}
                      </p>
                    </div>
                    {e.location && (
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {e.location}
                      </p>
                    )}
                    <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                      {e.bullets.map(b => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-1 inline-block size-1.5 rounded-full bg-zinc-400" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {e.tech.map(t => (
                        <span
                          key={t}
                          className="rounded-full border border-zinc-200/80 bg-white px-2.5 py-1 text-xs text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* LinkedIn CTA */}
            <div className="mt-6 flex items-center justify-between rounded-xl border border-zinc-200/70 bg-white/70 p-4 ring-1 ring-black/5 dark:border-white/10 dark:bg-white/[0.04] dark:ring-white/10">
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  See more details and activity
                </p>
                <a
                  href="https://www.linkedin.com/in/theo-wallace-6a31241a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-900 underline decoration-violet-400/60 underline-offset-4 transition hover:decoration-violet-400 dark:text-zinc-100"
                >
                  View LinkedIn profile
                </a>
              </div>
              <Image
                src="/globe.svg"
                alt="LinkedIn"
                width={28}
                height={28}
                className="opacity-70"
                aria-hidden
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto mb-10 mt-16 max-w-5xl px-6 text-xs text-zinc-500 dark:text-zinc-400">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Theo Wallace</p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:twallace22@vt.edu"
              className="hover:text-zinc-700 dark:hover:text-zinc-200"
            >
              Email
            </a>
            <a
              href="https://github.com/teoteo123"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-700 dark:hover:text-zinc-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/theo-wallace-6a31241a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-700 dark:hover:text-zinc-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
