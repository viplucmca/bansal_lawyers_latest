import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui";
import { StructuredData } from "@/components/seo";
import { AjayBansalProfile } from "@/components/team/AjayBansalProfile";
import { createMetadata } from "@/lib/metadata";
import { createAjayBansalPageGraphSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title:
    "Ajay Bansal | Indian Lawyer in Melbourne | Director & Principal Lawyer | Bansal Lawyers",
  description:
    "Looking for an Indian lawyer in Melbourne? Ajay Bansal founding Director & Principal Lawyer at Bansal Lawyers offers legal guidance in English, Hindi and Punjabi across family, criminal, civil and commercial law. Contact our team today to book a consultation!",
  path: "/about/ajay-bansal",
  keywords: ["Ajay Bansal", "Ajay Bansal Lawyer Melbourne", "Principal Lawyer Bansal Lawyers", "Immigration Lawyer Ajay Bansal", "Melbourne Solicitor Ajay Bansal", "Bansal Lawyers Director"],
});

export default function AjayBansalProfilePage() {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Ajay Bansal" }];

  return (
    <>
      <StructuredData data={createAjayBansalPageGraphSchema()} />
      <Breadcrumbs items={breadcrumbs} />
      <AjayBansalProfile />
    </>
  );
}
