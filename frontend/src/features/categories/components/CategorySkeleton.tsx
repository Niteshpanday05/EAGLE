export default function CategorySkeleton() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        <div
          className="
            grid
            gap-6
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
          "
        >
          {Array.from({
            length: 8,
          }).map((_, index) => (
            <div
              key={index}
              className="
                h-50
                rounded-xl
                animate-pulse
                bg-gray-200
              "
            />
          ))}
        </div>

      </div>
    </section>
  );
}