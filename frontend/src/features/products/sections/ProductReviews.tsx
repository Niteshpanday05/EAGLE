"use client";

interface ProductReviewsProps {
  rating: number;
  totalReviews: number;
}

export default function ProductReviews({
  rating,
  totalReviews,
}: ProductReviewsProps) {
  return (
    <section className="rounded-xl border bg-white p-6">
      <h2 className="mb-6 text-2xl font-semibold">
        Customer Reviews
      </h2>

      <div className="flex items-center gap-4">
        <span className="text-4xl font-bold">
          {rating}
        </span>

        <div>
          <p className="text-yellow-500">
            ⭐⭐⭐⭐⭐
          </p>

          <p className="text-sm text-gray-500">
            Based on {totalReviews} reviews
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-lg bg-gray-50 p-6 text-center text-gray-500">
        Review system will be connected later.
      </div>
    </section>
  );
}