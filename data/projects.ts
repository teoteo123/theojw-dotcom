/* Real projects. Replaces the design system's placeholder work cards. */
export interface Project {
  key: string;
  title: string;
  role: string;
  period: string;
  href?: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export const PROJECTS: Project[] = [
  {
    key: "jack-nelson-art",
    title: "Jack Nelson Art Portfolio",
    role: "Designer & Developer",
    period: "2026",
    href: "https://www.jacknelsonart.com/",
    description:
      "Portfolio site for the artist Jack Nelson. Designed, built, and deployed the site, then set up Google Analytics and Google Tag Manager and configured a CMS so he can upload new artwork himself.",
    highlights: [
      "Designed, built, and deployed end to end",
      "Google Analytics and Google Tag Manager integration",
      "CMS configured for artwork uploads",
    ],
    tech: ["Google Analytics", "Google Tag Manager", "CMS"],
  },
  {
    key: "ps",
    title: "P.S.",
    role: "Founder & CTO",
    period: "Jan 2025 – Nov 2025",
    href: "https://www.ps.app",
    description:
      "Multimodal artistic agents and customer-facing personalization journeys for a growing e-commerce brand. Owned system design, order fulfillment pipelines, and internal tools.",
    highlights: [
      "GenAI experiences used by ~200 paying customers",
      "AI-in-the-loop data labeling and product generation",
      "Shopify product creation, printing, and fulfillment",
    ],
    tech: ["Next.js", "TypeScript", "Agents", "GraphQL", "AWS", "Terraform"],
  },
  {
    key: "bountyblocks",
    title: "BountyBlocks",
    role: "Co-creator",
    period: "ETHGlobal NYC 2025",
    href: "https://ethglobal.com/showcase/bountyblocks-tjjv6",
    description:
      "Verifiable bug bounty ledger with token-agnostic payouts and an auditable workflow, built at ETHGlobal NYC.",
    highlights: [
      "Token-agnostic payouts via on-chain swaps",
      "Automated quotes, routing, and slippage handling",
      "Transparent, auditable bounty records",
    ],
    tech: ["web3", "Flow Actions", "Cadence", "Walrus", "Next.js", "On-chain swaps"],
  },
  {
    key: "fake-estate",
    title: "Fake Estate",
    role: "Lead Developer",
    period: "Spring 2024",
    description:
      "Lead generation tool for real estate. Scraped and cleaned MLS data to build a vector database powering personalized recommendations.",
    highlights: ["Data scraping and cleaning", "Vector search for retrieval"],
    tech: ["Python", "Vector stores", "ETL", "RAG"],
  },
  {
    key: "ticketmaster-bot",
    title: "Ticketmaster Bot",
    role: "Builder",
    period: "Winter 2023/24",
    description:
      "Electron desktop app that automates Ticketmaster checkout with thread-pooled concurrency and queue handling.",
    highlights: ["Web automation", "Desktop applications"],
    tech: ["Electron", "Node.js", "TypeScript", "Python"],
  },
  {
    key: "quikmint",
    title: "Quikmint",
    role: "CTO",
    period: "2021 – 2022",
    href: "https://quikmint.io",
    description:
      "Stripe integration that let non-crypto users buy and interact with Ethereum assets using only a credit card.",
    highlights: ["Stripe checkout", "Web3 UX"],
    tech: ["Next.js", "Stripe", "Solidity"],
  },
];

export interface ExperienceEntry {
  company: string;
  role: string;
  location?: string;
  period: string;
  bullets: string[];
  tech: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "P.S. (bootstrapped B2C startup)",
    role: "Founder & CTO",
    location: "Palo Alto, CA",
    period: "Jan 2025 – Nov 2025",
    bullets: [
      "Designed customer-facing AI personalization experiences",
      "Built AI-in-the-loop workflows for tagging, labeling, product generation",
      "Implemented Shopify and fulfillment pipelines end-to-end",
    ],
    tech: ["Generative AI", "Agents", "Terraform", "Next.js", "GraphQL", "AWS"],
  },
  {
    company: "LPL Financial",
    role: "Software Engineering Intern",
    location: "Fort Mill, SC",
    period: "Jun – Aug 2025",
    bullets: [
      "Broke down on-prem monoliths into microservices with AWS Lambda and Apache Kafka",
      "Owned Terraform-based provisioning and configuration",
      "Reduced core service outages (~54 engineer-hours saved yearly)",
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
      "Designed and maintained a Postgres database on AWS",
      "CI/CD with GitHub Actions to ECS; REST API with Spring Boot",
    ],
    tech: ["Swift", "SQL", "AWS", "ECS", "Spring", "GitHub Actions"],
  },
];

export const SKILLS: string[] = [
  "Web Development",
  "Project Management",
  "Google Analytics",
  "Dashboards",
  "Content Management Systems (CMS)",
  "Google Tag Manager",
  "Debugging",
  "Troubleshooting",
  "Generative AI",
  "User Experience (UX)",
  "Cloud Applications",
];
