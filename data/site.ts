export const SITE_URL = "https://theojw.com";

export const SITE_NAME = "Theo Wallace";

export const SITE_DESCRIPTION =
  "Web and AI engineering for small and medium businesses. Sites, dashboards, analytics and integrations — built, launched, and handed over clean.";

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
] as const;

export const CONTACT = {
  email: "twallace22@vt.edu",
  linkedin: "https://www.linkedin.com/in/theo-wallace-6a31241a7/",
  github: "https://github.com/teoteo123",
};

export const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  jobTitle: "Software engineer and independent consultant",
  url: SITE_URL,
  email: CONTACT.email,
  sameAs: [CONTACT.linkedin, CONTACT.github],
} as const;
