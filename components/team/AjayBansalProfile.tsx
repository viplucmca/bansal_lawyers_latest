import Image from "next/image";
import Link from "next/link";
import { ClientTestimonialsCarousel } from "@/components/sections/ClientTestimonialsCarousel";
import { OfficeLocationMedia } from "@/components/sections/OfficeLocationMedia";
import { ajayBansalFaqs } from "@/lib/ajay-bansal-faqs";
import { ajayClientTestimonials } from "@/lib/ajay-client-testimonials";
import {
  Container,
  CtaSection,
  Faq,
  Section,
  TrustBar,
} from "@/components/ui";
import { businessDetails } from "@/lib/site";

const focusAreas = [
  {
    title: "Immigration law",
    description: "Visa applications, refusals, cancellations, NOICC responses, and ART appeals.",
  },
  {
    title: "Family law",
    description: "Separation, parenting arrangements, property settlement, and family violence matters.",
  },
  {
    title: "Commercial & property law",
    description: "Business matters, contracts, transactions, property advice, and disputes.",
  },
  {
    title: "Criminal & civil matters",
    description: "Criminal charges, civil disputes, evidence preparation, and representation.",
  },
];

const biography = [
  "Ajay Bansal is the founding Director of Bansal Lawyers. He brings 7 years of experience to the firm and has worked with clients across a wide range of legal matters throughout Australia.",
  "His work covers immigration law, family law, property law, commercial law, criminal law, and civil matters. Over the years, he has assisted hundreds of clients with legal issues involving visas, family disputes, business transactions, property settlements, criminal charges, and other critical legal concerns.",
  "Ajay’s approach is straightforward. He focuses on understanding the client’s situation, explaining the legal position clearly, and helping the client make informed decisions without ambiguity or delay.",
];

const trustItems = [
  "7 Years of Experience",
  "Victorian & Federal Court Advocacy",
  "Multidisciplinary Strategic Guidance",
  "Melbourne CBD & Virtual Consultations",
];

const ajayGlanceCredentials = [
  { label: "Experience", value: "7 years of experience" },
  { label: "Location", value: "Melbourne CBD" },
  { label: "Languages", value: "English, Hindi, Punjabi" },
  { label: "Consultations", value: "In-person and virtual" },
];

