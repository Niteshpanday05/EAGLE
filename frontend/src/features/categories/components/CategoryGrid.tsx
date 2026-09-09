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
        mt-12
        grid
        grid-cols-2
        gap-4
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-6
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