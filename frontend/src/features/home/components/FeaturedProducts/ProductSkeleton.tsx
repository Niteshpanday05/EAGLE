import { FEATURED_PRODUCTS } from "./featured.constants";


export default function ProductSkeleton() {

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6

        sm:grid-cols-2

        lg:grid-cols-3

        xl:grid-cols-4
      "
    >

      {Array.from({
        length: FEATURED_PRODUCTS.limit,
      }).map((_, index) => (

        <div
          key={index}
          className="
            overflow-hidden
            rounded-3xl
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


          <div
            className="
              space-y-4
              p-5
            "
          >

            <div
              className="
                h-3
                w-1/3
                animate-pulse
                rounded
                bg-gray-200
              "
            />


            <div
              className="
                h-6
                w-full
                animate-pulse
                rounded
                bg-gray-200
              "
            />


            <div
              className="
                h-5
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