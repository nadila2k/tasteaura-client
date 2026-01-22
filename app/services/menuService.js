import apiPublic from "../lib/apiPublic";


export async function fetchMenuItems() {
  const res = await apiPublic.get("/menu-items");
  return res.data;
}