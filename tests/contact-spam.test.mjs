import test from "node:test";
import assert from "node:assert/strict";
import { isSpamEnquiry, spamScore } from "../lib/contact/spam.ts";

const scam = {
  name: "Bright Reputation",
  subject: "Complete Local Business Growth Solutions",
  message:
    "FREE 5 REVIEWS WANT MORE CUSTOMERS FROM GOOGLE? Get your business found, trusted & noticed online. Google Maps & Local SEO GMB/GBP Listing & Optimization Bad Review Removal — 100% Trustpilot, Yelp & Facebook Support Google & Facebook Ads SEO & Backlinks Email Marketing & Outreach FREE BUSINESS AUDIT No upfront payment for the initial consultation. DM NOW — LET'S GROW YOUR BUSINESS WhatsApp: +8801330321414",
};

test("discards the SEO pitch that was emailed as a criminal-law enquiry", () => {
  const result = spamScore(scam);
  assert.equal(isSpamEnquiry(scam), true);
  assert.ok(result.score >= 4);
  assert.ok(result.matches.includes("local-seo"));
  assert.ok(result.matches.includes("bad-review-removal"));
});

test("keeps a genuine legal enquiry", () => {
  const enquiry = {
    name: "Priya Sharma",
    subject: "Police interview tomorrow",
    message: "Victoria Police asked me to attend an interview about an assault. I need a lawyer before I go. Please call me on this number.",
  };
  assert.equal(isSpamEnquiry(enquiry), false);
  assert.equal(spamScore(enquiry).score, 0);
});

test("does not treat a WhatsApp request or a defamation enquiry as spam", () => {
  assert.equal(isSpamEnquiry({
    name: "Aman Gill",
    subject: "Family law",
    message: "Please WhatsApp me about parenting orders. I am overseas this week.",
  }), false);

  assert.equal(isSpamEnquiry({
    name: "Cafe Owner",
    subject: "Defamation",
    message: "A customer posted a false Google review of my cafe. I want advice on whether I can ask Google to take it down.",
  }), false);
});
