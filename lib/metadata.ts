import type { Metadata } from "next";
import { SITE_NAME } from "@/data/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Use for the home page so the title template does not double the name. */
  absoluteTitle?: string;
};

export function pageMeta({ title, description, path, absoluteTitle }: PageMetaInput): Metadata {
  const ogTitle = absoluteTitle ?? `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}
