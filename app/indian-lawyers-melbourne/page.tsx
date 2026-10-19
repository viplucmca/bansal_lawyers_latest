import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  ButtonLink,
  CtaSection,
  Faq,
  Hero,
  HeroBookingPlaceholder,
  Section,
  TrustBar,
} from "@/components/ui";
import { getTurnstileSiteKey } from "@/lib/booking/turnstile";
import { createMetadata } from "@/lib/metadata";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createLegalServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Indian Lawyers in Melbourne | Family, Disputes & Wills",
  description:
    "Melbourne lawyers for the Indian community: divorce, property settlement, business and commercial disputes, and wills. Advice in English, Hindi and Punjabi.",
  path: "/indian-lawyers-melbourne",
  keywords: [
    "Indian Lawyers Melbourne",
    "Indian Family Lawyers Melbourne",
    "Divorce After Indian Marriage Australia",
    "Business Dispute Lawyer Melbourne",
    "Wills for Assets in India",
    "Hindi Punjabi Lawyer Melbourne",
  ],
});

const lawyers = [
  {
    name: "Ajay Bansal",
    role: "Director & Principal Lawyer",
    email: "info@bansallawyers.com.au",
    phone: "0422 905 860",
    phoneHref: "tel:+61422905860",
    profileHref: "/about/ajay-bansal",
    image: "/images/team/ajay-bansal-director.webp",
    alt: "Ajay Bansal - Director & Principal Lawyer at Bansal Lawyers Melbourne",
  },
  {
    name: "Michael Saleh",
    role: "Solicitor",
    email: "info@bansallawyers.com.au",
    phone: "0422 905 860",
    phoneHref: "tel:+61422905860",
    profileHref: "/about/michael-saleh",
    image: "/images/team/michael-saleh-solicitor.png",
    alt: "Michael Saleh - Solicitor at Bansal Lawyers Melbourne",
  },
];

const indianFaqs = [
  {
    question: "Can I divorce in Australia if I married in India?",
    answer:
      "Yes, if the marriage is recognised and an Australian court has jurisdiction. A marriage that was valid in India is generally recognised here. You can apply after 12 months of separation. At least one spouse must be an Australian citizen, domiciled in Australia, or ordinarily resident in Australia for the 12 months before filing. The divorce ends the marriage only. Parenting arrangements and property settlement are separate.",
  },
  {
    question: "Is my property in India included in an Australian property settlement?",
    answer:
      "It can be. When the Federal Circuit and Family Court of Australia decides a property settlement, it looks at the property of both parties, including assets outside Australia. A house, land or business interest in India can be taken into account. The order binds the spouses. It does not, by itself, change the title records in India. A transfer or sale there can still require steps under Indian law.",
  },
  {
    question: "How do I resolve a dispute with my business partner?",
    answer:
      "Start with the agreement and the accounts. A partnership agreement, a shareholders agreement, the company register and the payment records show who owns the business and what was promised. Many disputes settle by negotiation or a buy-out once those facts are on the table. If they do not, the next step may be a letter of demand, mediation, or a claim in VCAT or a court, depending on the amount and the type of dispute. Get advice before you move money out of the business or resign as a director.",
  },
  {
    question: "Do I need a separate will for my assets in India?",
    answer:
      "Often, yes, if you own land or other immovable property in India. That property is governed by the law of the place where it sits. A will made only in Australia is not always the document an Indian registry, bank or court will act on, and a later Indian will can revoke the Australian will if the revocation clause is too wide. We draft the two so they work together. What you can leave in India also depends on the succession rules for your religion.",
  },
  {
    question: "Can I get advice in Hindi or Punjabi?",
    answer:
      "Yes. You can take advice in English, Hindi or Punjabi. That includes meetings at the Collins Street office and online consultations if you are elsewhere in Australia, or if family in India are joining the call. Court documents are still prepared in English.",
  },
];

