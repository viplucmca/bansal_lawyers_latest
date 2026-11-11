import type { Metadata } from "next";
import Image from "next/image";
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
  ImageTextSection,
  ProcessSteps,
  Section,
  SectionHeader,
  TrustBar,
} from "@/components/ui";
import { getTurnstileSiteKey } from "@/lib/booking/turnstile";
import { commercialLawyersMelbourneTestimonials } from "@/lib/commercial-lawyers-melbourne-testimonials";
import { createMetadata } from "@/lib/metadata";
import {
  COMMERCIAL_LAWYERS_MELBOURNE_PAGE_DESCRIPTION,
  COMMERCIAL_LAWYERS_MELBOURNE_PAGE_TITLE,
  createCommercialLawyersMelbournePageGraphSchema,
} from "@/lib/schema";
import { businessDetails } from "@/lib/site";
import type { FaqItem, ProcessItem } from "@/types/content";

export const metadata: Metadata = createMetadata({
  title: COMMERCIAL_LAWYERS_MELBOURNE_PAGE_TITLE,
  description: COMMERCIAL_LAWYERS_MELBOURNE_PAGE_DESCRIPTION,
  path: "/commercial-lawyers-melbourne",
  keywords: [
    "Indian Commercial Lawyers Melbourne",
    "Commercial Lawyers Melbourne",
    "Business Lawyers Melbourne",
    "Contract Lawyers Melbourne",
    "Commercial Dispute Lawyers Melbourne",
    "Debt Recovery Lawyers Melbourne",
    "Shareholder Agreements Melbourne",
    "Business Sale and Purchase Melbourne",
    "Loan Agreements Melbourne",
  ],
});

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

const commercialProcessSteps: ProcessItem[] = [
  {
    title: "Step 1: Understand Your Business and Legal Requirements",
    description:
      "We listen first. Tell us about your business, what's gone wrong or what you're planning, and what you want out of it. Nothing is too small to mention. You can meet us at our Collins Street office, or talk by phone or video, whichever suits you.",
  },
  {
    title: "Step 2: Review Relevant Contracts and Documents",
    description:
      "Next we read the paperwork: agreements, emails, invoices and anything else that matters. If some documents are missing, tell us anyway. Other evidence, like emails and bank records, can often fill the gaps. We'll let you know what else to look for.",
  },
  {
    title: "Step 3: Explain Potential Legal Risks and Options",
    description:
      "Then we explain what it all means, where the risks are and what you could do about them, including how much time and money each option might take. No jargon and no pressure. We'll also be upfront about what we can't be sure of. It's better to know now than halfway through.",
  },
  {
    title: "Step 4: Discuss Negotiation or Dispute-Resolution Strategies",
    description:
      "Many commercial problems are better settled than fought. Where it makes sense, we try negotiation, settlement or mediation first, because they're often quicker and cheaper than a hearing. We'll talk through which approach suits your goals, the other side and the relationship you want to keep.",
  },
  {
    title: "Step 5: Assist With the Agreed Legal Steps",
    description:
      "Once you decide how to move forward, we help carry it out. That might mean drafting or negotiating an agreement, sending a notice, preparing court documents or appearing for you where needed. The same team stays with you, so you are not explaining your business to someone new each time.",
  },
];

