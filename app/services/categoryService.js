import apiPublic from "@/app/lib/apiPublic";

export async function fetchCategories() {
  const res = await apiPublic.get("/categories");
  return res.data; 
}
