import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import { CivilLawyersMelbourneSections } from "@/components/civil/CivilLawyersMelbourneSections";
import { ClientTestimonialsCarousel } from "@/components/sections/ClientTestimonialsCarousel";
import { GoogleReviewSummaryBadge } from "@/components/sections/GoogleReviewSummaryBadge";
import { OfficeMapEmbed } from "@/components/sections/OfficeMapEmbed";
import {
  Breadcrumbs,
  Container,
  CtaSection,
  Faq,
  Hero,
  HeroBookingPlaceholder,
  Section,
  TrustBar,
} from "@/components/ui";
import { getTurnstileSiteKey } from "@/lib/booking/turnstile";
import { civilLawyersMelbourneTestimonials } from "@/lib/civil-lawyers-melbourne-testimonials";
import { createMetadata } from "@/lib/metadata";
import {
  CIVIL_LAWYERS_MELBOURNE_PAGE_DESCRIPTION,
  CIVIL_LAWYERS_MELBOURNE_PAGE_TITLE,
  createCivilLawyersMelbournePageGraphSchema,
} from "@/lib/schema";
import { businessDetails } from "@/lib/site";

const lawyers = [
  {
    name: "Ajay Bansal",
    role: "Director & Principal Lawyer",
    email: businessDetails.email,
    phoneHref: businessDetails.phoneTel,
    profileHref: "/about/ajay-bansal",
    image: "/images/team/ajay-bansal-director.webp",
    alt: "Ajay Bansal - Director & Principal Lawyer at Bansal Lawyers Melbourne",
  },
  {
    name: "Michael Saleh",
    role: "Solicitor",
    email: businessDetails.email,
    phoneHref: businessDetails.phoneTel,
    profileHref: "/about/michael-saleh",
    image: "/images/team/michael-saleh-solicitor.png",
    alt: "Michael Saleh - Solicitor at Bansal Lawyers Melbourne",
  },
];

export const metadata: Metadata = createMetadata({
  title: CIVIL_LAWYERS_MELBOURNE_PAGE_TITLE,
  description: CIVIL_LAWYERS_MELBOURNE_PAGE_DESCRIPTION,
  path: "/civil-lawyers-melbourne",
  keywords: [
    "Civil Lawyers Melbourne",
    "Dispute Resolution Lawyers Melbourne",
    "Contract Dispute Lawyers Melbourne",
    "Debt Dispute Lawyers Melbourne",
    "Legal Notice Lawyers Melbourne",
    "Civil Litigation Melbourne",
    "VCAT Lawyers Melbourne",
    "Civil Procedure Act Victoria",
  ],
});

