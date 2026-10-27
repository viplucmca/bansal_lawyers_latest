import { businessDetails, siteUrl, socialLinks } from "@/lib/site";
import type { BreadcrumbItem, FaqItem } from "@/types/content";

const homeUrl = `${siteUrl}/`;
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const homeWebPageId = `${siteUrl}/#webpage`;
const homeFaqId = `${siteUrl}/#homepage-faq`;

export const HOME_PAGE_SCHEMA_TITLE =
  "Lawyers in Melbourne | Immigration, Family, Criminal & Commercial Law";
export const HOME_PAGE_SCHEMA_DESCRIPTION =
  "Explore immigration, family, criminal, commercial, property and civil law services from Bansal Lawyers in Melbourne.";

const HOME_ORGANIZATION_DESCRIPTION =
  "Bansal Lawyers provides legal services in Melbourne, including immigration, family, criminal, commercial, property and civil law.";

/** Homepage JSON-LD @graph: LegalService, WebSite, WebPage, FAQPage (linked entities). */
export function createHomePageGraphSchema(faqs: FaqItem[]) {
  const nationalPhoneDigits = businessDetails.nationalLineTel.replace(/\D/g, "");
  const directPhone = businessDetails.phoneTel.startsWith("tel:")
    ? businessDetails.phoneTel.slice(4)
    : businessDetails.phone;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": organizationId,
        name: businessDetails.name,
        url: homeUrl,
        description: HOME_ORGANIZATION_DESCRIPTION,
        telephone: nationalPhoneDigits,
        email: businessDetails.email,
        image: `${siteUrl}/images/collins-street-office.webp`,
        logo: `${siteUrl}/images/logo.webp`,
        address: {
          "@type": "PostalAddress",
          streetAddress: businessDetails.streetAddress,
          addressLocality: businessDetails.addressLocality,
          addressRegion: businessDetails.addressRegion,
          postalCode: businessDetails.postalCode,
          addressCountry: businessDetails.addressCountry,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: nationalPhoneDigits,
            contactType: "customer service",
          },
          {
            "@type": "ContactPoint",
            telephone: directPhone,
            contactType: "appointments",
          },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:30",
            closes: "18:00",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Melbourne" },
          { "@type": "AdministrativeArea", name: "Victoria" },
          { "@type": "Country", name: "Australia" },
        ],
        sameAs: [
          socialLinks.linkedin,
          socialLinks.facebook,
          "https://www.instagram.com/bansallawyers/",
        ],
        knowsAbout: [
          "Immigration Law",
          "Family Law",
          "Criminal Law",
          "Commercial Law",
          "Property Law",
          "Civil Law",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: businessDetails.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-AU",
      },
      {
        "@type": "WebPage",
        "@id": homeWebPageId,
        url: homeUrl,
        name: HOME_PAGE_SCHEMA_TITLE,
        description: HOME_PAGE_SCHEMA_DESCRIPTION,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        mainEntity: { "@id": organizationId },
        hasPart: { "@id": homeFaqId },
        inLanguage: "en-AU",
      },
      {
        "@type": "FAQPage",
        "@id": homeFaqId,
        url: homeUrl,
        isPartOf: { "@id": homeWebPageId },
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: typeof item.answer === "string" ? item.answer : "",
          },
        })),
      },
    ],
  };
}

