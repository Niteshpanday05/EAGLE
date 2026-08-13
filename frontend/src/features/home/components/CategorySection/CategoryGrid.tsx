import CategoryCard from "./CategoryCard";
import { CategorySectionProps } from "./category.types";

type Row = {
  items: CategorySectionProps["categories"];
  cols: string[];
  height: string;
};

export default function CategoryGrid({
  categories,
}: CategorySectionProps) {
  const rows: Row[] = [
    {
      items: categories.slice(0, 2),
      cols: [
        "col-span-12 lg:col-span-8",
        "col-span-12 lg:col-span-4",
      ],
      height: "h-[360px]",
    },
    {
      items: categories.slice(2, 4),
      cols: [
        "col-span-12 lg:col-span-4",
        "col-span-12 lg:col-span-8",
      ],
      height: "h-[360px]",
    },
  ];

  return (
    <div className="space-y-6">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="
            grid
            grid-cols-12
            gap-6
          "
        >
          {row.items.map((category, index) => (
            <div
              key={category.id}
              className={`
                ${row.cols[index]}
                ${row.height}
              `}
            >
              <CategoryCard
                category={category}
                className="h-full"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}