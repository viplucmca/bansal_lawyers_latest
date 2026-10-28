import { GoogleBusinessReviewsCard } from "./GoogleBusinessReviewsCard";
import { OfficeMapEmbed } from "./OfficeMapEmbed";

type OfficeLocationMediaProps = {
  /** Full-width two-column layout (reviews + map only). */
  standalone?: boolean;
};

/** Google reviews card and map embed side by side (office sections). */
export function OfficeLocationMedia({ standalone = false }: OfficeLocationMediaProps) {
  return (
    <div
      className={`location-grid__media${standalone ? " location-grid__media--standalone" : ""}`}
    >
      <GoogleBusinessReviewsCard />
      <OfficeMapEmbed />
    </div>
  );
}