export default function IndianLawyersMelbournePage() {
  const turnstileSiteKey = getTurnstileSiteKey();
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Indian Lawyers Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(indianFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne"
        title="Indian Lawyers in Melbourne – Family Law, Business Disputes & Wills"
        intro={
          <>
            <p>
              Bansal Lawyers is a Melbourne firm that helps Indian families and business owners when a marriage ends, when a family business falls into dispute, or when a will has to cover property in more than one country. Advice is available in English, Hindi and Punjabi.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Many clients married in India, own a flat or land there, or run a company with parents, siblings or cousins. Australian law answers some of those questions. Indian law answers others. The office is on Collins Street. If you are elsewhere in Australia, or if family in India need to join, we meet by phone or video.
            </p>
          </>
        }
        primaryAction={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{ label: "Call 0422 905 860", href: "tel:+61422905860" }}
        aside={<HeroBookingPlaceholder defaultPracticeArea="family" turnstileSiteKey={turnstileSiteKey} />}
      />

      <TrustBar
        items={[
          "English, Hindi and Punjabi",
          "Family Law, Business Disputes and Wills",
          "Collins Street Office",
          "Online Consultations in Australia and India",
        ]}
      />

      <Section tone="white" id="family-law">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <span className="eyebrow">Family Law</span>
          <h2>Divorce, Parenting and Property After an Indian Marriage</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            A marriage celebrated in India can be ended in an Australian court when the Family Law Act applies. One spouse must be an Australian citizen, domiciled in Australia, or ordinarily resident here for the 12 months before the application. The couple must have been separated for 12 months. That period can include time under the same roof, if the separation is real. The divorce order ends the marriage. It does not divide property or decide where children live.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Parenting arrangements are decided by what is in the child&apos;s best interests. Most parents must try family dispute resolution before they ask the court for parenting orders, unless the matter is urgent or there is family violence. We help with those arrangements, with negotiations, and with consent orders when you reach an agreement.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Property settlement looks at what both spouses own, including assets outside Australia. A house, a plot or an interest in a family business in India can be part of the pool. An order made in Australia binds the spouses. Registering a transfer on an Indian title is a further step, and it follows the local registry. Spousal maintenance, for a former partner who cannot meet their own reasonable needs, is not paid in every case. Married couples generally have 12 months from the date the divorce order takes effect to apply for property orders or spousal maintenance. De facto couples generally have two years from the end of the relationship.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Family violence orders in Victoria are intervention orders under the Family Violence Protection Act 2008, usually heard in the Magistrates&apos; Court. If you are in immediate danger, call 000. We act for people applying for an order and for people responding to one, including where parenting or property are running at the same time.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            The wider family law work is on our{" "}
            <Link href="/family-lawyers-melbourne/">family lawyers</Link> page. The application itself is covered on the{" "}
            <Link href="/family-lawyers-melbourne/divorce-lawyer-melbourne/">divorce lawyers</Link> page.
          </p>
        </div>
      </Section>

      <Section tone="warm" id="business-disputes">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <span className="eyebrow">Business Disputes</span>
          <h2>Partnership and Shareholder Disputes in Family Businesses</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Many Indian family businesses in Melbourne are partnerships or private companies. The shares or the partnership interests sit with parents, siblings or cousins. The dispute often starts at home and becomes a legal problem when drawings stop, one person wants to leave, or a lease or franchise agreement is in one relative&apos;s name only.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            We help with partnership and shareholder disputes, including deadlocks, arguments about ownership, and exits where there is no written agreement or the agreement does not match how the business was run. Franchise disputes and shop-lease disputes often sit in the same file. We read the agreement, the company records and the payments, then write to the other side, negotiate a buy-out, or advise on a claim.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            How we approach partner, supplier and payment disputes is set out on the{" "}
            <Link href="/civil-lawyers-melbourne/business-related-dispute-lawyer-melbourne/">
              business dispute
            </Link>{" "}
            page.
          </p>
        </div>
      </Section>

      <Section tone="white" id="commercial-disputes">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <span className="eyebrow">Commercial Disputes</span>
          <h2>Contracts, Unpaid Debts and Court or VCAT Claims</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Commercial disputes are the contract and payment problems around those businesses. An invoice is unpaid. A supplier did not deliver. A customer refuses a progress claim. A relative who was also a customer says the deal was different from the written terms.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            We help with contract disputes, debt recovery and letters of demand, whether you are owed the money or you have received a demand. A letter of demand states what is owed, why, and the date for payment. It is often the step before a claim. Some smaller disputes are heard at VCAT. Larger contract claims, and many company disputes, are issued in a court. Which path fits depends on the amount, the contract and the type of claim. Bring the contract, the invoices and the messages to the first meeting.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Contracts, debt recovery and commercial disputes are covered on our{" "}
            <Link href="/commercial-lawyers-melbourne/">commercial lawyers</Link> page.
          </p>
        </div>
      </Section>

      <Section tone="warm" id="wills">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <span className="eyebrow">Wills and Estates</span>
          <h2>Wills for Assets in Australia and India</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            A will says what happens to your property when you die. If you hold assets in Australia and in India, one document is not always enough. Land in India is dealt with under the law of the place where that property is, and a registry, bank or court there may expect a will that meets Indian formalities. Many clients need an Australian will and an Indian will, written so that one does not revoke the other. Succession rules in India also differ by religion, so the same draft does not suit every family.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            A power of attorney is a different document. A will operates after death. A power of attorney operates while you are alive. In Victoria, an enduring power of attorney appoints someone to make financial and personal decisions, including if you later lose capacity. A medical treatment decision maker is appointed separately for health decisions. If a relative in India needs to sell, lease or manage property for you, that is usually an{" "}
            <Link href="/property-lawyers-melbourne/indian-power-of-attorney-lawyer-melbourne/">
              Indian power of attorney
            </Link>
            , prepared for that transaction.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            If a will is challenged, or a family member was left out, the Victorian claim is generally a family provision application under the Administration and Probate Act 1958. Eligible people can ask the court for further provision. The usual time limit is six months from the grant of probate, so a challenge should not wait.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Drafting and estate advice are on our{" "}
            <Link href="/wills-lawyers-melbourne/">wills lawyers</Link> page.
          </p>
        </div>
      </Section>

      <Section tone="white" id="why-clients-choose-us">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <h2>Why Clients from the Indian Community Instruct Us</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Consultations are available in English, Hindi and Punjabi. That helps when a spouse, a parent or a business partner is more at ease in Hindi or Punjabi, while the court documents remain in English.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            The family and business structures in this work are familiar ones. A marriage under Indian law. Parents who paid a deposit. Shares held for a brother who lives in India. A flat still in a parent&apos;s name. Those facts change the advice, so we ask about them at the first meeting.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            You do not need to be in the CBD for every appointment. We consult online with clients across Australia, and with family in India when they should be on the call. The Collins Street office is available when meeting in person is the better option.
          </p>
        </div>
      </Section>

      <Section tone="warm" id="our-team">
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
      </Section>

      <Section tone="white" id="office">
        <div className="location-grid">
          <div>
            <span className="eyebrow">Collins Street</span>
            <h2>Our Melbourne Office</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--ink)" }}>
              The office is at Level 8, 278 Collins Street, Melbourne VIC 3000, between Swanston and Elizabeth Streets. Trams on Collins Street stop nearby.
            </p>
            <p style={{ color: "var(--ink-secondary)", lineHeight: "1.7", marginTop: "1rem" }}>
              Book a consultation to talk through a family law matter, a business or commercial dispute, or a will.
            </p>
            <address style={{ fontStyle: "normal", margin: "1.5rem 0", color: "var(--navy-950)", fontWeight: 600 }}>
              Level 8, 278 Collins Street,<br />
              Melbourne VIC 3000
            </address>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <ButtonLink href="/contact" variant="primary">
                Book a Consultation
              </ButtonLink>
              <ButtonLink
                href="https://www.google.com/maps/dir/?api=1&destination=Level+8,+278+Collins+Street+Melbourne+VIC+3000"
                variant="secondary"
              >
                Get Directions
              </ButtonLink>
            </div>
          </div>
          <div className="office-map-frame" aria-label="Map of the Bansal Lawyers Collins Street office">
            <iframe
              title="Bansal Lawyers Melbourne Office Location"
              src="https://maps.google.com/maps?q=Level%208,%20278%20Collins%20Street,%20Melbourne%20VIC%203000&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>

      <Section tone="warm" id="faqs">
        <Faq
          items={indianFaqs}
          title="Frequently Asked Questions"
          subtitle="Questions Indian families and business owners ask before they book."
          contactTitle="Want advice on your own matter?"
          contactButtonLabel="Book a Consultation"
          contactHref="/contact"
        />
      </Section>

      <CtaSection
        title="Book a Consultation"
        text="Family law, a dispute in a family business, a contract or debt, or a will covering Australia and India. Tell us which it is and we will set the next step."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{ label: "Call 0422 905 860", href: "tel:+61422905860" }}
        phone="1300 226 725"
        phoneLabel="Call the Office"
        badges={[
          "English, Hindi and Punjabi",
          "Collins Street and online consultations",
          "Clients across Australia and in India",
        ]}
      />
    </>
  );
}