const commercialFaqs: FaqItem[] = [
  {
    question: "Can a lawyer review a business contract before I sign it?",
    answer:
      "Yes. A commercial lawyer can review a business contract, explain its terms and identify potential risks or obligations before you sign.",
  },
  {
    question: "Do you help with commercial disputes?",
    answer:
      "Bansal Lawyers assists with commercial dispute matters, including contractual disagreements, business conflicts and debt recovery. The appropriate approach depends on the circumstances of the dispute.",
  },
  {
    question: "Can you help with loan agreements?",
    answer:
      "You can seek assistance with reviewing or preparing loan agreements, including the repayment terms, obligations and other relevant conditions.",
  },
  {
    question: "Do you assist with buying or selling a business?",
    answer:
      "Commercial legal assistance may include reviewing business sale agreements, identifying contractual obligations and helping clients understand the legal aspects of a business transaction.",
  },
  {
    question: "When should a business contact a commercial lawyer?",
    answer:
      "Consider contacting a commercial lawyer when preparing or signing a business agreement, entering a business transaction, dealing with a contractual disagreement or seeking to recover an unpaid debt.",
  },
  {
    question: "Can you help with shareholder and partnership agreements?",
    answer:
      "Yes. We help co-owners draft agreements, check ones they've been given and sort out disagreements over an existing agreement. A good one covers who owns what, how decisions get made, how an owner can leave and what happens when you can't agree. Writing it down early is usually easier than arguing it out in the middle of a dispute. Get in touch and bring any draft you already have.",
    answerText:
      "A commercial lawyer can assist with preparing or reviewing shareholder and partnership agreements. These agreements may address ownership, decision-making, responsibilities, exits and procedures for resolving disagreements.",
  },
  {
    question: "What should I do if another business breaches a contract?",
    answer:
      "Start by checking what the contract says about breaches, notices and dispute steps, because many require a particular process. Keep all your records, including emails, invoices and delivery or work records. In Victoria, the general time limit is six years from when the breach happened, though some situations differ, so don't leave it too long. We can look at your position and advise on a notice, negotiation or another step.",
    answerText:
      "Review the contract, keep records of relevant communications and events, and check any notice or dispute-resolution requirements. A commercial lawyer can assess the circumstances and explain possible options, including negotiation or formal legal action. Limitation periods and exceptions may apply.",
  },
  {
    question: "Can I arrange a phone or video consultation?",
    answer: (
      <>
        Yes. You can come to our Collins Street office, or set up a phone or video consultation instead. It&apos;s a good
        fit if you work long hours or live a long way from the CBD. Tell us your preferred format and language when you
        book, and ask us to explain how the first consultation works. You can call{" "}
        <a href={businessDetails.nationalLineTel}>{businessDetails.nationalLine}</a> or{" "}
        <a href={businessDetails.phoneTel}>{businessDetails.phone}</a>.
      </>
    ),
    answerText:
      "Consultations may be arranged at the Melbourne CBD office, by phone or by video. Contact Bansal Lawyers to discuss your preferred consultation format and availability.",
  },
  {
    question: "Where is Bansal Lawyers located in Melbourne?",
    answer: (
      <>
        We&apos;re at Level 8, 278 Collins Street, Melbourne VIC 3000, in the CBD. Contact us before you visit so we can
        arrange a consultation. Our email is{" "}
        <a href={`mailto:${businessDetails.email}`}>{businessDetails.email}</a>.
      </>
    ),
    answerText:
      "Bansal Lawyers is located at Level 8, 278 Collins Street, Melbourne VIC 3000. Contact the firm before visiting to arrange a consultation.",
  },
  {
    question: "How can I book a consultation with Bansal Lawyers?",
    answer: (
      <>
        Call <a href={businessDetails.nationalLineTel}>{businessDetails.nationalLine}</a> or{" "}
        <a href={businessDetails.phoneTel}>{businessDetails.phone}</a>, email{" "}
        <a href={`mailto:${businessDetails.email}`}>{businessDetails.email}</a>, or use our{" "}
        <Link href="/book-an-appointment">online booking form</Link>.
      </>
    ),
    answerText:
      "You can contact Bansal Lawyers on 0422 905 860, email info@bansallawyers.com.au, or visit https://www.bansallawyers.com.au/book-an-appointment to enquire about booking a consultation.",
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

const h3Style = { marginTop: "1.75rem" } as const;

const whereWeAssistPoints = [
  "Retail shops, cafes and hospitality businesses",
  "Professional services and consulting firms",
  "Import, wholesale and distribution companies",
  "Family-owned businesses and partnerships",
  "Start-ups and growing SMEs",
  "Property and construction-related ventures",
  "Companies buying or selling a business",
  "Directors, shareholders and private lenders",
];

export default function CommercialLawyersMelbournePage() {
  const turnstileSiteKey = getTurnstileSiteKey();
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Indian Commercial Lawyers in Melbourne" },
  ];

  return (
    <div className="commercial-landing-page">
      <StructuredData data={createCommercialLawyersMelbournePageGraphSchema(commercialFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Indian Commercial Lawyers in Melbourne"
        intro={
          <>
            <p>
              A contract that needs checking. A partner who wants out. An invoice nobody is paying. Sooner or later,
              most business owners run into at least one of these, and that&apos;s the kind of problem our Indian
              commercial lawyers in Melbourne help with at Bansal Lawyers.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              We&apos;re a Melbourne law firm that works with Indian business owners, entrepreneurs, professionals,
              investors and companies on commercial law matters. We review and draft agreements, set up partnership and
              shareholder arrangements, act on business sales and purchases, chase unpaid debts and deal with disputes.
              Want to talk in Hindi or Punjabi? Tell us when you book. We advise on Australian law only.
            </p>
          </>
        }
        primaryAction={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: `Call ${businessDetails.phone}`,
          href: businessDetails.phoneTel,
        }}
        aside={<HeroBookingPlaceholder defaultPracticeArea="commercial" turnstileSiteKey={turnstileSiteKey} />}
      />

      <TrustBar
        items={[
          "Collins Street Office and Remote Consultations",
          "Contract Review and Dispute Resolution",
          "Plain-English Commercial Guidance",
          "English, Hindi and Punjabi Legal Assistance",
          "Commercially Practical Advice",
        ]}
      />

      <Section tone="white">
        <ImageTextSection
          reverse
          title="Practical Legal Advice for Business Matters"
          imageSrc="/images/melbourne-legal-chambers.webp"
          imageAlt="Melbourne legal chambers and commercial law consultation at Bansal Lawyers"
          body={
            <>
              <p style={proseLead}>
                Starting a business, reviewing a contract, signing an agreement, resolving a dispute or chasing a debt:
                getting advice early puts you in a stronger position.
              </p>
              <p style={proseBody}>
                We begin by understanding what&apos;s going on commercially. Then we read the documents, explain the
                risks in plain language and help you decide your next step. We look at the legal risk and the commercial
                reality together.
              </p>
            </>
          }
        />
      </Section>

      <Section tone="warm" id="matters">
        <SectionHeader
          title="Commercial Legal Services for Indian Businesses in Melbourne"
          intro="We help business owners, companies, entrepreneurs and investors with agreements, transactions, contract problems and disputes across Melbourne."
        />

        <div className="service-detail-grid">
          <article className="service-text-block">
            <h3>Business Contracts and Contract Review</h3>
            <p>
              We read contracts in plain language and flag risky terms like liability, indemnities, personal guarantees
              and automatic renewals. Our{" "}
              <Link href="/commercial-lawyers-melbourne/business-contract-lawyer-melbourne/">business contract lawyers</Link>{" "}
              draft and review agreements, and our{" "}
              <Link href="/commercial-lawyers-melbourne/contract-review-lawyer-melbourne/">contract review</Link> work
              helps you understand what you&apos;re signing before you commit.
            </p>
          </article>

          <article className="service-text-block">
            <h3>Commercial Agreements</h3>
            <p>
              Supplier terms, customer terms, service agreements and contractor agreements each need to match how you
              really trade. Our{" "}
              <Link href="/commercial-lawyers-melbourne/commercial-agreement-lawyer-melbourne/">
                commercial agreement lawyers
              </Link>{" "}
              draft or review them so payment, delivery, risk and exit terms are clear.
            </p>
          </article>

          <article className="service-text-block">
            <h3>Loan Agreements</h3>
            <p>
              Whether you&apos;re lending or borrowing for business, interest, repayment dates, security and guarantees
              should be on paper. Our{" "}
              <Link href="/commercial-lawyers-melbourne/loan-agreement-lawyer-melbourne/">loan agreement lawyers</Link>{" "}
              explain what you&apos;re agreeing to before money moves.
            </p>
          </article>

          <article className="service-text-block">
            <h3>Shareholder and Partnership Agreements</h3>
            <p>
              Co-owners need clear rules on ownership, decision-making and exits. We help with{" "}
              <Link href="/commercial-lawyers-melbourne/shareholder-agreement-lawyer-melbourne/">
                shareholder agreements
              </Link>{" "}
              and{" "}
              <Link href="/commercial-lawyers-melbourne/partnership-agreement-lawyer-melbourne/">
                partnership agreements
              </Link>
              .
            </p>
          </article>

          <article className="service-text-block">
            <h3>Business Sale and Purchase</h3>
            <p>
              Buyers and sellers both need the contract, legal checks, leases, liabilities and settlement conditions looked
              at closely. Our{" "}
              <Link href="/commercial-lawyers-melbourne/business-sale-purchase-lawyer-melbourne/">
                business sale and purchase lawyers
              </Link>{" "}
              guide you from first offer to completion.
            </p>
          </article>

          <article className="service-text-block">
            <h3>Commercial Disputes</h3>
            <p>
              Disputes over contracts, payments and partnerships often start small and grow. We look at your documents,
              explain your options and try to settle things sensibly first. If it can&apos;t be settled, we walk you
              through the court steps and what each one is likely to cost. A{" "}
              <Link href="/commercial-lawyers-melbourne/commercial-dispute-lawyer-melbourne/">
                commercial dispute lawyer
              </Link>{" "}
              can give you a straight view early, before positions harden.
            </p>
          </article>

          <article className="service-text-block">
            <h3>Debt Recovery</h3>
            <p>
              Someone owes you money and won&apos;t pay? We check your evidence, confirm who actually owes the debt, then
              send a letter of demand and negotiate payment. Where it makes sense, we take formal steps, like a statutory
              demand or court action. Our{" "}
              <Link href="/commercial-lawyers-melbourne/debt-recovery-lawyer-melbourne/">debt recovery lawyers</Link> will
              also tell you honestly if a debt probably isn&apos;t worth chasing.
            </p>
          </article>

          <article className="service-text-block">
            <h3>Business Legal Advice</h3>
            <p>
              Planning a big move, like taking on a partner, signing a lease or borrowing money? Advice before you commit
              is usually easier and cheaper than fixing things afterwards. You can get{" "}
              <Link href="/commercial-lawyers-melbourne/business-legal-advice-lawyer-melbourne/">
                business legal advice
              </Link>{" "}
              before you decide, not only after something goes wrong.
            </p>
          </article>

          <article className="service-text-block">
            <h3>Negotiations and Settlements</h3>
            <p>
              Sometimes the best result is a deal both sides can live with. We negotiate for you, keep you updated on what
              the other side is offering and make sure the final agreement is written up properly. Our{" "}
              <Link href="/commercial-lawyers-melbourne/negotiations-settlements-lawyer-melbourne/">
                negotiations and settlements
              </Link>{" "}
              work covers both disputes and deals.
            </p>
          </article>

          <article className="service-text-block">
            <h3>Legal Notices</h3>
            <p>
              Need to send a letter of demand or a breach notice? Or have you received one and don&apos;t know what to do?
              We prepare notices and help you reply to them. A{" "}
              <Link href="/commercial-lawyers-melbourne/legal-notice-lawyer-melbourne/">legal notice lawyer</Link> can look
              at it first.
            </p>
          </article>
        </div>
      </Section>

      <Section tone="white" id="contracts-and-agreements">
        <div style={{ width: "100%" }}>
          <h2>Business Contract Drafting, Review and Negotiation</h2>
          <p style={proseLead}>
            A contract only works if both sides read it the same way. Before you sign, you need to know your rights,
            your obligations and what happens if something goes wrong. We go through the document with you, flag the
            risks and help you push for better terms.
          </p>

          <h3 style={h3Style}>Why Business Contracts Need Legal Review</h3>
          <p style={proseBody}>
            Once you sign, you&apos;re generally held to what the contract says, whether you read every clause or not. A
            review shows you the full picture while you can still say no. Our{" "}
            <Link href="/commercial-lawyers-melbourne/contract-review-lawyer-melbourne/">contract review lawyers</Link>{" "}
            read all of it and tell you which terms carry real risk, like liability, indemnities, personal guarantees and
            automatic renewals. If the other side wrote the contract, we look hardest at where they&apos;ve pushed the
            risk onto you.
          </p>

          <h3 style={h3Style}>Common Contract Terms and Clauses to Consider</h3>
          <p style={proseBody}>
            A handful of clauses cause most of the trouble: price and payment, scope and delivery, termination and
            notice, liability caps, confidentiality and restraints, and how disputes get resolved. We check all of these.
          </p>
          <p style={proseBody}>
            If you&apos;re a small business signing someone else&apos;s standard form contract, we also look for unfair
            terms. Since November 2023, the ACCC has enforced a ban on unfair terms in standard form small business
            contracts, and penalties can apply.
          </p>

          <h3 style={h3Style}>Drafting and Reviewing Commercial Agreements</h3>
          <p style={proseBody}>
            Need a new agreement? We draft it around your business instead of pulling a template off the shelf.
            We&apos;ll ask how you really trade, what worries you and what you want from the deal. Then we write the
            terms on payment, delivery, risk and exit. Our{" "}
            <Link href="/commercial-lawyers-melbourne/business-contract-lawyer-melbourne/">business contract lawyers</Link>{" "}
            can do this before any money moves.
          </p>

          <h3 style={h3Style}>Resolving Contractual Disagreements</h3>
          <p style={proseBody}>
            When a disagreement starts, we review the wording, the emails and what each side has done. Then we advise on
            notice steps, negotiation or the next formal step. Acting early usually leaves you with more options.
          </p>
        </div>
      </Section>

      <Section tone="warm" id="shareholder-partnership">
        <div style={{ width: "100%" }}>
          <h2>Shareholder, Partnership and Business Agreements</h2>
          <p style={proseLead}>
            Co-owners who get the deal in writing early spend less time arguing later. Whether you&apos;re starting out
            or updating old paperwork, we help you record how the business is run.
          </p>

          <h3 style={h3Style}>Shareholder Agreements</h3>
          <p style={proseBody}>
            A shareholder agreement sits alongside the company&apos;s constitution and sets the rules between owners.
            Our{" "}
            <Link href="/commercial-lawyers-melbourne/shareholder-agreement-lawyer-melbourne/">
              shareholder agreement lawyers
            </Link>{" "}
            draft or update it to cover who owns what, which decisions need everyone&apos;s approval, how shares can be
            sold or bought out and how a deadlock gets broken. We can also review an existing agreement for gaps.
          </p>

          <h3 style={h3Style}>Partnership Agreements</h3>
          <p style={proseBody}>
            Partners in a general partnership are generally personally liable for the firm&apos;s debts under the
            Partnership Act 1958 (Vic). The Act&apos;s default rules also fill any gaps your agreement leaves. That&apos;s
            why our{" "}
            <Link href="/commercial-lawyers-melbourne/partnership-agreement-lawyer-melbourne/">
              partnership agreement lawyers
            </Link>{" "}
            get the details down: profit shares, capital, roles, what happens when someone leaves and how disagreements
            get handled.
          </p>

          <h3 style={h3Style}>Roles, Responsibilities and Decision-Making</h3>
          <p style={proseBody}>
            Many fights between owners start with unclear roles. Who does what? Who can sign contracts or spend money?
            Which decisions need a vote, and how often do you meet? We help you write the answers down. Once they&apos;re
            on paper, decisions stop depending on memory or goodwill. As the business grows and people&apos;s jobs
            change, we can adjust the rules too.
          </p>

          <h3 style={h3Style}>Business Ownership Changes and Disagreements</h3>
          <p style={proseBody}>
            An investor joins. A partner retires. An owner wants out. We advise on how to handle the transfer, how the
            interest should be valued and what has to be signed. If owners already disagree, talk to a lawyer sooner
            rather than later. We review the documents, explain your options and try to negotiate a way forward before
            it turns into a court fight. If your interests clash with another owner&apos;s, we&apos;ll tell you when
            each of you needs your own lawyer.
          </p>
        </div>
      </Section>

      <Section tone="white" id="loan-agreements">
        <div style={{ width: "100%" }}>
          <h2>Loan Agreements and Business Lending Documents</h2>
          <p style={proseLead}>
            Money lent without proper paperwork is one of the most common causes of business disputes. Whether
            you&apos;re lending or borrowing, get the repayments, interest, security and guarantees on paper. We act
            for lenders and borrowers, so we see the issues from both sides.
          </p>

          <h3 style={h3Style}>Drafting and Reviewing Loan Agreements</h3>
          <p style={proseBody}>
            A loan agreement is a written record of how much was lent, how it gets paid back and what happens if it
            doesn&apos;t. We prepare agreements for business loans, director and shareholder loans, and loans between
            connected businesses or associates. If someone hands you a loan document, we&apos;ll explain what you&apos;re
            agreeing to and what to ask for. Our{" "}
            <Link href="/commercial-lawyers-melbourne/loan-agreement-lawyer-melbourne/">loan agreement lawyers</Link> can
            do this before any money moves, which is the best time to fix a problem.
          </p>

          <h3 style={h3Style}>Repayment Terms and Interest Provisions</h3>
          <p style={proseBody}>
            The agreement should say how much was advanced, what interest applies, when each repayment is due, and what
            happens if one is late or the loan is paid off early. If the terms change later, put the change in writing
            so nobody argues about it down the track. We also check the numbers add up. Small errors here cause big
            arguments.
          </p>

          <h3 style={h3Style}>Security, Guarantees and Default Provisions</h3>
          <p style={proseBody}>
            A guarantee can make a director or a relative personally liable for a company&apos;s debt. Before you sign,
            make sure you know exactly what&apos;s being guaranteed. We&apos;ll explain it. For lenders, we advise on
            what security to take and which events let you demand repayment.
          </p>

          <h3 style={h3Style}>Legal Assistance for Lenders and Borrowers</h3>
          <p style={proseBody}>
            If repayments are missed, we review demand notices, negotiated repayment plans and what happens if the debt
            escalates. We act for whichever side you&apos;re on and explain the next step before you take it.
          </p>
        </div>
      </Section>

      <Section tone="warm" id="business-sales">
        <div style={{ width: "100%" }}>
          <h2>Buying and Selling a Business in Melbourne</h2>
          <p style={proseLead}>
            Buying or selling a business is a big decision. The contract, lease terms, assets, liabilities, employee
            entitlements and settlement conditions all need a close look before you commit.
          </p>
          <p style={proseBody}>
            We help with the sale contract, review the documents, handle negotiations and guide you through to
            completion. Our{" "}
            <Link href="/commercial-lawyers-melbourne/business-sale-purchase-lawyer-melbourne/">
              business sale and purchase lawyers
            </Link>{" "}
            act for buyers and sellers.
          </p>

          <h3 style={h3Style}>Legal Due Diligence Before Buying a Business</h3>
          <p style={proseBody}>
            Before you sign, we help check contracts, licences, employee arrangements, disputes, debts and whether assets
            are secured. We often work alongside your accountant. Business Victoria also suggests what to look for when
            you buy a business, and we can help you gather the legal side of that list.
          </p>

          <h3 style={h3Style}>Reviewing the Business Sale Agreement</h3>
          <p style={proseBody}>
            We read the contract for what is included and excluded, how stock is valued, settlement conditions, restraint
            clauses and what happens if someone defaults.
          </p>

          <h3 style={h3Style}>Assets, Liabilities and Business Leases</h3>
          <p style={proseBody}>
            Equipment, stock, existing debts, employee entitlements and lease assignments all need to be spelled out. We
            check whether equipment is owned or leased, and whether a search of the Personal Property Securities Register
            is needed.
          </p>

          <h3 style={h3Style}>Negotiating Sale Terms and Conditions</h3>
          <p style={proseBody}>
            Deposits, conditions, warranties, handover arrangements and non-compete clauses are all worth negotiating
            before you sign. We negotiate for your side and explain what you&apos;re giving up if you agree.
          </p>

          <h3 style={h3Style}>Settlement and Completion</h3>
          <p style={proseBody}>
            We help check that conditions are met, prepare completion documents, deal with the other side&apos;s
            lawyers, confirm payments and records, and sort lease paperwork so settlement runs smoothly.
          </p>
        </div>
      </Section>

      <Section tone="white" id="disputes-and-litigation">
        <div style={{ width: "100%" }}>
          <h2>Commercial Disputes and Business Litigation</h2>
          <p style={proseLead}>
            Unpaid invoices, missed deadlines and partner fall-outs can drain cash flow and eat your time. Acting early
            generally leaves you with more options.
          </p>

          <h3 style={h3Style}>Business and Contract Disputes</h3>
          <p style={proseBody}>
            We act for suppliers, customers and contractors. We review the contract and your evidence, then advise on a
            practical fix, whether that&apos;s a notice, negotiation or something more formal.
          </p>

          <h3 style={h3Style}>Shareholder and Partnership Disputes</h3>
          <p style={proseBody}>
            When owners fall out, the business suffers. We look at the shareholder or partnership agreement, the company
            records and the history behind the disagreement. Then we explain your rights and options, and try to
            negotiate an exit or a way of working together before anyone files in court. If talks stall, we&apos;ll tell
            you what the next step involves.
          </p>

          <h3 style={h3Style}>Breach of Contract Claims</h3>
          <p style={proseBody}>
            A breach is when one side doesn&apos;t do what the contract says. We check the breach and any notice steps
            you have to follow. Then we advise whether to send a notice, negotiate or start proceedings. Time limits
            matter. In Victoria, a contract claim generally has to be started within six years of the breach under the
            Limitation of Actions Act 1958 (Vic), though some situations differ.
          </p>

          <h3 style={h3Style}>Negotiation and Alternative Dispute Resolution</h3>
          <p style={proseBody}>
            Most disputes settle before a hearing. We negotiate for you and, where it suits, arrange mediation. The
            Victorian Small Business Commission offers low-cost mediation for many small business disputes, and we can
            help you prepare for it. Any agreement reached gets recorded in writing so it holds, which is a big part of
            our{" "}
            <Link href="/commercial-lawyers-melbourne/negotiations-settlements-lawyer-melbourne/">
              negotiations and settlements
            </Link>{" "}
            work.
          </p>

          <h3 style={h3Style}>Court Proceedings and Litigation</h3>
          <p style={proseBody}>
            If a dispute can&apos;t be settled, we explain the court path, including the cost and risk at each stage,
            before you decide. The Magistrates&apos; Court of Victoria hears civil claims up to $100,000. Larger claims
            go to a higher court. Once proceedings start, the Civil Procedure Act 2010 (Vic) expects everyone to try to
            resolve the dispute by agreement where they reasonably can. If the matter reaches beyond a business dispute,
            our <Link href="/civil-lawyers-melbourne/">civil lawyers</Link> can look at it too.
          </p>
          <p style={proseBody}>
            Whatever you&apos;re facing, whether it&apos;s a payment problem, a broken contract, owners falling out or a
            demand you&apos;ve just received, we can help. Whether a matter settles, goes to mediation or ends up in
            court depends on the facts and the evidence, and we can&apos;t guarantee an outcome. We&apos;ll give you a
            straight assessment first.
          </p>
        </div>
      </Section>

      <Section tone="warm" id="debt-recovery">
        <div style={{ width: "100%" }}>
          <h2>Debt Recovery Lawyers in Melbourne</h2>
          <p style={proseLead}>
            An unpaid invoice drains your cash flow and eats your time. Our{" "}
            <Link href="/commercial-lawyers-melbourne/debt-recovery-lawyer-melbourne/">debt recovery lawyers</Link> help
            you work out the most sensible way to get paid. We also help if you&apos;re the one being chased, because you
            have options too.
          </p>

          <h3 style={h3Style}>Recovering Outstanding Business Debts</h3>
          <p style={proseBody}>
            We start with your evidence: the contract or terms of trade, invoices, proof of delivery and any promise to
            pay. Then we confirm exactly who owes the money and whether pursuing it makes commercial sense before we take
            the next step.
          </p>

          <h3 style={h3Style}>Letters of Demand and Legal Notices</h3>
          <p style={proseBody}>
            We draft firm and accurate letters of demand that state what is owed, why and by when. We also prepare breach
            notices and help you respond to notices you receive. A{" "}
            <Link href="/commercial-lawyers-melbourne/legal-notice-lawyer-melbourne/">legal notice lawyer</Link> will
            check the requirements before notices go out.
          </p>

          <h3 style={h3Style}>Statutory Demands for Companies</h3>
          <p style={proseBody}>
            If a company owes you at least $4,000 that is due and payable and not genuinely disputed, a statutory demand
            under the Corporations Act may be an option. The company then has 21 days to pay or apply to a court to set
            the demand aside. If it does neither, it may be presumed insolvent. ASIC explains the process on its website,
            and we can advise whether it suits your situation.
          </p>

          <h3 style={h3Style}>Court Proceedings for Unpaid Debts</h3>
          <p style={proseBody}>
            If demands fail, we advise on suing in the Magistrates&apos; Court of Victoria for claims up to $100,000.
            For contract debts, the general time limit is six years from when the debt arose, though some situations
            differ.
          </p>

          <h3 style={h3Style}>Responding to a Debt Recovery Claim</h3>
          <p style={proseBody}>
            Don&apos;t ignore a claim. If you&apos;ve received a statutory demand, the 21-day deadline is strict and
            courts generally cannot extend it. We review what you&apos;ve been sent, explain your options and help you
            respond in time.
          </p>
        </div>
      </Section>

      <Section tone="white" id="commercial-process">
        <SectionHeader
          title="How Our Commercial Lawyers Can Assist Your Business"
          intro="We work through matters the same way: start with your business, then the paperwork, then your options. Many problems settle without a hearing, so not every step applies to every client."
        />
        <ProcessSteps items={commercialProcessSteps} columns={3} />
      </Section>

      <Section tone="warm" id="who-we-assist">
        <SectionHeader
          title="Who We Assist With Commercial Legal Matters"
          intro="Commercial law touches everyone from a sole trader signing a supplier agreement to a company buying another business. We work with all kinds of clients, including members of Melbourne's Indian business community."
        />
        <div className="service-detail-grid">
          <article className="service-text-block">
            <h3>Indian Small Business Owners and Entrepreneurs</h3>
            <p>
              Started a business in Melbourne? We can set up your standard terms, review leases and supplier agreements,
              and advise on your structure. We&apos;ll also help you avoid costly mistakes early on. Contracts and court
              papers are in English, so we go through them with you, in Hindi or Punjabi if you prefer.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Companies and Corporate Entities</h3>
            <p>
              We advise directors and companies on commercial contracts, shareholder arrangements, finance documents,
              disputes and debt recovery. Come to us before a big decision, not just when something has gone wrong. We can
              advise as needed or on a regular basis, depending on how your business works.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Business Partners and Shareholders</h3>
            <p>
              If you own a business with others, we help you record how it&apos;s run and review any agreements you
              already have. We also help you plan for exits and sort out disagreements. Where owners&apos; interests
              conflict, we&apos;ll tell you if each of you needs your own lawyer, so the advice you get is advice you can
              rely on.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Buyers and Sellers of Businesses</h3>
            <p>
              Buyers want to know exactly what they&apos;re getting. Sellers want clear terms and a smooth settlement. We
              act for both, from first-time buyers to owners selling after years of hard work. We review the contract,
              check the details and keep things moving to settlement.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Lenders, Borrowers and Investors</h3>
            <p>
              Private loans and investments need the terms documented. We explain security, guarantees and what happens if
              repayments stop, and we act for whichever side of the deal you&apos;re on.
            </p>
          </article>
        </div>
      </Section>

      <Section tone="white" id="where-we-assist">
        <SectionHeader
          title="Melbourne Businesses We Commonly Assist"
          intro="We act for owners, directors and investors across Melbourne and greater Victoria when contracts, transactions or disputes need legal attention."
        />
        <ul className="points-list">
          {whereWeAssistPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
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
              Ajay Bansal is the director and principal lawyer. Michael Saleh is a solicitor. Read each profile, then
              book a consultation.
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
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </a>
                    <Link
                      href={member.profileHref}
                      className="team-clean-card__icon-link"
                      aria-label={`View ${member.name}'s profile`}
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
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

      <Section tone="white" id="why-choose">
        <SectionHeader
          title="Why Choose Bansal Lawyers for Commercial Law?"
          intro="You have plenty of choices, so here&apos;s what the Bansal Lawyers team offers in plain terms. We focus on advice you can understand and use, and we&apos;re upfront about what we can and can&apos;t do."
        />
        <div className="service-detail-grid">
          <article className="service-text-block">
            <h3>Melbourne CBD Office</h3>
            <p>
              We&apos;re at Level 8, 278 Collins Street, Melbourne VIC 3000, right in the CBD. Bring your documents in
              and go through them with us face to face. It&apos;s an easy trip from the city&apos;s main train stations
              and tram lines, so a meeting fits into a working day.
            </p>
          </article>
          <article className="service-text-block">
            <h3>In-Person, Phone and Video Consultations</h3>
            <p>
              Come to Collins Street, or talk to us by phone or secure video if that suits your day better. Want to speak
              Hindi or Punjabi? Tell us when you book. If a deadline is close, say so and we&apos;ll try to see you as
              soon as we can.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Plain-English Legal Explanations</h3>
            <p>
              We explain what a clause or notice means and what it could cost you, without the legal waffle. Then you
              decide. If we think a point isn&apos;t worth fighting over, we&apos;ll say so. You should leave every
              conversation knowing where you stand, what your options are and what happens next.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Commercially Practical Advice</h3>
            <p>
              The legal answer isn&apos;t always the best business answer. A perfect result that kills the deal
              doesn&apos;t help you. We weigh the legal risk against your goals, the cost of each step and the
              relationship you want to keep with the other side. Sometimes the best advice is to sign with a few changes.
              Sometimes it&apos;s to walk away.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Assistance With Contracts, Transactions and Disputes</h3>
            <p>
              Contract review, shareholder agreements, business sales, loans, disputes, debt recovery. The same team can
              help from the start of a matter to the end. You won&apos;t have to explain your business to a new lawyer
              each time something comes up, because we already know your history.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Relevant Solicitor Experience and Professional Credentials</h3>
            <p>
              <Link href="/about/ajay-bansal">Ajay Bansal</Link> is the firm&apos;s Director and Principal Lawyer. He
              speaks English, Hindi and Punjabi. His profile says he has seven years&apos; experience across commercial,
              property, family, criminal and civil matters, and that he appears in Victorian and Federal courts.
            </p>
            <p>
              <Link href="/about/michael-saleh">Michael Saleh</Link> is a solicitor admitted to the Supreme Court of
              Victoria, with experience in civil litigation and commercial disputes. He has appeared in the
              Magistrates&apos; Court of Victoria, the Federal Circuit and Family Court of Australia and VCAT.
            </p>
          </article>
          <article className="service-text-block">
            <h3>Advice on Australian Law for Businesses With India Links</h3>
            <p>
              Do you have a supplier, family or business interests in India? Tell us early. We advise on Australian law
              only. If part of your matter involves India, like a contract, property or company there, we&apos;ll explain
              what we can do from Melbourne and where you&apos;ll need a lawyer in India. We can often handle the
              Australian side.
            </p>
          </article>
        </div>
      </Section>

      <section className="client-testimonials-section client-testimonials-section--corner-badge" id="client-reviews">
        <Container>
          <header className="client-testimonials-section__header">
            <h2>What Our Clients Say About Us</h2>
          </header>
          <ClientTestimonialsCarousel items={commercialLawyersMelbourneTestimonials} />
          <GoogleReviewSummaryBadge />
        </Container>
      </section>

      <Section tone="white" id="office">
          <div className="location-grid">
            <div>
              <h2>Our Melbourne Office</h2>
              <p style={{ ...proseLead, marginTop: "1rem" }}>
                The office is at Level 8, 278 Collins Street, Melbourne VIC 3000, between Swanston and Elizabeth
                Streets. Trams on Collins Street stop nearby.
              </p>
              <p style={proseBody}>
                Book a consultation to talk through a contract, business transaction, commercial dispute or debt recovery
                matter.
              </p>
              <address style={{ fontStyle: "normal", margin: "1.5rem 0", color: "var(--navy-950)", fontWeight: 600 }}>
                {businessDetails.address}
              </address>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <ButtonLink href="/contact" variant="primary">
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
      </Section>

      <CtaSection
        title="Speak With Indian Commercial Lawyers in Melbourne"
        text={
          <>
            <p>
              Bansal Lawyers helps Indian business owners, entrepreneurs, companies and professionals with commercial
              contracts, business agreements, transactions, disputes and debt recovery. About to sign something, buy or
              sell a business, or chasing an unpaid invoice? Get in touch and we&apos;ll help you work out your next step.
            </p>
            <p className="cta-section__contact">
              {businessDetails.name}
              <br />
              {businessDetails.address}
              <br />
              Phone: <a href={businessDetails.nationalLineTel}>{businessDetails.nationalLine}</a>
              <br />
              Mobile: <a href={businessDetails.phoneTel}>{businessDetails.phone}</a>
              <br />
              Email: <a href={`mailto:${businessDetails.email}`}>{businessDetails.email}</a>
              <br />
              Hours: Mon–Fri, 9:30 AM–6 PM
            </p>
          </>
        }
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: `Call ${businessDetails.phone}`,
          href: businessDetails.phoneTel,
        }}
        phone="1300 226 725"
        phoneLabel="Commercial Law Enquiries"
        badges={[
          "Commercial contracts and dispute advice",
          "English, Hindi and Punjabi",
          "Melbourne CBD and virtual consultations",
        ]}
      />

      <Section tone="warm" id="faqs">
        <Faq
          items={commercialFaqs}
          title="Frequently Asked Questions About Indian Commercial Lawyers in Melbourne"
          subtitle="These are some common questions business owners ask before they book. The answers are general information, so if your situation is specific, talk to us."
          contactTitle="Need experienced commercial guidance before signing an agreement or taking action?"
          contactButtonLabel="Book a Commercial Consultation"
          contactHref="/contact"
        />
      </Section>
    </div>
  );
}
