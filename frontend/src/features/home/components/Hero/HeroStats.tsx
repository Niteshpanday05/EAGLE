const stats = [
  {
    value: "50K+",
    label: "Happy Customers",
  },
  {
    value: "500+",
    label: "Premium Products",
  },
  {
    value: "99%",
    label: "Positive Reviews",
  },
];

export default function HeroStats() {
  return (
    <div
      className="
  mt-12
  grid
  grid-cols-3
  gap-3
  sm:gap-6
">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="
            text-center
            sm:text-left
          "
        >
          <h3
            className="
              text-2xl
              font-bold

              sm:text-3xl
            "
          >
            {stat.value}
          </h3>

          <p
            className="
              mt-1
              text-xs
              text-gray-500

              sm:text-sm
            "
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}