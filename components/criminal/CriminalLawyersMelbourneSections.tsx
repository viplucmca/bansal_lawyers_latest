import Link from "next/link";
import { Container, Section } from "@/components/ui";
import { businessDetails } from "@/lib/site";

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

export function CriminalLawyersMelbourneSections() {
  return (
    <>
      <Section tone="white" id="how-we-help">
        <Container>
          <div style={wrap}>
            <h2>Criminal Defence Lawyers in Melbourne – How We Can Help</h2>
            <p style={lead}>
              If you&apos;re searching for <strong>criminal defence lawyers Melbourne</strong> after a
              charge, it can all feel overwhelming. Here&apos;s where we can help, from the first piece of
              advice to the court date.
            </p>

            <h3 style={h3}>Legal Advice After Being Charged with an Offence</h3>
            <p style={body}>
              Speaking to a lawyer soon after you&apos;re charged helps you understand what the allegation
              actually is. We&apos;ll go through the charge sheet, check your court date and any deadlines,
              and explain what the police have to prove. It&apos;s the kind of{" "}
              <strong>criminal legal advice Melbourne</strong> people often need straight away, before
              deciding how to respond or what to say to anyone else.
            </p>

            <h3 style={h3}>Police Interviews and Questioning</h3>
            <p style={body}>
              Have the police asked you to come in for an interview, or turned up after an incident? Before
              you reply, it helps to talk to a lawyer. We can go through your rights and the risks with you
              first. Whether you take part, and what you say, depends on your situation, so there&apos;s no
              one answer for everyone. Bring any police card or letter you&apos;ve got. More on our{" "}
              <Link href="/criminal-lawyers-melbourne/police-interview-lawyer-melbourne/">
                Police Interview Lawyer Melbourne
              </Link>{" "}
              page.
            </p>

            <h3 style={h3}>Court Summons and Criminal Proceedings</h3>
            <p style={body}>
              A summons or court notice is the paper that says what you&apos;re charged with and when you
              have to turn up. Look at three things straight away: the date, which court, and anything you
              need to do by a certain day. Don&apos;t ignore it. If you miss your date, the court can issue
              a warrant for your arrest, or go ahead with the case without you. Bring the document to a
              lawyer straight away.
            </p>

            <h3 style={h3}>Understanding Your Legal Options</h3>
            <p style={body}>
              What you can do depends on the charge, the evidence, your situation and what you want. You
              might fight the charge. You might negotiate with the prosecution. Or you might plead guilty
              and tell the court your side. Our <strong>criminal defence solicitors Melbourne</strong> team
              will explain each path, then the choice is yours. We can&apos;t promise how it will turn out.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="matters">
        <Container>
          <div style={wrap}>
            <h2>Criminal Law Matters We Assist With</h2>
            <p style={lead}>
              Our <strong>criminal law solicitors Melbourne</strong> team assists with matters in the
              Magistrates&apos; Court of Victoria. Here are the main areas. When you call, we&apos;ll
              confirm whether we can take on your specific charge.
            </p>

            <h3 style={h3}>Assault and Related Offences</h3>
            <p style={body}>
              Assault charges range from a scuffle outside a pub to serious injury allegations, so the court
              process can look very different. Less serious assaults are usually heard in the Magistrates&apos;
              Court. We look at the police version, injuries, witness statements and footage, then explain the
              charge and what defences or pleas may be open. See our{" "}
              <Link href="/criminal-lawyers-melbourne/assault-lawyer-melbourne/">
                Assault Lawyer Melbourne
              </Link>{" "}
              page.
            </p>

            <h3 style={h3}>Intervention Order Breaches</h3>
            <p style={body}>
              Breaching an intervention order is a criminal offence, even if the contact seemed small.
              It&apos;s dealt with as a charge in the Magistrates&apos; Court, which is separate from
              applying to vary or end the order itself. For the charge, see our{" "}
              <Link href="/criminal-lawyers-melbourne/intervention-order-breach-lawyer-melbourne/">
                Intervention Order Breach Lawyer Melbourne
              </Link>{" "}
              or{" "}
              <Link href="/criminal-lawyers-melbourne/family-violence-criminal-lawyer-melbourne/">
                Family Violence Criminal Lawyer Melbourne
              </Link>{" "}
              pages. Changing the order itself is a family law matter.
            </p>

            <h3 style={h3}>Traffic Offences and Licence Suspensions</h3>
            <p style={body}>
              For some charges you&apos;ll get a fine and demerit points, and that&apos;s it. Others can cost
              you your licence, either suspended or cancelled. If you drive while suspended, that&apos;s a new
              offence on top. The court doesn&apos;t hand out demerit points. VicRoads does. We can advise on
              the charge and the licence consequences. See{" "}
              <Link href="/criminal-lawyers-melbourne/traffic-offence-lawyer-melbourne/">
                Traffic Offence Lawyer Melbourne
              </Link>{" "}
              and{" "}
              <Link href="/criminal-lawyers-melbourne/drink-driving-lawyer-melbourne/">
                Drink Driving Lawyer Melbourne
              </Link>
              .
            </p>

            <h3 style={h3}>Theft and Property Offences</h3>
            <p style={body}>
              Theft allegations range from one shoplifting incident to larger or repeated property offending.
              In theft cases, the evidence often decides a lot. Think CCTV footage, receipts and witness
              statements. We&apos;ll explain what you&apos;re charged with, what the prosecution has to
              prove, and what your options realistically look like. Related allegations are covered on our{" "}
              <Link href="/criminal-lawyers-melbourne/theft-lawyer-melbourne/">Theft Lawyer Melbourne</Link>{" "}
              and{" "}
              <Link href="/criminal-lawyers-melbourne/fraud-lawyer-melbourne/">Fraud Lawyer Melbourne</Link>{" "}
              pages.
            </p>

            <h3 style={h3}>Summary Criminal Offences</h3>
            <p style={body}>
              A &ldquo;summary offence&rdquo; is a charge decided by a magistrate without a jury. That
              doesn&apos;t make it minor. It can still lead to a criminal record, a fine, a licence
              consequence or, in some cases, jail. Some more serious offences can also be heard in the
              Magistrates&apos; Court if you and the court agree. See our{" "}
              <Link href="/criminal-lawyers-melbourne/drug-offence-lawyer-melbourne/">
                Drug Offence Lawyer Melbourne
              </Link>{" "}
              page.
            </p>

            <h3 style={h3}>Bail Applications</h3>
            <p style={body}>
              Bail decides whether you wait for your case at home or in custody. Bail has got harder to get in
              Victoria over the last few years. For some charges, you first have to clear a tougher hurdle
              before the court will even look at your application. We can tell you whether applying is worth
              it, and how to put your case to the court. Approval is never guaranteed. See{" "}
              <Link href="/criminal-lawyers-melbourne/bail-application-lawyer-melbourne/">
                Bail Application Lawyer Melbourne
              </Link>
              .
            </p>

            <h3 style={h3}>Criminal Appeals</h3>
            <p style={body}>
              If you disagree with a Magistrates&apos; Court decision, you may be able to appeal. Rights,
              grounds and time limits depend on the decision, and the deadline can be as short as 28 days, so
              don&apos;t wait. Bring us the court order and we&apos;ll check what&apos;s possible. We&apos;ll
              also explain the risks, including that an appeal can sometimes lead to a higher penalty.
            </p>

            <h3 style={h3}>Pleas in Mitigation</h3>
            <p style={body}>
              A plea in mitigation is what&apos;s said to the court about penalty after a guilty plea or
              finding of guilt. It covers the offence circumstances, your background and what you&apos;ve done
              since. Courts must follow sentencing rules, and an early guilty plea can be taken into account.
              We can&apos;t promise a lighter penalty, but good preparation helps the court see the full
              picture.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="white" id="magistrates-court">
        <Container>
          <div style={wrap}>
            <h2>Magistrates&apos; Court Lawyers in Melbourne</h2>
            <p style={lead}>
              Most criminal charges in Victoria start and finish in the Magistrates&apos; Court. Our{" "}
              <strong>Magistrates Court lawyers Melbourne</strong> team can help you prepare, appear and put
              your case.
            </p>

            <h3 style={h3}>Preparing for a Magistrates&apos; Court Hearing</h3>
            <p style={body}>
              Preparation starts with the brief of evidence, which is what the police say happened, and your
              own account. We&apos;ll go through it with you, work out which documents or witnesses might
              help, and explain what happens on the day: who&apos;s in the room, how long it may take and when
              you&apos;ll speak. Bring ID and your court papers, and arrive early.
            </p>

            <h3 style={h3}>Pleading Guilty or Not Guilty</h3>
            <p style={body}>
              Which plea to enter is your decision, made after advice. We&apos;ll weigh the evidence and
              likely consequences with you. If you plead not guilty, the case won&apos;t finish on the first
              date. It&apos;s adjourned, sometimes to a contest mention first, then a hearing. You can change
              your plea later, but tell your lawyer and the court as early as you can.
            </p>

            <h3 style={h3}>Court Representation and Legal Submissions</h3>
            <p style={body}>
              On the day, we can appear for you in the Magistrates&apos; Court and speak to the magistrate on
              your behalf. That includes making submissions on the law, the evidence and, where relevant,
              penalty. It&apos;s what people usually mean by{" "}
              <strong>criminal court representation Melbourne</strong> services, and we&apos;ll confirm
              which court your charge is in. Ask us anything beforehand. See{" "}
              <Link href="/criminal-lawyers-melbourne/court-representation-lawyer-melbourne/">
                Court Representation Lawyer Melbourne
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="if-charged">
        <Container>
          <div style={wrap}>
            <h2>What Should You Do If You Are Charged with a Criminal Offence?</h2>
            <p style={lead}>
              Getting charged is a shock, and it&apos;s normal to feel panicked. Here are four steps to work
              through, whatever the charge is. Take them one at a time.
            </p>

            <h3 style={h3}>Understand the Allegations</h3>
            <p style={body}>
              First, find out exactly what you&apos;re charged with. Your charge sheet or summons will list
              the offence, the date, the place and the court. Not sure what something means? Don&apos;t
              guess, ask a lawyer. And keep quiet about it with friends and online. Anything you say can be
              brought up against you later.
            </p>

            <h3 style={h3}>Obtain Legal Advice</h3>
            <p style={body}>
              Speak to a lawyer before you make decisions or respond to police or the court. That includes
              agreeing to an interview, entering a plea or contacting the other person involved. Worried about
              the cost? Victoria Legal Aid has lawyers at most Magistrates&apos; Courts, and they may be able
              to help. It depends on your situation, so ask early.
            </p>

            <h3 style={h3}>Gather Relevant Documents and Evidence</h3>
            <p style={body}>
              Pull together everything you&apos;ve been handed: the charge sheet, summons, bail papers, any
              police card or letter, and messages about the case. Then write down what happened while you still
              remember it, including dates and names. Don&apos;t delete, edit or hide anything, even old texts
              and photos. Keep it all in one folder. Tampering with evidence can land you in far worse
              trouble.
            </p>

            <h3 style={h3}>Understand Your Court Dates and Conditions</h3>
            <p style={body}>
              Note down every court date, time and location, and set phone reminders. On bail? Read each
              condition properly, whether that&apos;s reporting to police, a curfew or staying away from
              someone. Breaking one can get you into serious trouble. Can&apos;t make a date? Tell your lawyer
              before the day, not after. Missing court can lead to a warrant.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="white" id="defence-process">
        <Container>
          <div style={wrap}>
            <h2>How Does the Criminal Defence Process Work in Victoria?</h2>
            <p style={lead}>
              Every case is different, but the path from first call to court has a familiar shape. For more on
              how a{" "}
              <Link href="/criminal-lawyers-melbourne/criminal-defence-lawyer-melbourne/">
                Criminal Defence Lawyer Melbourne
              </Link>{" "}
              approaches a matter, see our dedicated page.
            </p>

            <h3 style={h3}>Initial Consultation</h3>
            <p style={body}>
              We&apos;ll start by asking what happened, what you&apos;ve been charged with and what&apos;s
              coming up in court. Bring whatever paperwork you have, like your charge sheet, summons or bail
              papers. Photo ID helps too, and so does a rough timeline of events. You can meet us at our
              Collins Street office or talk by phone or video. We&apos;ll tell you if we can help.
            </p>

            <h3 style={h3}>Reviewing the Charges and Evidence</h3>
            <p style={body}>
              Next, we look at what the prosecution says it can prove. That might be the police summary,
              witness statements, footage, phone records or a recording of your interview. We check if the
              evidence really backs up the charge, how it was collected, and whether anything&apos;s missing.
              Then we tell you what we&apos;ve found, including the weak spots and the risks.
            </p>

            <h3 style={h3}>Preparing a Defence or Plea</h3>
            <p style={body}>
              Preparation depends on your instructions, the evidence and our advice. If you&apos;re contesting
              the charge, that means working out your defence, lining up witnesses and getting ready for a
              hearing. If you&apos;re pleading guilty, it means preparing your plea in mitigation:
              references, work or study details and what you&apos;ve done since. We agree the plan with you
              first.
            </p>

            <h3 style={h3}>Court Appearance and Next Steps</h3>
            <p style={body}>
              Matters don&apos;t all follow the same path. If you plead guilty, your case can sometimes be
              finished on the first date. Plead not guilty, and it&apos;s usually put off to a later day for a
              hearing. Once the court decides, you might have a fine to pay, a court order to complete, or an
              appeal before the deadline runs out. We&apos;ll walk you through what applies to you.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="why-choose">
        <Container>
          <div style={wrap}>
            <h2>Why Choose Bansal Lawyers for Criminal Law Matters?</h2>
            <p style={lead}>
              Before you pick a <strong>criminal law firm Melbourne</strong> residents can trust with a
              charge, here&apos;s how we work, without the sales pitch.
            </p>

            <h3 style={h3}>Melbourne CBD Legal Office</h3>
            <p style={body}>
              Our office is on Level 8, 278 Collins Street, Melbourne VIC 3000. Come in and see us, or ring or
              video call if that&apos;s easier. Phone {businessDetails.nationalLine} or {businessDetails.phone}{" "}
              and ask when we can fit you in next. Bring your paperwork if you have it, and we&apos;ll go
              through it together. Office hours: Mon–Fri, 9:30 AM–6 PM.
            </p>

            <h3 style={h3}>Multilingual Legal Assistance for Melbourne&apos;s Indian Community</h3>
            <p style={body}>
              We believe clear communication is important when dealing with criminal charges. Our team
              includes a lawyer who speaks English, Hindi and Punjabi, helping clients who prefer to discuss
              their legal matters in either of these languages.
            </p>
            <p style={body}>
              We understand that criminal proceedings can be stressful, particularly when legal terminology
              and court procedures are unfamiliar. We aim to explain the charges, legal processes and available
              options in clear and straightforward language.
            </p>

            <h3 style={h3}>Individual Attention to Each Matter</h3>
            <p style={body}>
              Two charges with the same name can look very different once you read the evidence. We tailor our
              advice to the facts of your case, your instructions and your circumstances, not a standard
              script. We&apos;ll also tell you straight if we can&apos;t help with your type of charge, so you
              aren&apos;t left waiting. We read the paperwork properly before we advise.
            </p>

            <h3 style={h3}>Understanding the Victorian Legal Process</h3>
            <p style={body}>
              Our team includes a solicitor admitted to the Supreme Court of Victoria who has appeared in the
              Magistrates&apos; Court of Victoria, and a principal lawyer who appears in Victorian and Federal
              courts. We know how charges, bail and sentencing work in Victoria, and we&apos;ll explain what
              that means for your case in practical terms, including what to do first.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="white" id="indian-community">
        <Container>
          <div style={wrap}>
            <h2>Indian Criminal Lawyers in Melbourne – Hindi and Punjabi Legal Assistance</h2>
            <p style={lead}>
              If you are from the Indian community and facing criminal charges in Melbourne, understanding
              your legal options and communicating clearly with your lawyer are important.
            </p>
            <p style={body}>
              Bansal Lawyers provides criminal law assistance to individuals across Melbourne, including members
              of the Indian community. Our team includes a lawyer who speaks Hindi and Punjabi, allowing
              clients who prefer these languages to discuss their concerns and better understand their legal
              matters.
            </p>
            <p style={body}>
              We assist with a range of criminal law matters under Victorian law, including assault charges,
              bail applications, police interviews, traffic offences, intervention order breaches and
              Magistrates&apos; Court representation.
            </p>
            <p style={body}>
              Whether you are looking for an Indian criminal lawyer in Melbourne or criminal defence assistance
              in your preferred language, our team can discuss your circumstances and explain the available
              legal options.
            </p>
            <p style={body}>
              Contact Bansal Lawyers to arrange a consultation at our Melbourne CBD office or discuss your
              matter by phone.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm" id="meet-team">
        <Container>
          <div style={wrap}>
            <h2>Meet Your Criminal Defence Legal Team</h2>
            <p style={lead}>
              Here are the two lawyers on our team who work on criminal matters, with details taken from their
              profiles on our website.
            </p>

            <h3 style={h3}>Ajay Bansal</h3>
            <p style={body}>
              Ajay is Director and Principal Lawyer. He started Bansal Lawyers and handles family, criminal,
              civil, commercial and property matters. On the criminal side, he deals with charges, gets the
              evidence ready and represents clients in court. He appears in Victorian and Federal courts. He
              speaks English, Hindi and Punjabi. Ask when you book who will handle your matter.
            </p>

            <h3 style={h3}>Michael Saleh</h3>
            <p style={body}>
              Michael is a solicitor admitted to the Supreme Court of Victoria. He holds a Bachelor of Laws
              and a Graduate Diploma of Legal Practice. In criminal matters, he helps people with police
              interviews, bail applications, traffic offences and assault charges, and he represents them in
              court. He has appeared in the Magistrates&apos; Court of Victoria, the Federal Circuit and Family
              Court of Australia and VCAT. He speaks English and Arabic.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="white" id="services-across-victoria">
        <Container>
          <div style={wrap}>
            <h2>Criminal Law Services Across Melbourne and Victoria</h2>
            <p style={lead}>
              Bansal Lawyers is based in the Melbourne CBD at {businessDetails.address}. Most criminal matters
              we assist with are heard in the Magistrates&apos; Court of Victoria, including metropolitan and
              regional courts.
            </p>
            <p style={body}>
              You can meet us in person at Collins Street, or speak to us by phone or video if travel is
              difficult. When you contact us, tell us which court your charge is listed in and what dates you
              already have. We will confirm whether we can act in your matter and explain the next steps.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
