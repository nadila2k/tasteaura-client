"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
import { getCartStore } from "@/app/store/cartStore";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email || "guest";

  const useCart = getCartStore(userEmail);
  const cartItems = useCart((state) => state.items);

  const handleLogout = () => {
    signOut({
      callbackUrl: "/auth/signin",
    });
  };

  

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>Please log in to see your dashboard.</p>;

  console.log(cartItems);

  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Welcome, {session.user.username}</h1>
        <button onClick={handleLogout} style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
          Logout
        </button>
      </div>

      <h2 style={{ marginTop: "2rem" }}>Your Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - Rs. {item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