const civilFaqs = [
  {
    question: "What is a civil law matter?",
    answer:
      "A civil law matter is a non-criminal dispute between individuals, businesses or other parties, usually about money, contracts, property or legal rights. Common examples include contract disputes, debt disputes and property disputes. The usual aim is a resolution or compensation, not punishment.",
  },
  {
    question: "Can Bansal Lawyers help with legal notices?",
    answer:
      "Yes. We prepare, review and respond to legal notices. A notice can set deadlines and have real consequences, so it's worth getting advice before you send or respond to one.",
  },
  {
    question: "Do you help with contract disputes?",
    answer:
      "Yes. We assist with contract disputes, document review, negotiation and court-related steps where required. We start by checking what the contract actually says and what evidence you have.",
  },
  {
    question: "Can you help with debt disputes?",
    answer:
      "Yes. We assist with debt disputes, unpaid amounts, legal notices, negotiation and recovery-related advice, whether you're owed money or disputing a claim for payment.",
  },
  {
    question: "When should I contact a civil lawyer?",
    answer:
      "When a dispute starts, before you send a legal notice, before you respond to a claim, and before you take any court-related step.",
  },
  {
    question: "What types of matters do civil lawyers in Melbourne handle?",
    answer: (
      <>
        Civil lawyers handle disputes that aren&apos;t criminal, whether they&apos;re between individuals,
        businesses or other parties. That covers contract disagreements, unpaid debts, money claims,
        property disputes and arguments over legal rights. The goal is usually to settle the dispute or
        get compensation, not to punish anyone. Not sure if your problem counts as a civil matter?{" "}
        <Link href="/contact">Ask us.</Link> We&apos;ll tell you in the first conversation.
      </>
    ),
    answerText:
      "Civil lawyers handle disputes that aren't criminal, whether they're between individuals, businesses or other parties. That covers contract disagreements, unpaid debts, money claims, property disputes and arguments over legal rights. The goal is usually to settle the dispute or get compensation, not to punish anyone. Not sure if your problem counts as a civil matter? Ask us. We'll tell you in the first conversation.",
  },
  {
    question: "What should I do if I receive a legal notice?",
    answer:
      "Don't ignore it. Read it carefully, note any deadline and keep everything connected to it, including emails and texts. Be careful about replying too quickly, because you could end up admitting something you haven't checked. If it's a Magistrates' Court complaint, you generally have 21 days to respond. Speak to a lawyer before you reply.",
  },
  {
    question: "Can Bansal Lawyers help with breach of contract disputes?",
    answer:
      "Yes, we can. We'll look at the contract terms, the evidence of the alleged breach and any money you've lost, then go through your options with you. Depending on what the contract says and what you want, that might mean a formal notice, negotiation, mediation or court. Bring the contract, plus any emails or invoices, to your first appointment.",
  },
  {
    question: "What's the difference between VCAT and a court?",
    answer:
      "VCAT is a tribunal. It hears specific kinds of disputes, like consumer and trader and building matters, and it's usually less formal than a court. The Magistrates' Court of Victoria hears money claims up to $100,000. The County Court has no monetary cap, and the Supreme Court takes complex or high-value matters and appeals. VCAT's limits depend on the type of claim, and for goods and services claims under $15,000 it generally doesn't allow lawyers to represent parties. Get advice before you file anything.",
  },
  {
    question: "Does Bansal Lawyers offer consultations for civil disputes outside Melbourne?",
    answer:
      "We offer consultations at our Melbourne CBD office, and by phone or video. If you're interstate or overseas, you can still book a phone or video consultation. If your dispute is outside Victoria, let us know when you get in touch. Courts and time limits differ between states, so we'll check whether we can act or whether you need a local lawyer.",
  },
  {
    question: "What happens if I ignore a letter of demand or a court complaint?",
    answer:
      "A letter of demand isn't a court order, but brushing it off often leads to a claim. A court complaint is more urgent. If you don't file a notice of defence within 21 days of being served in the Magistrates' Court, the other side can apply for default judgment without a hearing. That can include costs and interest. If either one is sitting on your desk, don't wait. Get advice now.",
  },
  {
    question: "How much does a civil lawyer cost in Melbourne?",
    answer: (
      <>
        It depends on the work involved, the forum and how far the dispute goes.{" "}
        <a
          href="https://www.lsc.vic.gov.au/for-consumers/costs-and-billing/about-legal-costs"
          rel="noopener noreferrer"
          target="_blank"
        >
          In Victoria, a lawyer generally has to give you written costs disclosure when likely costs are more
          than $750, not counting GST and disbursements
        </a>
        , and fees must be fair and reasonable. We&apos;ll give you a written estimate before we start and
        tell you if it changes. Our debt recovery lawyers and litigation team work the same way.
      </>
    ),
    answerText:
      "It depends on the work involved, the forum and how far the dispute goes. In Victoria, a lawyer generally has to give you written costs disclosure when likely costs are more than $750, not counting GST and disbursements, and fees must be fair and reasonable. We'll give you a written estimate before we start and tell you if it changes. Our debt recovery lawyers and litigation team work the same way.",
  },
  {
    question: "Can I recover my legal costs if I win?",
    answer:
      "Often only some of them. In court, the losing party is usually ordered to contribute to your costs under the court's scale, which is typically less than what you actually paid. At VCAT, each side generally pays its own costs unless VCAT orders otherwise. We'll explain the likely costs position before you commit.",
  },
  {
    question: "How long does a civil dispute take?",
    answer: (
      <>
        There&apos;s no set timeline. A dispute that settles after a letter of demand can wrap up quickly,
        while a defended court case takes much longer. The forum, how complex the matter is and whether the
        other side engages all play a part. Once we&apos;ve looked at your documents, we&apos;ll go through
        a realistic range. <Link href="/contact">Book an initial consultation</Link> and we&apos;ll start
        there.
      </>
    ),
    answerText:
      "There's no set timeline. A dispute that settles after a letter of demand can wrap up quickly, while a defended court case takes much longer. The forum, how complex the matter is and whether the other side engages all play a part. Once we've looked at your documents, we'll go through a realistic range. Book an initial consultation and we'll start there.",
  },
];

