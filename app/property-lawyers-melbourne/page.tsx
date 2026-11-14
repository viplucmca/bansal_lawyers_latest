import type { Metadata } from "next";
import Link from "next/link";
import { ClientTestimonialsCarousel } from "@/components/sections/ClientTestimonialsCarousel";
import { GoogleReviewSummaryBadge } from "@/components/sections/GoogleReviewSummaryBadge";
import { OfficeMapEmbed } from "@/components/sections/OfficeMapEmbed";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  ButtonLink,
  Container,
  CtaSection,
  Faq,
  Hero,
  HeroBookingPlaceholder,
  Section,
  SectionHeader,
  TrustBar,
} from "@/components/ui";
import { propertyLawyersMelbourneTestimonials } from "@/lib/property-lawyers-melbourne-testimonials";
import { getTurnstileSiteKey } from "@/lib/booking/turnstile";
import { createMetadata } from "@/lib/metadata";
import {
  createPropertyLawyersMelbournePageGraphSchema,
  PROPERTY_LAWYERS_MELBOURNE_PAGE_DESCRIPTION,
  PROPERTY_LAWYERS_MELBOURNE_PAGE_TITLE,
} from "@/lib/schema";
import { businessDetails, officeHoursDescription } from "@/lib/site";
import type { FaqItem } from "@/types/content";

export const metadata: Metadata = createMetadata({
  title: PROPERTY_LAWYERS_MELBOURNE_PAGE_TITLE,
  description: PROPERTY_LAWYERS_MELBOURNE_PAGE_DESCRIPTION,
  path: "/property-lawyers-melbourne",
  keywords: [
    "Indian Property Lawyers Melbourne",
    "Property Lawyers Melbourne",
    "Indian Property Solicitors Melbourne",
    "Indian Conveyancing Lawyers Melbourne",
    "Property Lawyers for Indians in Melbourne",
    "Indian Property Law Firm Melbourne",
    "Hindi Speaking Property Lawyer Melbourne",
    "Property Contract Review Melbourne",
    "Section 32 Review Melbourne",
  ],
});

const propertyRulesRows = [
  {
    applies: "You are a foreign person buying a home",
    detail:
      "You need approval before you enter the contract. Buying an established home is banned from 1 April 2025 to 30 June 2029, with limited exceptions. New dwellings and vacant land can still be approved.",
  },
  {
    applies: "You are a foreign purchaser in Victoria",
    detail:
      "Extra duty of 8% applies to residential property, on top of normal duty, for agreements from 1 July 2019.",
  },
  {
    applies: "You are selling property",
    detail:
      "For contracts from 1 January 2025, 15% of the price is withheld unless you hold an ATO clearance certificate or variation.",
  },
  {
    applies: "You are buying a home in a private sale",
    detail: "Cooling off is three clear business days, and not available at auction.",
  },
];

