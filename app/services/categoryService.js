const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`;

export async function fetchCategories() {
  const res = await fetch(`${BASE_URL}/categories`, {
    next: { revalidate: 120 }, // ISR: revalidate every 2 minutes
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const apiResponse = await res.json();

  if (apiResponse.responseStatus !== "SUCCESS") {
    throw new Error(apiResponse.message || "Category fetch failed");
  }

  return apiResponse.data;
}
