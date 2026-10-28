import {
  googleBusinessProfileUrl,
  googleBusinessReviewsSummary,
} from "@/lib/site";

function StarRow({ count }: { count: number }) {
  return (
    <span className="google-reviews-card__stars" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

export function GoogleBusinessReviewsCard() {
  const { displayName, rating, reviewCount, mapsAddress, featuredReview } =
    googleBusinessReviewsSummary;

  return (
    <article className="google-reviews-card" aria-label="Google reviews for Bansal Lawyers">
      <header className="google-reviews-card__header">
        <div>
          <h3 className="google-reviews-card__title">{displayName}</h3>
          <p className="google-reviews-card__address">{mapsAddress}</p>
        </div>
        <a
          className="google-reviews-card__write"
          href={googleBusinessProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Write a review
        </a>
      </header>

      <div className="google-reviews-card__summary">
        <span className="google-reviews-card__score">{rating.toFixed(1)}</span>
        <StarRow count={5} />
        <a
          className="google-reviews-card__count"
          href={googleBusinessProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {reviewCount} reviews
        </a>
      </div>

      <div className="google-reviews-card__review">
        <div className="google-reviews-card__reviewer">
          <span className="google-reviews-card__avatar" aria-hidden="true">
            {featuredReview.author.charAt(0)}
          </span>
          <div>
            <p className="google-reviews-card__author">{featuredReview.author}</p>
            <p className="google-reviews-card__meta">
              {featuredReview.authorReviewCount} reviews · {featuredReview.relativeTime}
            </p>
          </div>
        </div>
        <StarRow count={featuredReview.rating} />
        <p className="google-reviews-card__text">{featuredReview.text}</p>
      </div>

      <footer className="google-reviews-card__footer">
        <a
          href={googleBusinessProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="google-reviews-card__more"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          View more reviews on Google →
        </a>
      </footer>
    </article>
  );
}