export default function CivilLawyersMelbournePage() {
  const turnstileSiteKey = getTurnstileSiteKey();
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Civil Lawyers Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createCivilLawyersMelbournePageGraphSchema(civilFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Civil Lawyers in Melbourne"
        intro={
          <>
            <p>
              Civil disputes can arise between individuals, businesses, landlords, tenants, service providers, customers, partners or other parties. They tend to get stressful when communication breaks down, especially where money, contracts, property or personal rights are at stake.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers is a Melbourne civil law firm. We assist clients with dispute resolution, legal notices, negotiation, document preparation and court-related steps where required.
            </p>
          </>
        }
        primaryAction={{ label: "Book a Consultation", href: "/contact" }}
        aside={
          <HeroBookingPlaceholder defaultPracticeArea="civil" turnstileSiteKey={turnstileSiteKey} />
        }
      />

      <TrustBar
        items={[
          "Collins Street Office & Remote Consultations",
          "VCAT & Victorian Courts Practice",
          "Negotiation & Genuine Steps Guidance",
          "Prompt Matter Assessment",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <h2>Practical Advice for Civil Disputes</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A civil dispute is easier to deal with when you get proper advice from the start. The right approach depends on the facts, the documents, the evidence, your legal position and the outcome you want.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              As dispute resolution lawyers in Melbourne, we help you understand how strong your position is, what the risks are and what your options are, including whether the matter is worth pursuing given the likely time and cost.
            </p>
          </div>
        </Container>
      </Section>

      <CivilLawyersMelbourneSections />

      <Section tone="warm" id="our-team">
        <Container>
          <div className="team-clean-header">
            <div className="team-clean-eyebrow">
              <span className="team-clean-eyebrow__line" aria-hidden="true" />
              <span>LEGAL PRACTITIONERS</span>
              <span className="team-clean-eyebrow__line" aria-hidden="true" />
            </div>
            <h2 className="team-clean-title">
              Meet Our <span className="team-clean-title__serif">Legal Team</span>
            </h2>
            <p className="team-clean-intro">
              Ajay Bansal is the director and principal lawyer. Michael Saleh is a solicitor. Read each profile, then book a consultation.
            </p>
          </div>
          <div className="team-clean-grid">
            {lawyers.map((member) => (
              <article key={member.name} className="team-clean-card">
                <Link
                  href={member.profileHref}
                  className="team-clean-card__media-link"
                  title={`View ${member.name}'s profile`}
                >
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    sizes="(max-width: 580px) 100vw, 420px"
                    className="team-clean-card__img"
                  />
                </Link>
                <div className="team-clean-card__content">
                  <h3 className="team-clean-card__name">
                    <Link href={member.profileHref}>{member.name}</Link>
                  </h3>
                  <a href={`mailto:${member.email}`} className="team-clean-card__email">
                    {member.email}
                  </a>
                  <p className="team-clean-card__role">{member.role}</p>
                  <div className="team-clean-card__socials">
                    <a
                      href={member.phoneHref}
                      className="team-clean-card__icon-link"
                      aria-label={`Call ${member.name}`}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </a>
                    <Link
                      href={member.profileHref}
                      className="team-clean-card__icon-link"
                      aria-label={`View ${member.name}'s profile`}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <polyline points="17 11 19 13 23 9" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <section
        className="client-testimonials-section client-testimonials-section--corner-badge"
        id="client-reviews"
      >
        <Container>
          <header className="client-testimonials-section__header">
            <h2>What Our Clients Say About Us</h2>
          </header>
          <ClientTestimonialsCarousel items={civilLawyersMelbourneTestimonials} />
          <GoogleReviewSummaryBadge />
        </Container>
      </section>

      <Section tone="white" id="office">
        <Container>
          <div className="location-grid">
            <div>
              <h2>Our Melbourne Office</h2>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--ink)", marginTop: "1rem" }}>
                The office is at Level 8, 278 Collins Street, Melbourne VIC 3000, between Swanston and Elizabeth Streets. Trams on Collins Street stop nearby.
              </p>
              <p style={{ color: "var(--ink-secondary)", lineHeight: "1.7", marginTop: "1rem" }}>
                Book a consultation to discuss a civil dispute, contract issue, debt claim or court-related matter.
              </p>
              <address style={{ fontStyle: "normal", margin: "1.5rem 0", color: "var(--navy-950)", fontWeight: 600 }}>
                {businessDetails.address}
              </address>
            </div>
            <OfficeMapEmbed />
          </div>
        </Container>
      </Section>

      <CtaSection
        title="Speak With Civil Lawyers in Melbourne"
        text="If you're involved in a civil dispute or need advice before sending or responding to a legal notice, Bansal Lawyers can help you understand your options."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Civil Law Team",
          href: businessDetails.phoneTel,
        }}
        phone="1300 226 725"
        phoneLabel="Direct Civil Litigation Solicitor"
        badges={[
          "Letters of demand & dispute negotiation",
          "VCAT & Magistrates Court representation",
          "Melbourne CBD & virtual consultations",
        ]}
      />

      <Section tone="warm" id="faqs">
        <Faq
          items={civilFaqs}
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about civil disputes in Melbourne."
          contactTitle="Need advice about a civil dispute or legal notice?"
          contactButtonLabel="Book a Consultation"
          contactHref="/contact"
        />
      </Section>
    </>
  );
}
