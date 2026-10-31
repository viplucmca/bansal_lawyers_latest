import { googleBusinessProfileUrl } from "@/lib/site";

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

/** Compact Google reviews badge (links to the firm’s Google Business profile). */
export function GoogleReviewSummaryBadge({
  rating = 5.0,
  reviewCount = 224,
}: {
  rating?: number;
  reviewCount?: number;
}) {
  return (
    <div className="google-review-badge-wrap" id="google-reviews-link">
      <a
        className="google-review-badge"
        href={googleBusinessProfileUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Google reviews — ${rating.toFixed(1)} stars, ${reviewCount} reviews for Bansal Lawyers`}
      >
        <span className="google-review-badge__icon" aria-hidden="true">
          <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true">
            <path
              fill="#fff"
              stroke="#bdc1c6"
              strokeWidth="1.2"
              d="M20 6c-7.2 0-13 5.1-13 11.4 0 3.4 1.7 6.5 4.4 8.5L9 33l4.8-2.6c1.9.7 4 1.1 6.2 1.1 7.2 0 13-5.1 13-11.4S27.2 6 20 6z"
            />
            <path
              fill="#4285F4"
              d="M26.5 19.5c0-.6-.05-1.2-.15-1.75H20v3.3h3.65c-.16 1-.64 1.85-1.36 2.42v2h2.2c1.28-1.18 2.01-2.92 2.01-4.97z"
            />
            <path
              fill="#34A853"
              d="M20 27.5c1.84 0 3.38-.6 4.51-1.64l-2.2-2c-.61.4-1.38.64-2.31.64-1.77 0-3.27-1.2-3.8-2.81h-2.27v2.06c1.12 2.22 3.42 3.75 6.07 3.75z"
            />
            <path
              fill="#FBBC05"
              d="M16.2 21.69c-.14-.4-.22-.83-.22-1.27s.08-.87.22-1.27v-2.06h-2.27A8.02 8.02 0 0 0 12 20.42c0 1.32.32 2.57.88 3.67l2.32-2.4z"
            />
            <path
              fill="#EA4335"
              d="M20 15.58c1 0 1.9.34 2.61 1.01l1.96-1.96C23.38 13.55 21.84 13 20 13c-2.65 0-4.95 1.53-6.07 3.75l2.27 2.06c.53-1.61 2.03-2.81 3.8-2.81z"
            />
          </svg>
        </span>
        <span className="google-review-badge__text">
          <span className="google-review-badge__label">Google reviews</span>
          <span className="google-review-badge__row">
            <span className="google-review-badge__score">{rating.toFixed(1)}</span>
            <span className="google-review-badge__stars" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => (
                <StarIcon key={i} />
              ))}
            </span>
          </span>
          <span className="google-review-badge__count">{reviewCount} reviews</span>
        </span>
      </a>
    </div>
  );
}
