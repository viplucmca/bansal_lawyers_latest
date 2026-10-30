import type { FaqItem } from "@/types/content";
import { businessDetails } from "@/lib/site";

const { nationalLine, email, address } = businessDetails;

/** Plain-text FAQ copy for Ajay Bansal profile (UI + FAQPage schema). */
export const ajayBansalFaqs: FaqItem[] = [
  {
    question: "Can I consult a Punjabi-speaking lawyer in Melbourne?",
    answer:
      "Yes. Ajay Bansal speaks Punjabi, Hindi and English. Contact Bansal Lawyers to check availability and arrange a consultation.",
  },
  {
    question: "What legal services does Bansal Lawyers provide?",
    answer:
      "The firm handles immigration, family law, criminal defence, property, commercial law and civil disputes. If you’re not sure we can help with your issue, contact the firm and ask.",
  },
  {
    question: "Can I speak with a lawyer about an Australian visa refusal?",
    answer:
      "Yes. Bansal Lawyers handles immigration matters, including visa refusals and review issues. Your options and deadlines depend on the decision and your circumstances.",
  },
  {
    question: "Where is Bansal Lawyers located in Melbourne?",
    answer: `We’re at ${address}. Contact the firm to arrange an appointment.`,
  },
  {
    question: "How can I book a consultation?",
    answer: `Call ${nationalLine}, email ${email} or use the online booking form.`,
  },
  {
    question: "How do I find an Indian lawyer in Melbourne who speaks Hindi or Punjabi?",
    answer:
      "Look for a firm that lists the languages its lawyers speak. At Bansal Lawyers, Ajay Bansal speaks English, Hindi and Punjabi. Just tell us your preferred language when you book.",
  },
  {
    question: "Do I need a lawyer to get a divorce in Australia?",
    answer:
      "No, you can apply yourself. A lawyer can still help with the forms, parenting arrangements and property. Keep in mind a divorce only ends the marriage, so children and property are sorted out separately.",
  },
  {
    question: "Can I get a divorce in Australia if I got married in India?",
    answer:
      "Often you can, as long as the marriage is valid and you meet the Australian requirements. You’ll need your marriage certificate, and if it isn’t in English you’ll need a certified translation. Talk to a lawyer about your situation.",
  },
  {
    question: "How long do I have to apply for a property settlement after separating?",
    answer:
      "If you were married, it’s generally 12 months from the date your divorce takes effect. If you were in a de facto relationship, it’s two years from when the relationship ended. After that, you need the court’s permission to apply.",
  },
  {
    question: "How do I get an intervention order in Victoria?",
    answer:
      "You apply to the Magistrates’ Court. We can help you apply for one or respond to one. If you’re in immediate danger, call 000 first.",
  },
  {
    question: "What should I do if I have been charged with a criminal offence?",
    answer:
      "Get legal advice early, ideally before any police interview. Keep your charge sheet, summons and bail papers, and make a note of your court date.",
  },
  {
    question: "What happens if I miss my court date?",
    answer:
      "It can make things much worse, and the court may issue a warrant. If you’ve missed a date, or think you’re going to, contact a lawyer straight away.",
  },
  {
    question: "Can a lawyer help me recover money someone owes me?",
    answer:
      "Yes. We advise on debt recovery, legal notices and negotiation. If a claim has to go to court, we’ll explain the steps and which court may apply.",
  },
  {
    question: "What is the time limit for a breach of contract claim in Victoria?",
    answer:
      "Generally six years. Don’t wait that long, though, because evidence and memories fade.",
  },
  {
    question: "Can I get legal advice by phone or video?",
    answer:
      "Yes. You can meet us at our Collins Street office or talk by phone or video.",
  },
  {
    question: "Can you prepare a power of attorney for use in India?",
    answer:
      "Yes, we draft or review powers of attorney for use in India. We’re not a notary public, so we’ll refer you to one for the signing.",
  },
  {
    question: "Do you give free advice on the phone?",
    answer: `Call ${nationalLine} and ask when you book. We’ll explain how the first consultation works.`,
  },
];

export function ajayBansalFaqSchemaEntities() {
  return ajayBansalFaqs.map((item) => ({
    "@type": "Question" as const,
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: typeof item.answer === "string" ? item.answer : "",
    },
  }));
}
