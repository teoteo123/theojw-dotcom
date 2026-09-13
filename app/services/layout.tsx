import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description:
    "Websites, dashboards, analytics, CMS setups and API integrations for small and medium businesses — scoped, built and handed over.",
  path: "/services",
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
