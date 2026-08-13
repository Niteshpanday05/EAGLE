const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function getProducts() {
  const response = await fetch(`${API_URL}/products/`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}