"use client";

export default function CartSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Side */}
        <div className="lg:col-span-2 space-y-6">

          {/* Header */}
          <div className="flex items-center justify-between animate-pulse">
            <div className="h-8 w-40 rounded bg-gray-200" />
            <div className="h-5 w-24 rounded bg-gray-200" />
          </div>

          {/* Cart Items */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="animate-pulse rounded-2xl border p-5"
            >
              <div className="flex items-center gap-5">

                {/* Image */}
                <div className="h-24 w-24 rounded-xl bg-gray-200" />

                {/* Info */}
                <div className="flex-1 space-y-3">
                  <div className="h-5 w-48 rounded bg-gray-200" />
                  <div className="h-4 w-24 rounded bg-gray-200" />
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gray-200" />
                  <div className="h-5 w-5 rounded bg-gray-200" />
                  <div className="h-9 w-9 rounded-full bg-gray-200" />
                </div>

                {/* Price */}
                <div className="h-6 w-24 rounded bg-gray-200" />

                {/* Delete */}
                <div className="h-5 w-5 rounded-full bg-gray-200" />

              </div>
            </div>
          ))}

          {/* Banner */}
          <div className="h-40 rounded-3xl bg-gray-200 animate-pulse" />

        </div>

        {/* Right Side */}
        <div>

          <div className="animate-pulse rounded-3xl bg-gray-100 p-6 space-y-5">

            <div className="h-6 w-32 rounded bg-gray-200" />

            <div className="flex gap-2">
              <div className="h-12 flex-1 rounded-xl bg-gray-200" />
              <div className="h-12 w-28 rounded-xl bg-gray-200" />
            </div>

            <div className="space-y-3">
              <div className="h-5 rounded bg-gray-200" />
              <div className="h-5 rounded bg-gray-200" />
              <div className="h-6 rounded bg-gray-300" />
            </div>

            <div className="h-12 rounded-xl bg-gray-300" />

          </div>

        </div>

      </div>
    </div>
  );
}