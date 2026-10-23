import type { ContactEnquiry } from "@/lib/contact";

/**
 * Marketing pitches submitted as legal enquiries. A single weak hit
 * (for example "WhatsApp" or "Google") is not enough to discard a message.
 */
const RULES: ReadonlyArray<{ id: string; pattern: RegExp; weight: number }> = [
  { id: "local-seo", pattern: /\blocal\s+seo\b/, weight: 4 },
  { id: "seo", pattern: /\bseo\b/, weight: 2 },
  { id: "google-my-business", pattern: /\bgoogle\s+my\s+business\b/, weight: 4 },
  { id: "gmb-gbp", pattern: /\b(gmb|gbp)\b/, weight: 3 },
  { id: "google-maps", pattern: /\bgoogle\s+maps\b/, weight: 2 },
  { id: "bad-review-removal", pattern: /\b(bad\s+)?review\s+removal\b/, weight: 4 },
  { id: "backlink", pattern: /\bback\s*links?\b/, weight: 4 },
  { id: "guest-post", pattern: /\bguest\s+posts?\b/, weight: 4 },
  { id: "link-building", pattern: /\blink\s+building\b/, weight: 4 },
  { id: "free-audit", pattern: /\bfree\s+(business\s+)?audit\b/, weight: 4 },
  { id: "free-reviews", pattern: /\bfree\s+\d+\s+reviews?\b/, weight: 4 },
  { id: "trustpilot", pattern: /\btrustpilot\b/, weight: 2 },
  { id: "email-marketing", pattern: /\bemail\s+marketing\b/, weight: 2 },
  { id: "grow-business", pattern: /\bgrow\s+your\s+business\b/, weight: 3 },
  { id: "more-customers", pattern: /\b(want\s+)?more\s+(customers|clients|leads)\b/, weight: 3 },
  { id: "whatsapp", pattern: /\bwhats\s*app\b/, weight: 2 },
  { id: "dm-now", pattern: /\bdm\s+now\b/, weight: 3 },
  { id: "rank-google", pattern: /\b(rank|ranking)\s+(on\s+)?google\b/, weight: 3 },
  { id: "domain-authority", pattern: /\bdomain\s+authority\b/, weight: 4 },
  { id: "lead-generation", pattern: /\blead\s+generation\b/, weight: 3 },
  { id: "marketing-agency", pattern: /\b(marketing|reputation)\s+agency\b/, weight: 3 },
  { id: "website-traffic", pattern: /\bwebsite\s+traffic\b/, weight: 2 },
  { id: "get-found-online", pattern: /\b(get\s+your\s+business\s+found|noticed\s+online)\b/, weight: 3 },
];

const SPAM_SCORE = 4;

function normalize(value: string): string {
  return value
    .normalize("NFKC")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, " ")
    .toLowerCase();
}

export function spamScore(enquiry: Pick<ContactEnquiry, "name" | "subject" | "message">): {
  score: number;
  matches: string[];
} {
  const text = normalize(`${enquiry.name}\n${enquiry.subject}\n${enquiry.message}`);
  const matches: string[] = [];
  let score = 0;

  for (const rule of RULES) {
    if (!rule.pattern.test(text)) continue;
    score += rule.weight;
    matches.push(rule.id);
  }

  const emoji = text.match(/\p{Extended_Pictographic}/gu);
  if (emoji && emoji.length >= 5) {
    score += 3;
    matches.push("emoji-burst");
  }

  const links = text.match(/https?:\/\//g);
  if (links && links.length > 0) {
    score += Math.min(4, links.length * 2);
    matches.push("links");
  }

  return { score, matches };
}

/** True when the enquiry is a marketing pitch rather than a legal matter. */
export function isSpamEnquiry(enquiry: Pick<ContactEnquiry, "name" | "subject" | "message">): boolean {
  return spamScore(enquiry).score >= SPAM_SCORE;
}
