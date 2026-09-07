import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface Category {
  id: string | number;
  name: string;
  slug: string;
  description?: string | null;
}

async function getCategory(slug: string): Promise<Category | null> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    throw new Error(
      "NEXT_PUBLIC_API_URL is not configured."
    );
  }

  const response = await fetch(
    `${baseUrl}/categories/${encodeURIComponent(slug)}/`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    }
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(
      `Failed to fetch category: ${response.status}`
    );
  }

  return response.json();
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;

  const category = await getCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Category
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {category.name}
          </h1>

          {category.description && (
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
              {category.description}
            </p>
          )}
        </div>

        {/* Products */}

        <div>
          <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
            <h2 className="text-sm font-semibold text-slate-900">
              {category.name} Products
            </h2>

            <span className="text-sm text-slate-400">
              Browse all
            </span>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center">
            <p className="text-sm text-slate-500">
              Products for this category will appear here.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}