const propertyFaqs: FaqItem[] = [
  {
    question: "Can Bansal Lawyers help with buying property?",
    answer:
      "Yes. We assist buyers with contract and document review, legal advice, settlement concerns and identifying issues before they proceed.",
  },
  {
    question: "Do you assist with selling property?",
    answer:
      "Yes. We help sellers review sale documents, understand their obligations and address legal issues connected to the sale.",
  },
  {
    question: "Can you review a property contract before I sign?",
    answer:
      "Yes. We can explain the contract terms, conditions, deadlines and potential risks before you make a commitment.",
  },
  {
    question: "Do you provide conveyancing-related legal support?",
    answer:
      "Yes. We provide legal advice connected to contract review, property transfers, settlement issues and relevant documents. We can discuss the scope of assistance for your matter.",
  },
  {
    question: "Can you help with commercial lease matters?",
    answer:
      "Yes. We assist landlords, tenants and business owners with lease terms, obligations and disputes. A review before signing can help clarify longer-term commitments.",
  },
  {
    question: "Do you assist with residential lease issues?",
    answer:
      "Yes. We can advise on rental obligations, repairs, bonds, notices, termination and other residential tenancy concerns.",
  },
  {
    question: "Can you help with property disputes and settlement issues?",
    answer:
      "Yes. We review the relevant documents and deadlines, explain your options and advise on negotiation or further steps where appropriate.",
  },
  {
    question: "Can you prepare or respond to property-related legal notices?",
    answer:
      "Yes. We can review the evidence and relevant documents before advising on a notice or response. The requirements depend on the type of notice and your circumstances.",
  },
  {
    question: "What happens at a first consultation, and what should I bring?",
    answer:
      "We listen to what you need, read your documents and explain your options and next steps in plain English. Bring photo ID, your contract of sale, Section 32 statement, lease or any notice, and the names and addresses of the people involved. You can meet us at our Collins Street office or by virtual appointment.",
  },
  {
    question: "Can I Arrange a Phone or Video Consultation?",
    answer: (
      <>
        Yes, we offer virtual appointments as well as in-person meetings at our Melbourne office. This helps if you live
        interstate or overseas, or can&apos;t get into the city. Call 1300 226 725 or 0422 905 860, or{" "}
        <Link href="/contact/">book online</Link>, and tell us which suits you. Please have your contract, lease or
        notice ready so we can use the time well.
      </>
    ),
    answerText:
      "Yes, we offer virtual appointments as well as in-person meetings at our Melbourne office. This helps if you live interstate or overseas, or can't get into the city. Call 1300 226 725 or 0422 905 860, or book online at https://www.bansallawyers.com.au/contact, and tell us which suits you. Please have your contract, lease or notice ready so we can use the time well.",
  },
  {
    question: "Where is Bansal Lawyers Located in Melbourne?",
    answer:
      "Our office is at Level 8, 278 Collins Street, Melbourne VIC 3000, in the heart of the CBD. It is easy to reach from the city's main transport routes and close to many city businesses. If you can't visit, we can meet virtually. Call 1300 226 725 before you come in, so we can confirm a time that suits you.",
  },
  {
    question: "How Can I Book a Consultation With Bansal Lawyers?",
    answer: (
      <>
        You can <Link href="/contact/">book a consultation online</Link>, call 1300 226 725 or 0422 905 860, or email
        info@bansallawyers.com.au. Tell us briefly what the matter is and when any contract, notice or settlement
        deadline falls. If you have documents, send them or bring them along. We will then confirm a time and let you
        know what to prepare.
      </>
    ),
    answerText:
      "You can book a consultation online at https://www.bansallawyers.com.au/contact, call 1300 226 725 or 0422 905 860, or email info@bansallawyers.com.au. Tell us briefly what the matter is and when any contract, notice or settlement deadline falls. If you have documents, send them or bring them along. We will then confirm a time and let you know what to prepare.",
  },
];

const proseLead = {
  fontSize: "1.12rem",
  lineHeight: "1.75",
  color: "var(--ink)",
  marginTop: "1rem",
} as const;

const proseBody = {
  fontSize: "1.05rem",
  lineHeight: "1.75",
  color: "var(--ink-secondary)",
  marginTop: "0.75rem",
} as const;

