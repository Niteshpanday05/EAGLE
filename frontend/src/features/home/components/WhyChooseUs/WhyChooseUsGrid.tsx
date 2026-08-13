import WhyChooseUsCard from "./WhyChooseUsCard";

import { WhyChooseUsGridProps } from "./whyChooseUs.types";

export default function WhyChooseUsGrid({
  items,
}: WhyChooseUsGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-y-16

        md:grid-cols-2

        xl:grid-cols-4
        xl:gap-x-10
      "
    >
      {items.map((item, index) => (
        <WhyChooseUsCard
          key={item.id}
          item={item}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
}