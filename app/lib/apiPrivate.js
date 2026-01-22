const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`;

export async function fetchMenuItems() {
  const res = await fetch(`${BASE_URL}/menu-items`, {
    next: { revalidate: 60 }, // ISR: revalidate every 60s
  });

  if (!res.ok) {
    console.error("Failed to fetch menu items");
    return [];
  }

  const apiResponse = await res.json();

  if (apiResponse.responseStatus !== "SUCCESS") {
    console.error(apiResponse.message);
    return [];
  }

  return apiResponse.data;
}
