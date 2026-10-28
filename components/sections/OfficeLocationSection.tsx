import { ButtonLink } from "@/components/ui/Button";
import { OfficeLocationMedia } from "./OfficeLocationMedia";

type OfficeLocationSectionProps = {
  consultBlurb?: string;
  showActions?: boolean;
  contactHref?: string;
};

export function OfficeLocationSection({
  consultBlurb,
  showActions = false,
  contactHref = "/contact",
}: OfficeLocationSectionProps) {
  const directionsHref =
    "https://www.google.com/maps/dir/?api=1&destination=Level+8,+278+Collins+Street+Melbourne+VIC+3000";

  return (
    <div className="office-location-block">
      <header className="office-location-block__header">
        <p className="office-location-block__eyebrow">Our Location</p>
        <h2 className="office-location-block__title">
          Visit Our <em>Melbourne Office</em>
        </h2>
        <p className="office-location-block__intro">
          We are conveniently located in the heart of Melbourne CBD at Level 8, 278 Collins Street,
          Melbourne VIC 3000.
        </p>
        {consultBlurb ? (
          <p className="office-location-block__blurb">{consultBlurb}</p>
        ) : null}
        {showActions ? (
          <div className="office-location-block__actions">
            <ButtonLink href={contactHref} variant="primary">
              Book a Consultation
            </ButtonLink>
            <ButtonLink href={directionsHref} variant="secondary">
              Get Directions
            </ButtonLink>
          </div>
        ) : null}
      </header>
      <OfficeLocationMedia standalone />
    </div>
  );
}