export default function PropertyLawyersMelbournePage() {
  const turnstileSiteKey = getTurnstileSiteKey();
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Indian Property Lawyers in Melbourne" },
  ];

  return (
    <div className="commercial-landing-page family-landing-page">
      <StructuredData data={createPropertyLawyersMelbournePageGraphSchema(propertyFaqs)} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Indian Property Lawyers in Melbourne"
        intro={
          <p>
            Bansal Lawyers helps Indian individuals, families, buyers, sellers and investors in Melbourne with property law,
            from contract reviews and Section 32 statements to leases, disputes and Power of Attorney documents. If you are
            looking for <strong>Indian Property Lawyers in Melbourne</strong> who will read the paperwork carefully and
            explain it in plain English, we can help. We go through the contract, find the clauses that could cost you, and
            tell you what to do before you sign. <Link href="/contact/">Book a consultation</Link> or call{" "}
            <a href={businessDetails.nationalLineTel}>{businessDetails.nationalLine}</a>.
          </p>
        }
        primaryAction={{ label: "Book a Consultation", href: "/contact/" }}
        secondaryAction={{
          label: `Call ${businessDetails.phone}`,
          href: businessDetails.phoneTel,
        }}
        aside={<HeroBookingPlaceholder defaultPracticeArea="property" turnstileSiteKey={turnstileSiteKey} />}
      />

      <TrustBar
        items={[
          "Collins Street Office and Remote Consultations",
          "Section 32 and Contract Reviews",
          "Plain-English Property Guidance",
          "English, Hindi and Punjabi Legal Assistance",
          "Practical Advice Before You Sign",
        ]}
      />

      <Section tone="white" id="indian-community">
        <SectionHeader title="Property Legal Services for the Indian Community in Melbourne" />
        <p style={proseBody}>
          Property law in Victoria has its own rules, forms and deadlines. For many Indian families there is more on top:
          relatives overseas, shared ownership, money moving between countries and documents that have to work in two
          places. We deal with the Australian side and explain each step in English, Hindi or Punjabi.
        </p>
        <div className="service-detail-grid" style={{ marginTop: "2rem" }}>
          <article className="service-text-block">
            <h3>Property Legal Advice for Indian Buyers and Sellers</h3>
            <p>
              Whether you are buying your next home or selling an investment, we start with the documents. We read the
              contract of sale and the Section 32 statement, point out the terms that matter, and suggest changes to ask
              for before you sign. At present, the seller must give the buyer the Section 32 statement before the contract
              is signed, and a contract may not bind the buyer if the statement is missing, incomplete or inaccurate. Many
              people search for <strong>Property Lawyers for Indians in Melbourne</strong> because they want that kind of
              clear explanation, and it is what we aim to give you.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Legal Support for Indian Families, Investors and NRIs</h3>
            <p>
              Families often buy together, investors often hold more than one property, and NRIs may be buying or selling
              from overseas. We check who will be on the title, how the contract and finance dates fit your plans, and what
              the deal will cost beyond the price. We also confirm early whether you count as a foreign person, because that
              decides whether foreign investment approval and extra Victorian duty apply. Citizens and permanent visa holders
              are generally outside those rules.
            </p>
          </article>
        </div>
      </Section>

      <Section tone="warm" id="property-services">
        <SectionHeader
          title="Property Law Services We Provide"
          intro="Our property work follows a deal from the first look at the contract through to settlement, and the problems that sometimes come after. Under each service below, you will see what we actually do for you. Every matter is different, so we start with your documents, your dates and what you want to achieve."
        />
        <div className="service-detail-grid">
          <article className="service-text-block">
            <h3>Property Contract Review</h3>
            <p>
              Reviewing a contract before you sign is the easiest point to fix a problem. Our{" "}
              <strong>Indian Property Contract Review Melbourne</strong> service starts with the price, deposit, finance
              and inspection conditions, settlement date and special conditions, and we explain each in plain English. We
              flag clauses that could leave you exposed and suggest changes to ask the other side for. Victoria is also
              changing how deposits can be released early, with new rules due in 2027, so we check when your deposit can leave
              trust. See our{" "}
              <Link href="/property-lawyers-melbourne/property-contract-review-lawyer-melbourne/">
                property contract review page
              </Link>
              .
            </p>
          </article>
          <article className="service-text-block">
            <h3>Buying Property in Melbourne</h3>
            <p>
              A purchase involves a Contract of Sale, a Section 32 statement and settlement conditions, each with its own
              deadlines. If you want <strong>Indian Property Solicitors Melbourne</strong> to check a purchase, we compare
              the Section 32 with what you have been told, look at title, easements and planning details, and explain your
              cooling-off rights where they apply. For a private sale of a home, cooling off generally gives you three clear
              business days, but not at auction. We then guide you to settlement. More on{" "}
              <Link href="/property-lawyers-melbourne/buying-property-lawyer-melbourne/">buying property</Link>.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Selling Property in Melbourne</h3>
            <p>
              Sellers carry legal duties before the property is even advertised. We prepare or review the contract of sale and
              Section 32 statement so disclosure is complete and accurate, because a contract may not bind the buyer if the
              statement is incomplete or inaccurate. We review any special conditions a buyer asks for, explain your settlement
              obligations and deal with issues before completion. If you are an Australian tax resident, we also check you have
              the{" "}
              <a
                href="https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/running-your-business/property-clearance-certificates"
                rel="noopener noreferrer"
                target="_blank"
              >
                ATO clearance certificate
              </a>{" "}
              that avoids 15% of the price being withheld at settlement. See{" "}
              <Link href="/property-lawyers-melbourne/selling-property-lawyer-melbourne/">selling property</Link>.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Conveyancing-Related Legal Support</h3>
            <p>
              People searching for <strong>Indian Conveyancing Lawyers Melbourne</strong> usually want one thing: a smooth
              transfer, with someone who explains each step. We review the contract, check or prepare transfer documents,
              coordinate settlement with the other side and your lender, and check the adjustments for rates and outgoings.
              In Victoria, a lawyer or a licensed conveyancer can check your Section 32 statement. We will tell you if your
              matter needs more legal input than routine conveyancing. Read about our{" "}
              <Link href="/property-lawyers-melbourne/conveyancing-lawyer-melbourne/">conveyancing-related legal support</Link>
              .
            </p>
          </article>
          <article className="service-text-block">
            <h3>Commercial Property and Lease Agreements</h3>
            <p>
              A commercial lease can tie a business to years of rent and outgoings. We review the lease before you sign,
              covering rent and rent reviews, outgoings, term and renewal options, fit-out, repairs and make-good duties. For
              shops and other retail premises, the{" "}
              <a
                href="https://www.legislation.vic.gov.au/in-force/acts/retail-leases-act-2003"
                rel="noopener noreferrer"
                target="_blank"
              >
                Retail Leases Act 2003
              </a>{" "}
              may apply, including a disclosure statement the landlord must give the tenant. We negotiate changes for tenants
              or landlords and advise on renewals and landlord-tenant obligations. See our{" "}
              <Link href="/property-lawyers-melbourne/commercial-lease-lawyer-melbourne/">commercial lease advice</Link>.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Residential Lease Matters</h3>
            <p>
              Victorian residential tenancies follow set rules on rent, repairs, notices and bonds. We advise rental providers
              and renters on agreements before they are signed, check notices before they are sent or answered, and help with
              bond and repair disputes. Many rental disagreements can go to Rental Dispute Resolution Victoria, a free VCAT
              service, before a hearing. If a matter does go to VCAT, we help you prepare your evidence. See{" "}
              <Link href="/property-lawyers-melbourne/residential-lease-lawyer-melbourne/">residential lease matters</Link>.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Property Disputes and Settlement Issues</h3>
            <p>
              Ownership disagreements, contract disputes and late settlements are often easier to fix when you act early. We
              review the contract or lease, the notices and the correspondence, tell you where you stand, and look at practical
              ways forward, starting with negotiation and, where it suits, mediation. If a notice must be sent or answered, we
              prepare it. If the dispute can&apos;t be settled, we explain the tribunal or court steps. We won&apos;t promise an
              outcome. See <Link href="/property-lawyers-melbourne/property-dispute-lawyer-melbourne/">property disputes</Link>.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Property Transfers and Ownership Matters</h3>
            <p>
              Transfers between family members, co-owners or other parties need the right documents signed in the right order.
              We check what must be signed, what the title shows and how the change affects any mortgage. Duty may also be
              payable, and some transfers between spouses or domestic partners may be exempt, but the rules vary with the
              facts. We explain what each owner is agreeing to, especially when someone is added to or removed from the title,
              before you sign. See{" "}
              <Link href="/property-lawyers-melbourne/property-transfer-lawyer-melbourne/">property transfers</Link>.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Indian Power of Attorney for Property Matters</h3>
            <p>
              A Power of Attorney lets someone you trust deal with property for you. In Victoria, a general power can cover a
              defined task such as selling a house. For documents going to India, both countries are parties to the Apostille
              Convention, so a notarised document usually needs a DFAT apostille. We draft the power around the task, explain
              the signing steps and what the Indian side is likely to ask for, and refer you to a notary public. See our{" "}
              <Link href="/property-lawyers-melbourne/indian-power-of-attorney-lawyer-melbourne/">
                Indian Power of Attorney page
              </Link>
              .
            </p>
          </article>
        </div>
      </Section>

      <Section tone="white" id="nri-assistance">
        <SectionHeader title="Property Legal Assistance for NRIs and Indian Families" />
        <p style={proseBody}>
          If you live away from the property, or share ownership with family, small gaps in the paperwork can turn into long
          delays. Many NRIs and families searching for <strong>Indian Lawyers for Property Matters Melbourne</strong> are
          trying to close exactly those gaps. We help you put the right documents and decisions in place and explain what
          happens next.
        </p>
        <div className="service-detail-grid" style={{ marginTop: "2rem" }}>
          <article className="service-text-block">
            <h3>Managing Property Matters While Living in Australia</h3>
            <p>
              Living away from the property, whether in another city, another state or another country, shouldn&apos;t stop you
              dealing with it. We review the contract before you sign, set out what must be done and by when, and arrange
              signing in a form the rules accept. Victoria now treats electronic signing and online witnessing as an ongoing
              option for most legal documents, though some documents need extra steps. We tell you early when something must
              be signed in person, so a delay doesn&apos;t push you past settlement. Our advice covers Australian law, and we
              explain what any India-side steps involve.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Property Documentation and Power of Attorney</h3>
            <p>
              Property documents get rejected when they are signed or witnessed wrongly. We check who must sign, who can
              witness and whether the document matches the transaction. A Victorian enduring power of attorney must be in the
              prescribed form and signed before two independent adult witnesses, one of them an authorised witness such as a
              Justice of the Peace or doctor, and relatives of the person or the attorney can&apos;t witness. We also explain what
              a power can&apos;t do and when a narrower, task-based{" "}
              <Link href="/property-lawyers-melbourne/indian-power-of-attorney-lawyer-melbourne/">power of attorney</Link> is
              safer.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Family Property and Ownership Transfers</h3>
            <p>
              When parents, siblings or a spouse share a property, or ownership is about to change, it pays to get the legal
              side right first. We explain how each owner is affected, review the documents that need signing and flag duty and
              settlement consequences. Some transfers between spouses or domestic partners may be exempt from duty, but not
              every family transfer is. If a co-owner wants out, we help negotiate an agreed outcome and prepare the
              paperwork, so everyone knows where they stand.
            </p>
          </article>
        </div>
      </Section>

      <Section tone="warm" id="australian-transactions">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <h2>Indian Property Lawyers for Australian Property Transactions</h2>
            <p style={{ ...proseBody, marginTop: "1rem", color: "var(--ink-secondary)" }}>
              As <strong>Indian Property Lawyers in Melbourne</strong>, we help you understand the Victorian and Australian
              rules behind your contract before they catch you out. Victoria sets the Section 32 and cooling-off rules, and
              the State Revenue Office assesses duty. Federal foreign investment rules and ATO withholding rules can apply on
              top, depending on your status. We check which ones apply to you, explain the cost and timing of each, and make
              sure the contract reflects them. If something doesn&apos;t fit your plans, you find out before you sign.
            </p>
            <div style={{ overflowX: "auto", marginTop: "1.5rem" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  minWidth: "520px",
                  background: "var(--white)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <thead>
                  <tr style={{ background: "var(--navy-900)", color: "var(--white)" }}>
                    <th style={{ padding: "0.85rem 1rem", textAlign: "left", fontSize: "0.95rem" }}>
                      If this applies to you
                    </th>
                    <th style={{ padding: "0.85rem 1rem", textAlign: "left", fontSize: "0.95rem" }}>What to know</th>
                  </tr>
                </thead>
                <tbody>
                  {propertyRulesRows.map((row) => (
                    <tr key={row.applies} style={{ borderBottom: "1px solid var(--line)" }}>
                      <td
                        style={{
                          padding: "0.85rem 1rem",
                          fontWeight: 600,
                          color: "var(--navy-900)",
                          verticalAlign: "top",
                          width: "38%",
                        }}
                      >
                        {row.applies}
                      </td>
                      <td style={{ padding: "0.85rem 1rem", verticalAlign: "top" }}>{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white" id="why-choose">
        <SectionHeader title="Why Choose Bansal Lawyers for Property Matters?" />
        <p style={proseBody}>
          Clients who search for an <strong>Indian Property Law Firm Melbourne</strong> usually want two things: someone who
          knows Victorian property law, and someone who explains it clearly. Here is how we work on property matters. We
          don&apos;t promise results, because every matter turns on the documents, the other party and the facts.
        </p>
        <div className="service-detail-grid" style={{ marginTop: "2rem" }}>
          <article className="service-text-block">
            <h3>Verified Legal Expertise</h3>
            <p>
              Bansal Lawyers is a Melbourne law firm led by Director and Principal Lawyer{" "}
              <Link href="/about/ajay-bansal/">Ajay Bansal</Link>, and property law is one of our core practice areas. Our
              property work covers contract and Section 32 reviews, conveyancing-related legal support, leases, disputes and
              Power of Attorney documents. You get advice from solicitors, not a call centre.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Clear Communication in Your Language</h3>
            <p>
              Legal advice only helps if you understand it. You can speak directly with a solicitor, and our team gives advice
              in English, Hindi and Punjabi. We explain each term in plain English, tell you what a deadline means for you and
              keep you updated as the matter moves. Meetings are available at our Collins Street office or by virtual
              appointment, so distance isn&apos;t a barrier.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Practical Advice on Your Documents</h3>
            <p>
              We focus on what the paperwork means for your decision. That starts with the contract, Section 32 statement,
              lease or notice in front of you. We point out the clauses that could cost you, suggest changes to raise with the
              other side and tell you plainly what we would do next. If a matter needs a notary public, an Indian adviser or a
              tax adviser, we say so early.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Our Approach to Property Matters</h3>
            <p>
              We start with the facts and your goals, then check the documents and deadlines. We aim to resolve issues through
              negotiation before anything escalates. Where a matter does need a notice, tribunal or court step, we explain what
              it involves and what it may cost you in time and effort. You make the decisions, and we make sure you have what you
              need to make them.
            </p>
          </article>
        </div>
      </Section>

      <section className="client-testimonials-section client-testimonials-section--corner-badge" id="client-reviews">
        <Container>
          <header className="client-testimonials-section__header">
            <h2>What Our Clients Say About Us</h2>
          </header>
          <ClientTestimonialsCarousel items={propertyLawyersMelbourneTestimonials} />
          <GoogleReviewSummaryBadge />
        </Container>
      </section>

      <Section tone="white" id="office">
        <Container>
          <div className="location-grid">
            <div>
              <h2>Our Melbourne Office</h2>
              <p style={proseLead}>
                The office is at Level 8, 278 Collins Street, Melbourne VIC 3000, between Swanston and Elizabeth Streets.
                Trams on Collins Street stop nearby.
              </p>
              <p style={proseBody}>
                Book a consultation to review a contract or Section 32 statement, talk through a lease, settlement issue or
                property dispute, or get advice before you sign.
              </p>
              <address style={{ fontStyle: "normal", margin: "1.5rem 0", color: "var(--navy-950)", fontWeight: 600 }}>
                {businessDetails.address}
              </address>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <ButtonLink href="/contact/" variant="primary">
                  Book a Consultation
                </ButtonLink>
                <ButtonLink
                  href="https://www.google.com/maps/search/?api=1&query=Level+8,+278+Collins+Street+Melbourne+VIC+3000"
                  variant="secondary"
                >
                  Get Directions
                </ButtonLink>
              </div>
            </div>
            <OfficeMapEmbed />
          </div>
        </Container>
      </Section>

      <CtaSection
        id="speak-with-us"
        title="Speak With Indian Property Lawyers in Melbourne"
        text={
          <>
            <p>
              If you are buying, selling, leasing or managing property, talk to us before you sign anything. Bansal Lawyers acts
              as <strong>Indian Property Lawyers in Melbourne</strong> for individuals, families, investors and NRIs. Bring your
              contract, Section 32 statement, lease or notice, and we will tell you where you stand and what to do next.
            </p>
            <p style={{ marginTop: "1rem" }}>
              <strong>Office:</strong> {businessDetails.address}
              <br />
              <strong>Phone:</strong>{" "}
              <a href={businessDetails.nationalLineTel}>{businessDetails.nationalLineDisplay}</a> | <strong>Mobile:</strong>{" "}
              <a href={businessDetails.phoneTel}>{businessDetails.phone}</a>
              <br />
              <strong>Email:</strong>{" "}
              <a href={businessDetails.emailMailto}>{businessDetails.email}</a>
              <br />
              <strong>Hours:</strong> {officeHoursDescription} Melbourne time
            </p>
          </>
        }
        action={{ label: "Book a Consultation", href: "/contact/" }}
        secondaryAction={{
          label: `Call ${businessDetails.phone}`,
          href: businessDetails.phoneTel,
        }}
        phone={businessDetails.nationalLine}
        phoneLabel="National Enquiries"
        badges={["Section 32 & contract reviews", "English, Hindi & Punjabi advice", "Melbourne CBD & virtual appointments"]}
      />

      <Section tone="warm" id="faqs">
        <Faq
          title="Frequently Asked Questions About Indian Property Lawyers in Melbourne"
          items={propertyFaqs}
        />
      </Section>
    </div>
  );
}