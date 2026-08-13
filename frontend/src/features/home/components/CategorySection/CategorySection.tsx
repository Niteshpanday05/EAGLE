import SectionHeader from "@/components/common/SectionHeader";

import CategoryEmpty from "./CategoryEmpty";
import CategoryGrid from "./CategoryGrid";
import CategorySkeleton from "./CategorySkeleton";
import { CATEGORY_SECTION } from "./category.constants";
import { Category } from "./category.types";

interface Props {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

export default function CategorySection({
  categories,
  loading,
  error,
}: Props) {
  return (
   <section className="py-10 lg:py-14">
  <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-4">
    <div className="mb-12 flex justify-center">
      <SectionHeader
        title={CATEGORY_SECTION.title}
        subtitle={CATEGORY_SECTION.subtitle}
        center
      />
    </div>

        {loading && <CategorySkeleton />}

        {!loading && error && (
          <CategoryEmpty
            title="Unable to load categories"
            description={error}
          />
        )}

        {!loading && !error && categories.length === 0 && (
          <CategoryEmpty
            title="No Categories Found"
            description="Please check back later."
          />
        )}

        {!loading && !error && categories.length > 0 && (
          <CategoryGrid categories={categories} />
        )}
      </div>
    </section>
  );
}