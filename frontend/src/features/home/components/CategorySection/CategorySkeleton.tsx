import { CATEGORY_SECTION } from "./category.constants";

export default function CategorySkeleton() {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-6
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-6
      "
    >
      {Array.from({
        length: CATEGORY_SECTION.skeletonCount,
      }).map((_, index) => (
        <div
          key={index}
          className="
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-white
          "
        >
          <div
            className="
              aspect-square
              animate-pulse
              bg-gray-200
            "
          />

          <div className="space-y-3 p-5">

            <div
              className="
                h-5
                w-3/4
                animate-pulse
                rounded
                bg-gray-200
              "
            />

            <div
              className="
                h-4
                w-1/2
                animate-pulse
                rounded
                bg-gray-200
              "
            />

          </div>
        </div>
      ))}
    </div>
  );
}