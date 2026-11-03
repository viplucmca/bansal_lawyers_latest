import type { ReactNode } from "react";
import Link from "next/link";
import { Container, Section } from "@/components/ui";

const wrap = { maxWidth: "52rem", margin: "0 auto" } as const;
const lead = {
  fontSize: "1.08rem",
  lineHeight: "1.75",
  color: "var(--ink)",
  marginTop: "1rem",
} as const;
const body = {
  fontSize: "1.05rem",
  lineHeight: "1.75",
  color: "var(--ink-secondary)",
  marginTop: "0.75rem",
} as const;
const h3 = { marginTop: "2rem", fontSize: "1.25rem", scrollMarginTop: "6rem" } as const;

function MatterBlock({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div id={id}>
      <h3 style={h3}>{title}</h3>
      {children}
    </div>
  );
}

export function CivilLawyersMelbourneSections() {
  return (
    <>
      <Section tone="warm" id="matters">
        <Container>
          <div style={wrap}>
            <h2>Civil Law Matters We Help With</h2>
            <p style={lead}>
              Arguing over money, contracts or legal rights is stressful, and these disputes rarely sort
              themselves out. We&apos;re <strong>civil lawyers in Melbourne</strong>. We help individuals
              and businesses work out where they stand and what to do next. Our{" "}
              <strong>Civil Lawyers Melbourne</strong> team keeps the advice clear and practical right from
              the first conversation. Here&apos;s what we deal with.
            </p>

            <MatterBlock id="civil-disputes" title="Civil Disputes">
              <p style={body}>
                Maybe someone owes you money. Maybe someone says you owe them. Either way, you&apos;re in a
                civil dispute. That&apos;s just a disagreement that doesn&apos;t involve the police, usually
                over money, a contract, property or who&apos;s allowed to do what. It could be with a
                landlord, a tenant, a customer, a supplier or another business. The longer it drags on, the
                more it tends to cost in time and money, so talk to us early. Our{" "}
                <strong>Civil Law Solicitors Melbourne</strong> team will go through your evidence, explain
                your options in plain English and leave the decision to you.
              </p>
            </MatterBlock>

            <MatterBlock id="contract-disputes" title="Contract Disputes">
              <p style={body}>
                Someone made a promise and didn&apos;t keep it. Maybe the goods never turned up, or they
                arrived late, or the terms were so vague that you&apos;re now out of pocket. Our{" "}
                <Link href="/civil-lawyers-melbourne/contract-dispute-lawyer-melbourne/">
                  Contract Dispute Lawyers Melbourne
                </Link>{" "}
                team starts with the paperwork: the agreement, the emails, the invoices. That shows us what
                each side really agreed to. Then we go through your options, from negotiation and other ways of
                settling it, right through to court if that&apos;s where it has to go. We keep the advice
                practical so you know what each option means for you.
              </p>
            </MatterBlock>

            <MatterBlock id="debt-disputes" title="Debt Disputes">
              <p style={body}>
                Chasing an unpaid invoice wears you down. So does being told you owe money you don&apos;t
                think you owe. Our{" "}
                <Link href="/civil-lawyers-melbourne/debt-dispute-lawyer-melbourne/">
                  Debt Dispute Lawyers Melbourne
                </Link>{" "}
                team acts for both sides: people and businesses trying to get paid, and people who think the
                claim against them is wrong. Once we&apos;ve been through the financial records, we can write
                a response, send a letter of demand, negotiate, or advise you on legal proceedings. The
                right one depends on your situation, and we&apos;ll be straight with you about it.
              </p>
            </MatterBlock>

            <MatterBlock id="legal-notices" title="Legal Notices">
              <p style={body}>
                A letter of demand can land with a deadline attached, and it&apos;s easy to panic. But a
                legal notice is only a written statement of where one side stands, and it usually comes with a
                time limit. If you&apos;re about to send one or you&apos;ve just received one, we&apos;ll
                check the facts, the paperwork, your legal position and the deadlines before you do anything.
                Where it makes sense, we can draft, review or reply to notices, so what you send protects you
                and doesn&apos;t cause trouble later.
              </p>
            </MatterBlock>

            <MatterBlock id="negotiation-support" title="Negotiation Support">
              <p style={body}>
                You don&apos;t always need a court fight. Plenty of disputes get settled without anyone
                setting foot in a courtroom. Our <strong>Civil Dispute Lawyers Melbourne</strong> team will
                help you see the other side&apos;s point of view, test how strong the evidence really is, and
                work out what a fair and realistic settlement might look like. We can speak to the other side
                for you, put proposals to them and get any agreement down in writing. It doesn&apos;t always
                work, though. If the other side won&apos;t budge, you may have to take further legal steps.
              </p>
            </MatterBlock>

            <MatterBlock id="document-preparation" title="Document Preparation">
              <p style={body}>
                In a civil dispute, the paperwork often decides how things turn out. Letters of demand,
                replies, written statements, agreements and the documents for mediation or court all have to
                be right, and they have to follow the proper procedure. One mistake can cost you. We&apos;ll
                review or prepare whatever your matter needs, and check that it all matches your evidence and
                your other documents.
              </p>
            </MatterBlock>

            <MatterBlock id="compensation-related-matters" title="Compensation-Related Matters">
              <p style={body}>
                If someone broke a contract and it cost you money, you may be able to claim compensation. A
                claim generally needs four things: a legal basis, evidence, proof of your loss, and a clear
                link between what the other side did and what you lost. We&apos;ll go through each one with
                you so you can see how your claim looks. We can&apos;t promise you&apos;ll get compensation,
                or tell you how much it would be.
              </p>
            </MatterBlock>

            <MatterBlock id="property-related-disputes" title="Property-Related Disputes">
              <p style={body}>
                Property disputes can involve contracts, transactions, money disagreements or other claims. We
                look at the property agreements, transaction records and correspondence. Some of these matters
                fit under general civil dispute resolution, and others need specialist property law advice.
                We&apos;ll tell you which kind yours is and, if it helps, refer you to our{" "}
                <Link href="/property-lawyers-melbourne/">Property Lawyers Melbourne</Link> team.
              </p>
            </MatterBlock>

            <MatterBlock id="business-related-disputes" title="Business-Related Disputes">
              <p style={body}>
                A dispute inside your business can hold up cash flow, strain relationships and eat into your
                attention. These disputes can be between owners, companies, partners, shareholders, suppliers
                or customers, and they&apos;re often about agreements, unpaid commercial amounts or financial
                interests. We look at your business contracts, partnership or shareholder agreements, company
                records and financial documents to see where you stand. If the dispute is mostly commercial,
                our <Link href="/commercial-lawyers-melbourne/">Commercial Lawyers Melbourne</Link> team can
                help too.
              </p>
            </MatterBlock>

            <MatterBlock id="court-document-preparation" title="Court Document Preparation">
              <p style={body}>
                Once a dispute reaches a tribunal or court, your documents and the way your evidence is
                organised matter even more. Your case could end up in VCAT, the Magistrates&apos; Court, the
                County Court or the Supreme Court, and each has its own filing rules. As civil court lawyers,
                we can review and prepare your court documents and handle the procedural steps, depending on
                what we&apos;ve agreed to do for your matter.
              </p>
            </MatterBlock>

            <MatterBlock id="general-civil-litigation-advice" title="General Civil Litigation Advice">
              <p style={body}>
                Going to court is a big decision. Civil litigation is the formal process of resolving a
                dispute through a court or tribunal. Before you start, you should know how strong your claim
                is, what evidence you have, what could go wrong, what it&apos;s likely to cost and where you
                might end up. Our civil litigation lawyers can talk you through your options and what to do
                next. <Link href="/contact/">Get in touch</Link> and we&apos;ll go through it together.
              </p>
            </MatterBlock>
          </div>
        </Container>
      </Section>

      <Section tone="white" id="dispute-resolution-victoria">
        <Container>
          <div style={wrap}>
            <h2>How Civil Dispute Resolution Works in Victoria</h2>
            <p style={lead}>
              Every dispute is different, and plenty get sorted out long before anyone sees a courtroom.
              What follows is a typical path. Your matter might skip a few steps or run them in a different
              order. Our dispute resolution lawyers will tell you where you are at each stage, so you&apos;re
              never left guessing.
            </p>

            <h3 style={h3}>Initial Assessment</h3>
            <p style={body}>
              We start by going through the facts, your documents and the evidence. We&apos;ll also ask what
              you actually want out of this. That shows us how strong your position is and whether the
              dispute is worth chasing. It also gives us a sense of what you could realistically get, so you
              can weigh it against the time and cost.
            </p>

            <h3 style={h3}>Your Rights and Obligations</h3>
            <p style={body}>
              Your agreement, the law and the evidence all shape where each side stands. We&apos;ll explain
              what that means for you, including any time limits that could sink your claim if you wait too
              long. Most contract claims have a six-year limit. Other claims can have shorter or longer ones,
              so check early.
            </p>

            <h3 style={h3}>Legal Notices and Communication</h3>
            <p style={body}>
              A letter of demand or a formal reply puts your position in writing and gives the other side a
              chance to answer. You won&apos;t always need one, though. It depends on the facts and the
              deadlines. Whatever you plan to send, get it checked first. A badly worded notice can weaken
              your position.
            </p>

            <h3 style={h3}>Negotiation and Alternative Dispute Resolution</h3>
            <p style={body}>
              Plenty of disputes get settled through negotiation or mediation, with no court case at all. In
              mediation, a neutral person helps both sides reach their own agreement, and we can put it in
              writing. The Dispute Settlement Centre of Victoria offers free mediation for many disputes.
              Neither option is guaranteed to work.
            </p>

            <h3 style={h3}>Court or Tribunal Proceedings</h3>
            <p style={body}>
              If the dispute can&apos;t be settled, it may go to VCAT or a Victorian court. Victoria has no
              general compulsory pre-litigation step. Once a case starts, though, everyone involved has to act
              honestly and make reasonable efforts to resolve it. In the Magistrates&apos; Court, a defendant
              generally has 21 days after being served to file a defence.
            </p>

            <h3 style={h3}>Next Steps and Legal Representation</h3>
            <p style={body}>
              A lawyer can help you prepare, sort out your documents and handle the procedure. Where
              it&apos;s allowed, they can also speak for you at the hearing. You can ask for help with just
              one part, like the paperwork, if that&apos;s all you need. We&apos;ll explain your options at
              each stage so the decisions stay yours.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="documents-evidence">
        <Container>
          <div style={wrap}>
            <h2>Documents and Evidence You May Need for a Civil Dispute</h2>
            <p style={lead}>
              You don&apos;t need a perfect file to get started. Good paperwork makes a dispute easier to
              size up, and easier to run if it ends up in court. Every dispute is different, so use this as a
              rough checklist, not a strict one. Missing some documents? You can still{" "}
              <Link href="/book-an-appointment/">book an initial consultation</Link> and we&apos;ll work out
              what needs tracking down.
            </p>

            <h3 style={h3}>Contracts and Agreements</h3>
            <p style={body}>
              Bring the signed contract, quote or agreement, plus any changes and the terms and conditions.
              If the deal was only spoken, bring anything that shows what was agreed, like a text or email.
              The exact wording often decides who was meant to do what.
            </p>

            <h3 style={h3}>Financial Records</h3>
            <p style={body}>
              Invoices, statements, receipts, payment records and loan documents show what&apos;s owed,
              what&apos;s been paid and what loss you&apos;re claiming. Bank statements showing when money
              actually moved are just as useful as the invoices. Anything that covers the amount in dispute
              helps a lot.
            </p>

            <h3 style={h3}>Communication and Correspondence</h3>
            <p style={body}>
              Emails, texts, letters and notes from phone calls can show what was agreed and when. Put them
              in date order and don&apos;t delete anything, even the messages you wish you hadn&apos;t sent.
              Chat apps like WhatsApp count too, so screenshot them with the date and sender showing.
            </p>

            <h3 style={h3}>Court and Tribunal Documents</h3>
            <p style={body}>
              Got a claim, complaint, application or notice from a court or tribunal? Bring it, and write
              down the date it reached you. Keep the envelope or email too, because the date you were served
              usually starts the clock on your deadline. Response deadlines can be short.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="white" id="why-choose">
        <Container>
          <div style={wrap}>
            <h2>Why Choose Bansal Lawyers for Civil Law Matters?</h2>
            <p style={lead}>
              When money, a contract or your business is on the line, you just want straight answers. No
              jargon. Below is how we work on civil disputes, from the first call to the last step.
              You&apos;ll know what to expect before you ring.
            </p>

            <h3 style={h3}>We Start With the Facts and the Evidence</h3>
            <p style={body}>
              Before we say anything about your options, we find out what really happened. We read the
              documents and look at what evidence you have to back up your side. So our advice comes from
              what can be proven, not from guesses. If your claim has gaps, you&apos;ll hear about it early,
              while there&apos;s still time to fix them.
            </p>

            <h3 style={h3}>Clear, Practical Advice</h3>
            <p style={body}>
              You&apos;ll hear your options, the risks and what&apos;s likely to happen next, all in plain
              English. We&apos;ll be upfront if a matter probably isn&apos;t worth the time and cost.
              Sometimes the smart move is to settle or let it go. If that&apos;s the case, we&apos;ll tell
              you, and the call stays with you.
            </p>

            <h3 style={h3}>Clear Costs Before We Start</h3>
            <p style={body}>
              In Victoria, a lawyer generally has to give you written costs disclosure when the work is
              likely to cost more than $750, not counting GST and disbursements. We give you a written
              estimate before any work starts, and we tell you if it changes. You decide with the real numbers
              in front of you.
            </p>

            <h3 style={h3}>Notices, Negotiation and Court Preparation in One Place</h3>
            <p style={body}>
              Notices, negotiation, dispute resolution and court preparation all happen under one roof. You
              won&apos;t get handed from firm to firm as your matter moves along. Say a letter of demand turns
              into a court claim. You keep working with people who already know your matter, so you
              don&apos;t have to explain it all again.
            </p>

            <h3 style={h3}>Support for Individuals and Businesses</h3>
            <p style={body}>
              You might be an individual with a personal dispute, a sole trader chasing an unpaid invoice or a
              company that&apos;s just been hit with a claim. We act for people on both sides: those trying
              to get paid and those who think the claim against them is wrong. Either way, we&apos;ll tell
              you where you stand.
            </p>

            <h3 style={h3}>Specialist Teams When Your Matter Needs Them</h3>
            <p style={body}>
              Some disputes spill into other areas of law. A property disagreement might need specialist{" "}
              <Link href="/property-lawyers-melbourne/">property law</Link> advice. A fight between business
              owners might suit our <Link href="/commercial-lawyers-melbourne/">commercial team</Link> better.
              We work across six areas of law, so you won&apos;t have to find a new firm and start again.
              We&apos;ll tell you early who&apos;s best placed to help.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="meet-ajay-bansal">
        <Container>
          <div style={wrap}>
            <h2>Meet Ajay Bansal – Director &amp; Principal Lawyer</h2>
            <p style={lead}>
              Ajay Bansal started <Link href="/about/">Bansal Lawyers</Link> and is its Director and Principal
              Lawyer. He has seven years of experience and has helped hundreds of clients across Australia.
              His work covers family, criminal, civil, commercial, property and immigration matters. So
              he&apos;s used to disputes that spill over into more than one area of law.
            </p>
            <p style={body}>
              Ajay appears in both Victorian and Federal courts. On civil matters, he deals with things like
              unpaid invoices, contract disagreements, partnership fall-outs and debt recovery. His approach
              is simple. He starts by finding out what&apos;s actually going on, then explains where you
              stand, what your options are and what could happen with each one. There&apos;s no jargon and no
              pressure, and the final decision is always yours.
            </p>
            <p style={body}>
              Ajay speaks English, Hindi and Punjabi, so you can tell your story in the language you&apos;re
              most comfortable with. Court papers and contracts will still be in English, and he&apos;ll go
              through them with you in whichever language suits you.
            </p>
            <p style={body}>
              You can meet <Link href="/about/ajay-bansal/">Ajay Bansal</Link> at our Melbourne CBD office,
              or talk to him by phone or video. Want to talk it through?{" "}
              <Link href="/book-an-appointment/">Book an initial consultation</Link> and bring whatever
              documents you have.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