export function createLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LawFirm", "LocalBusiness"],
    "@id": `${siteUrl}/#organization`,
    name: businessDetails.name,
    alternateName: "Bansal Lawyers Melbourne",
    description:
      "Melbourne law firm at Level 8, 278 Collins Street, Melbourne VIC 3000 providing strategic legal representation in Australian immigration law, ART appeals, family law, criminal defence, commercial law, property & conveyancing, and civil litigation.",
    url: siteUrl,
    telephone: businessDetails.nationalLine,
    email: businessDetails.email,
    priceRange: "$$",
    image: `${siteUrl}/images/logo.webp`,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/images/logo.webp`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: businessDetails.streetAddress,
      addressLocality: businessDetails.addressLocality,
      addressRegion: businessDetails.addressRegion,
      postalCode: businessDetails.postalCode,
      addressCountry: businessDetails.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-37.8164",
      longitude: "144.9650",
    },
    hasMap:
      "https://www.google.com/maps/search/?api=1&query=Level+8,+278+Collins+Street+Melbourne+VIC+3000",
    areaServed: [
      {
        "@type": "City",
        name: "Melbourne",
      },
      {
        "@type": "AdministrativeArea",
        name: "Victoria",
      },
      {
        "@type": "Country",
        name: "Australia",
      },
    ],
    knowsAbout: [
      "Australian Immigration Law",
      "Administrative Review Tribunal (ART) Appeals",
      "Visa Refusals and Visa Cancellations (s56, s57, s116, s501)",
      "Family Law, Divorce, Parenting Orders and Property Settlement",
      "Criminal Defence and Magistrates' Court Representation",
      "Commercial Law, Business Contracts and Shareholder Agreements",
      "Property Law, Conveyancing and Retail/Commercial Leases",
      "Civil Litigation and VCAT/Court Dispute Resolution",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: businessDetails.nationalLine,
        contactType: "customer service",
        areaServed: "AU",
        availableLanguage: ["English", "Hindi", "Punjabi"],
      },
      {
        "@type": "ContactPoint",
        telephone: businessDetails.phone,
        contactType: "Direct Solicitor Line",
        areaServed: "AU",
        availableLanguage: ["English", "Hindi", "Punjabi"],
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:30",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61562008576642",
      "https://www.instagram.com/bansallawyers",
      "https://www.linkedin.com/company/bansallawyers",
      "https://twitter.com/BansalLawyers",
      "https://www.youtube.com/@BansalLawyers",
    ],
  };
}

export const IMMIGRATION_LAWYERS_PAGE_TITLE =
  "Immigration Lawyers Melbourne, VIC 3000 | Bansal Lawyers";
export const IMMIGRATION_LAWYERS_PAGE_DESCRIPTION =
  "Immigration lawyers in Melbourne for visa refusals, cancellations, ART appeals, judicial review, character decisions, and citizenship refusals. Call 1300 226 725.";

/** Immigration lawyers page JSON-LD. Reuses the site organization id and the lawyer profile ids. */
export function createImmigrationLawyersPageSchema(faqs: FaqItem[]) {
  const pageUrl = `${siteUrl}/immigration-lawyers-melbourne`;
  const pageId = `${pageUrl}#webpage`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const faqId = `${pageUrl}#faq`;
  const ajayId = `${siteUrl}/about/ajay-bansal#person`;
  const michaelId = `${siteUrl}/about/michael-saleh#person`;
  const { "@context": _context, ...organization } = createLegalServiceSchema();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...organization,
        employee: [{ "@id": ajayId }, { "@id": michaelId }],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: businessDetails.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-AU",
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: IMMIGRATION_LAWYERS_PAGE_TITLE,
        description: IMMIGRATION_LAWYERS_PAGE_DESCRIPTION,
        inLanguage: "en-AU",
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        mainEntity: { "@id": organizationId },
        breadcrumb: { "@id": breadcrumbId },
        hasPart: { "@id": faqId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Immigration Lawyers Melbourne",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Person",
        "@id": ajayId,
        name: "Ajay Bansal",
        jobTitle: "Director & Principal Lawyer",
        email: businessDetails.email,
        image: `${siteUrl}/images/team/ajay-bansal-director.webp`,
        url: `${siteUrl}/about/ajay-bansal`,
        worksFor: { "@id": organizationId },
      },
      {
        "@type": "Person",
        "@id": michaelId,
        name: "Michael Saleh",
        jobTitle: "Solicitor",
        email: businessDetails.email,
        image: `${siteUrl}/images/team/michael-saleh-solicitor.png`,
        url: `${siteUrl}/about/michael-saleh`,
        worksFor: { "@id": organizationId },
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        url: `${pageUrl}#faqs`,
        isPartOf: { "@id": pageId },
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: typeof item.answer === "string" ? item.answer : "",
          },
        })),
      },
    ],
  };
}