function AjayAtAGlanceCard({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const variantClass =
    variant === "mobile" ? "ajay-at-a-glance-card--mobile-only" : "ajay-at-a-glance-card--desktop-only";

  return (
    <aside
      className={`practitioner-profile__details ajay-at-a-glance-card ${variantClass}`.trim()}
      aria-label="Ajay Bansal professional details"
    >
      <h2>At a glance</h2>
      <dl>
        {ajayGlanceCredentials.map((credential) => (
          <div key={credential.label}>
            <dt>{credential.label}</dt>
            <dd>{credential.value}</dd>
          </div>
        ))}
      </dl>
      <Link href="/contact" className="button button--primary">
        Book a Consultation
      </Link>
    </aside>
  );
}

export function AjayBansalProfile() {
  return (
    <div className="ajay-bansal-page">
      <section className="practitioner-hero ajay-bansal-hero">
        <Container>
          <div className="practitioner-hero__grid">
            <div className="practitioner-hero__content">
              <h1>Indian Lawyer in Melbourne – Ajay Bansal</h1>
              <p className="practitioner-hero__lead">
                If you&apos;re searching for an Indian lawyer in Melbourne, you probably want two
                things: someone who knows Australian law, and someone you can talk to in your own
                language.
              </p>
              <hr className="ajay-hero-divider" />
              <div className="ajay-hero-intro">
                <p>
                  That&apos;s Ajay Bansal. He started Bansal Lawyers and is the Director and
                  Principal Lawyer. He speaks English, Hindi and Punjabi, and he works on family,
                  criminal, civil, commercial and property matters from our office in the Melbourne
                  CBD.
                </p>
                <p>
                  One thing we&apos;d rather say upfront: we only advise on Australian law. If part
                  of your problem is in India, we&apos;ll tell you what we can do from Melbourne,
                  and where you&apos;ll need a lawyer over there.
                </p>
              </div>
              <div className="practitioner-hero__actions">
                <Link href="/contact" className="button button--light">
                  Book a Consultation
                </Link>
                <a href={businessDetails.phoneTel} className="button button--white-outline">
                  Call {businessDetails.phone}
                </a>
              </div>
            </div>
            <div className="practitioner-hero__portrait">
              <Image
                src="/images/team/ajay-bansal-director.webp"
                alt="Ajay Bansal - Director & Principal Lawyer at Bansal Lawyers Melbourne"
                fill
                priority
                sizes="(max-width: 760px) calc(100vw - 3rem), 420px"
              />
            </div>
          </div>
        </Container>
      </section>

      <TrustBar items={trustItems} />

      <div className="ajay-profile-scroll-layout">
        <div className="ajay-profile-scroll-layout__content">
          <Section tone="white" id="why-choose" className="ajay-profile-scroll-first-section">
        <div className="ajay-profile-section ajay-profile-why">
          <h2>Why Choose Ajay Bansal?</h2>
          <AjayAtAGlanceCard variant="mobile" />
          <p>
            Picking a lawyer is a personal choice. You&apos;re handing over private details, often
            when life is stressful, so you want someone you can be open with and who explains things
            properly. Here&apos;s what you can expect from Ajay at Bansal Lawyers.
          </p>
          <hr className="ajay-profile-divider" />
          <h3>Speak in the language you&apos;re most comfortable with</h3>
          <p>
            Legal problems are stressful enough without hunting for the right words. Ajay speaks
            English, Hindi and Punjabi, so you can explain things the way you would to a family
            member. You don&apos;t have to translate in your head, and you won&apos;t leave out
            details just because you can&apos;t think of the English word.
          </p>
          <p>
            If you&apos;re looking for a Punjabi lawyer in Melbourne, just tell us your preferred
            language when you call or book. Court papers, contracts and letters will still be in
            English, so Ajay will go through them with you in whichever language suits you.
          </p>
          <h3>Experience across Victorian and Federal courts</h3>
          <p>
            Ajay founded Bansal Lawyers and is its Director and Principal Lawyer. Over seven years in
            practice, he&apos;s worked on family, property, commercial, criminal and civil matters.
            He&apos;s helped hundreds of clients with legal problems across Australia, and he appears
            in both Victorian and Federal courts.
          </p>
          <p>
            That range is useful because legal problems don&apos;t stay in one box. A separation can
            lead to property and money questions. A business dispute can turn into a debt claim. If
            your lawyer already knows these areas, you don&apos;t have to start from scratch every
            time something new comes up.
          </p>
          <h3>Plain-English advice, and the decision stays yours</h3>
          <p>
            Ajay starts by finding out what&apos;s actually going on. Then he explains where you
            stand, what your options are and what could happen with each one, without piling on legal
            jargon. Nobody will pressure you. The final decision is yours, and you&apos;ll make it
            knowing the facts.
          </p>
          <h3>Easy ways to meet and get started</h3>
          <p>
            You can come to our office at Level 8, 278 Collins Street in the Melbourne CBD, or talk
            to us by phone or video. Video and phone are handy if you work long hours, live a long
            way from the city or just prefer to start from home.
          </p>
          <p>
            Again, we advise on Australian law. If part of your problem is in India, we&apos;ll tell
            you what we can do from Melbourne and where you might need a lawyer in India.
          </p>
        </div>
      </Section>

      <Section tone="warm" id="punjabi-speaking-lawyer">
        <div className="ajay-profile-section ajay-profile-why">
          <h2>Punjabi-Speaking Lawyer in Melbourne: Why Language Matters</h2>
          <p>
            Imagine describing the worst week of your life in your second language, with legal terms
            thrown in on top.
          </p>
          <p>
            You might be perfectly fine with English at work and still lose the thread when
            you&apos;re reading a charge sheet, a court order or a lease clause. The language is
            technical and a lot is riding on it. One misunderstanding can cost you money, time, or
            time with your kids.
          </p>
          <hr className="ajay-profile-divider" />
          <p>
            Ajay speaks English, Hindi and Punjabi, so you can tell him what happened in the language
            you think in. Ask your questions as they come to you, and he&apos;ll explain where you
            stand in plain words. Prefer Hindi? That&apos;s fine too. Court papers and contracts will
            still be in English, so we&apos;ll go through them together.
          </p>
          <p>
            Sharing a language doesn&apos;t replace legal skill, of course. What it does is make sure
            your lawyer hears the whole story, and good advice starts with that.
          </p>
        </div>
      </Section>

      <Section tone="white" id="profile" className="practitioner-profile ajay-practitioner-profile">
        <div className="practitioner-profile__grid">
          <div className="practitioner-profile__biography">
            <p className="practitioner-profile__label">Professional profile</p>
            <h2>Clear advice and focused representation</h2>
            <div className="practitioner-profile__prose">
              {biography.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="practitioner-profile__focus">
              <h2>Practice focus</h2>
              <div className="practitioner-profile__focus-grid">
                {focusAreas.map((area) => (
                  <article className="practitioner-focus-card" key={area.title}>
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="warm" id="indian-community" className="ajay-indian-community-section">
        <div className="ajay-profile-section ajay-profile-indian ajay-profile-why">
          <h2>Legal Services for the Indian Community in Melbourne</h2>
          <p className="ajay-profile-indian__intro">
            Legal trouble rarely comes at a convenient time. Here&apos;s what Ajay and the team can
            help with.
          </p>
          <h3>Family Law</h3>
          <p>
            Separation is hard enough without court dates and forms on top. Ajay helps with
            divorce, parenting and property when your marriage is recognised in Australia. When you
            need step-by-step guidance, our{" "}
            <Link href="/family-lawyers-melbourne/">family lawyer in Melbourne</Link> team can explain
            what applies to your situation.
          </p>
          <p>A few things are worth knowing early on.</p>
          <p>
            To apply for divorce you generally need 12 months of separation. That can include time
            under one roof if the separation is genuine. The divorce ends the marriage; property and
            parenting are separate steps.
          </p>
          <p>
            Married couples usually have 12 months from when the divorce takes effect to apply for
            property orders or spousal maintenance. De facto couples generally have two years from
            the end of the relationship.
          </p>
          <p>
            Intervention orders in Victoria are heard in the Magistrates&apos; Court. If you are in
            immediate danger, call 000. We act for people applying for an order and for people
            responding to one.
          </p>
          <h3>Criminal Law</h3>
          <p>
            A charge, a police interview or a court summons can throw your whole life off track. The
            earlier you speak to a{" "}
            <Link href="/criminal-lawyers-melbourne/">criminal lawyer in Melbourne</Link>, the
            better. We help with summary offences, traffic offences and licence suspensions, and
            assault and property offences. We also assist with bail applications, breaches of
            intervention orders, police interviews and cautions, pleas in mitigation, criminal
            appeals and Magistrates&apos; Court appearances.
          </p>
          <p className="ajay-profile-list-lead">
            If you&apos;ve been charged, these are the first things to do:
          </p>
          <ul className="ajay-profile-checklist">
            <li>Get legal advice before you do any police interview.</li>
            <li>
              Keep every document you&apos;re given, including the charge sheet, summons, bail
              papers and any messages about the case.
            </li>
            <li>
              Write down your court date and which court it&apos;s in. Missing it can make things a
              lot worse.
            </li>
            <li>
              Call a lawyer early. The sooner we can look at the evidence, the sooner you&apos;ll
              know what defences and pleas might be open to you.
            </li>
          </ul>
          <p>
            Not sure whether we take your type of charge? Give us a call and ask. We&apos;ll give you
            a straight answer.
          </p>
          <h3>Civil and Commercial Law</h3>
          <p>
            Money and contract problems tend to go wrong in the same few ways. Someone stops paying.
            Two people read the same agreement differently. A business partner stops returning your
            calls.
          </p>
          <p>
            Disputes over money or contracts are the bread and butter of{" "}
            <Link href="/civil-lawyers-melbourne/">civil law in Melbourne</Link>. We help with unpaid
            invoices, contract disagreements, partnership fall-outs and debt recovery. Early advice
            often means a letter of demand or negotiation before anyone files in court.
          </p>
          <p>
            When a matter has to go further, we&apos;ll explain the court steps and whether VCAT, the
            Magistrates&apos; Court or another Victorian court is the right place. Parties are expected
            to take genuine steps to resolve disputes under the Civil Procedure Act 2010 before
            starting most court proceedings.
          </p>
          <p>
            If you run a business, Ajay also handles{" "}
            <Link href="/commercial-lawyers-melbourne/">commercial law matters in Melbourne</Link>,
            including contracts, shareholder disputes and business sales.
          </p>
          <p>
            Try not to leave it too long. In Victoria, you generally have six years to bring a claim
            for breach of contract from when the breach happened, though shorter deadlines can apply in
            some agreements.
          </p>
          <h3>Property Law and Indian Power of Attorney</h3>
          <p>
            Buying or selling a property, signing a lease, or dealing with a settlement that&apos;s
            gone wrong? It mostly comes down to paperwork and deadlines. Before you sign anything,
            it&apos;s worth having a{" "}
            <Link href="/property-lawyers-melbourne/">property lawyer in Melbourne</Link> check the
            contract. We also advise on conveyancing, leases and landlord and tenant issues, and we
            step in when a settlement or property dispute goes wrong.
          </p>
          <p>
            If you live in Australia but need someone in India to act for you, for example to sell a
            property or sort out a bank matter, we can draft or review a power of attorney for use in
            India. We&apos;re not a notary public, so we&apos;ll send you to one for the signing.
            Stamping and registration, where they apply, are done in India.
          </p>
        </div>
      </Section>
        </div>

        <div className="ajay-profile-scroll-layout__aside">
          <AjayAtAGlanceCard variant="desktop" />
        </div>
      </div>

      <section className="client-testimonials-section" id="client-reviews">
        <Container>
          <header className="client-testimonials-section__header">
            <h2>What Our Clients Say About Us</h2>
          </header>
          <ClientTestimonialsCarousel items={ajayClientTestimonials} />
        </Container>
      </section>

      <Section tone="white" id="consultation-prep">
        <div className="ajay-profile-section ajay-profile-why">
          <h2>How to Prepare for a Legal Consultation</h2>
          <p>
            If you&apos;re planning to book a consultation with an Indian lawyer in Melbourne, a bit
            of preparation helps. You&apos;ll get clearer advice in the first meeting, and it can save
            you time and money. You don&apos;t need to have everything perfect. Bring what you&apos;ve
            got and we&apos;ll sort out the rest with you.
          </p>
          <h3>Documents to bring</h3>
          <ul className="ajay-profile-checklist">
            <li>
              <strong>Photo ID,</strong> such as your driver licence or passport.
            </li>
            <li>
              <strong>Legal or court papers,</strong> such as a charge sheet, summons, bail papers,
              court orders, intervention order documents or a letter of demand.
            </li>
            <li>
              <strong>Agreements,</strong> such as contracts, leases or loan documents.
            </li>
            <li>
              <strong>Messages and records,</strong> such as emails, text messages, receipts and bank
              statements related to the issue.
            </li>
          </ul>
          <h3>Write a short timeline</h3>
          <p>
            Write down what happened in order, with dates and names. One page is plenty. It helps your
            lawyer see the full picture quickly.
          </p>
          <h3>Note your deadlines</h3>
          <p>
            Jot down any dates you already know about, like a court date, a deadline to reply to a
            notice, or a time limit you&apos;re worried about. If a deadline is close, tell us when you
            book so we can see you sooner.
          </p>
          <h3>Prepare your questions</h3>
          <p>
            Write your questions down before you come. It&apos;s easy to forget them once you&apos;re in
            the room. Things like: What are my options? What could happen next? What are the next
            steps?
          </p>
          <h3>Choose your language</h3>
          <p>
            When you book, let us know if you&apos;d like to speak with a Punjabi-speaking lawyer in
            Melbourne. You can use Punjabi, Hindi or English, whichever lets you explain things best.
          </p>
        </div>
      </Section>

      <Section tone="warm" id="faqs">
        <Faq
          items={ajayBansalFaqs}
          title="Frequently Asked Questions"
          subtitle="Common questions before you book a consultation with Ajay Bansal."
          contactTitle="Want advice on your own matter?"
          contactButtonLabel="Book a Consultation"
          contactHref="/contact"
        />
      </Section>

      <Section tone="warm" id="office-map" className="ajay-profile-office-media">
        <OfficeLocationMedia standalone />
      </Section>

      <CtaSection
        title="Schedule a Consultation With Ajay Bansal"
        text="Speak with Ajay Bansal and the Bansal Lawyers team about your immigration, family, criminal, civil or commercial matter."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: `Call ${businessDetails.phone}`,
          href: businessDetails.phoneTel,
        }}
        phone={businessDetails.nationalLine}
        phoneLabel="Call the Office"
        badges={[
          "English, Hindi and Punjabi",
          "Collins Street and virtual consultations",
          "Immigration, family, criminal and commercial law",
        ]}
      />
    </div>
  );
}
