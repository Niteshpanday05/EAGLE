import { Category } from "../types";

import CategoryCard from "./CategoryCard";

interface Props {
  categories: Category[];
}

export default function CategoryGrid({
  categories,
}: Props) {
  return (
    <div
      className="
        grid
        gap-6
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
      "
    >
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
        />
      ))}
    </div>
  );
}