export function createContactPageSchema() {
  const contactUrl = `${siteUrl}/contact`;

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${contactUrl}#webpage`,
    url: contactUrl,
    name: "Contact Bansal Lawyers | Melbourne Lawyers on Collins Street",
    description:
      "Contact Bansal Lawyers at Level 8, 278 Collins Street, Melbourne VIC 3000 for legal support in migration, family, criminal, commercial, property, and civil matters. Call 1300 226 725 or book a consultation.",
    inLanguage: "en-AU",
    mainEntity: {
      "@id": `${siteUrl}/#organization`,
    },
  };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? new URL(item.href, siteUrl).toString() : undefined,
    })),
  };
}

export function createFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: typeof item.answer === "string" ? item.answer : "[Answer text goes here]",
      },
    })),
  };
}

export function createArticleSchema({
  title,
  description,
  path,
  datePublished = "2026-01-01",
  dateModified = "2026-01-01",
  authorName = "Ajay Bansal",
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}) {
  const url = new URL(path, siteUrl).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: `${siteUrl}/images/logo.webp`,
    inLanguage: "en-AU",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url: url,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      "@type": "Person",
      name: authorName,
      url: `${siteUrl}/about/ajay-bansal`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Bansal Lawyers",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.webp`,
      },
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2"],
    },
  };
}

export function createCollectionPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = new URL(path, siteUrl).toString();

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    url: url,
    name: title,
    description: description,
    inLanguage: "en-AU",
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: businessDetails.name,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.webp`,
      },
    },
  };
}

export function createCaseUpdateSchema({
  headline,
  description,
  path,
  datePublished = "2025-08-23",
  dateModified = "2025-08-23",
  articleSection = "Immigration Law",
}: {
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  articleSection?: string;
}) {
  const url = new URL(path, siteUrl).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: headline,
    description: description,
    image: `${siteUrl}/images/logo.webp`,
    inLanguage: "en-AU",
    datePublished: datePublished,
    dateModified: dateModified,
    articleSection: articleSection,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url: url,
    author: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Bansal Lawyers",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Bansal Lawyers",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.webp`,
      },
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2"],
    },
  };
}

export function createAboutPageSchema() {
  const aboutUrl = `${siteUrl}/about`;

  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${aboutUrl}#webpage`,
    url: aboutUrl,
    name: "About Bansal Lawyers | Trusted Law Firm in Melbourne",
    description:
      "Learn about Bansal Lawyers, a Melbourne law firm led by Ajay Bansal at Level 8, 278 Collins Street, providing legal services in immigration, family, criminal, commercial, property and civil law.",
    inLanguage: "en-AU",
    mainEntity: {
      "@type": ["LegalService", "LawFirm", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: "Bansal Lawyers",
      url: siteUrl,
      image: `${siteUrl}/images/logo.webp`,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.webp`,
      },
      priceRange: "$$",
      telephone: businessDetails.nationalLine,
      email: businessDetails.email,
      founder: {
        "@type": "Person",
        name: "Ajay Bansal",
        jobTitle: "Director & Principal Lawyer",
        url: `${siteUrl}/about/ajay-bansal`,
      },
      employee: [
        {
          "@type": "Person",
          name: "Ajay Bansal",
          jobTitle: "Director & Principal Lawyer",
          url: `${siteUrl}/about/ajay-bansal`,
        },
        {
          "@type": "Person",
          name: "Michael Saleh",
          jobTitle: "Solicitor",
          url: `${siteUrl}/about/michael-saleh`,
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: businessDetails.streetAddress,
        addressLocality: "Melbourne",
        addressRegion: "VIC",
        postalCode: "3000",
        addressCountry: "AU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-37.8164",
        longitude: "144.9650",
      },
    },
  };
}

