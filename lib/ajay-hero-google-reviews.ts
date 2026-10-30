export type AjayHeroGoogleReviewItem = {
  author: string;
  authorReviewCount?: number;
  relativeTime: string;
  rating: number;
  text: string;
  avatarColor?: string;
};

/** Reviews shown in the Ajay hero Google mockup (scroll top → bottom). */
export const ajayHeroGoogleReviewsMeta = {
  displayName: "Bansal Lawyers Melbourne",
  rating: 4.9,
  reviewCount: 52,
} as const;

export const ajayHeroGoogleReviews: AjayHeroGoogleReviewItem[] = [
  {
    author: "Arpit",
    relativeTime: "2 weeks ago",
    rating: 5,
    text: "Ajay and his team have done a good job in getting my Visa I am grateful, I will refer to them every time for the cases. Thanks again ❤️",
    avatarColor: "#e8710a",
  },
  {
    author: "Sonali",
    authorReviewCount: 3,
    relativeTime: "1 month ago",
    rating: 5,
    text: "I had a wonderful experience with Bansal Lawyers, especially with Ajay and Abhishek. From the very beginning, they were polite, patient, and extremely helpful. They guided me through every step and kept me updated throughout the process.",
    avatarColor: "#9334e6",
  },
  {
    author: "Gurpreet Singh",
    relativeTime: "2 months ago",
    rating: 5,
    text: "Very professional team. Ajay explained everything clearly and handled my matter with care. Highly recommended for visa and immigration issues.",
    avatarColor: "#137333",
  },
  {
    author: "Simran Kaur",
    authorReviewCount: 5,
    relativeTime: "3 months ago",
    rating: 5,
    text: "Khushi and the whole team were amazing. Quick responses, clear advice, and a great outcome on my case. Thank you Bansal Lawyers!",
    avatarColor: "#c5221f",
  },
  {
    author: "Manpreet k",
    relativeTime: "4 months ago",
    rating: 5,
    text: "Thank you Ajay and his team for helping us in getting visa granted for my wife. I got visa refused for my wife, then i went to Ajay and his team and they handled it properly and within 2 weeks we got visa granted for my wife. Thank you Ajay Bansal",
    avatarColor: "#1967d2",
  },
];
