import type { ReactNode } from "react";

export type LinkItem = {
  label: string;
  href: string;
  children?: LinkItem[];
  isMegaMenu?: boolean;
};

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type CardContent = {
  title: string;
  description: string;
  href?: string;
  eyebrow?: string;
  ctaText?: string;
};

export type ProcessItem = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: ReactNode;
  /** Plain-text answer for FAQ JSON-LD when `answer` is JSX or includes links. */
  answerText?: string;
};

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[] | string;
  image?: string;
  noIndex?: boolean;
  /** When true, omit Metadata API canonical (e.g. home uses a raw <link> to keep a trailing slash). */
  skipCanonical?: boolean;
};
