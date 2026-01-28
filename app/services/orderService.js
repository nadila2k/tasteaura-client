import { authOptions } from "../lib/auth";
import { privateApi } from "./apiHelper";
import { getServerSession } from "next-auth";


export const createOrder = (payload) => {
  return privateApi.post("/orders", payload);
};


export async function getMyOrders() {
  const session = await getServerSession(authOptions);

  if (!session?.accessToken) {
    throw new Error("UNAUTHORIZED");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/orders/my`,
    {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
      cache: "no-store", // user-specific data
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.message || "Failed to fetch orders");
  }

  return data;
}


export async function getCustomerCards() {

  const session = await getServerSession(authOptions);

  if (!session?.accessToken) {
    throw new Error("UNAUTHORIZED");
  }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/dashboard/cards/customer`,
    {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
      cache: "no-store", 
    }
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.message || "Failed to fetch customer cards");
  }

  return data;
}