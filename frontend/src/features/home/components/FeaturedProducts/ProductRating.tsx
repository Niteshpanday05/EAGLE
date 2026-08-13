import { Star } from "lucide-react";

interface Props {
  rating?: number | string | null;
  reviews?: number | null;
}

export default function ProductRating({
  rating,
  reviews,
}: Props) {
  const safeRating = Number(rating ?? 0);
  const safeReviews = Number(reviews ?? 0);

  return (
    <div
      className="
        flex
        items-center
        justify-between
      "
    >
      <div className="flex items-center gap-1">
        <Star
          size={16}
          className="fill-yellow-400 text-yellow-400"
        />

        <span className="font-medium">
          {safeRating.toFixed(1)}
        </span>
      </div>
{/* 
      <span
        className="
          text-sm
          text-neutral-500
        "
      >
        {safeReviews} reviews
      </span> */}
    </div>
  );
}