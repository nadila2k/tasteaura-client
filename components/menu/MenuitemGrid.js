"use client";

import React from "react";
import styles from "./MenuitemGrid.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { getCartStore } from "@/app/store/cartStore"; // correct import
import { useToast } from "@/hooks/useToast";

export default function MenuitemGrid({ menuItem }) {
  const { data: session, status } = useSession();
  const { info, success } = useToast();

  const userEmail = session?.user?.email || "guest";

  // ALWAYS call store hook at top level
  const useCart = getCartStore(userEmail);
  const addItem = useCart((state) => state.addItem);

  const handleOrder = () => {
    if (status === "loading") {
      info("Checking login status, please wait...");
      return;
    }

    if (!session) {
      info("Please log in to place an order!");
      return;
    }

    addItem(menuItem);
    success(`${menuItem.name} added to cart!`);
  };

  return (
    <div className={styles.menuCard}>
      <div className={styles.menuImage}>
        <Image
          src={menuItem.imageUrl}
          alt={menuItem.name}
          width={500}
          height={500}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <h3 className={styles.menuTitle}>{menuItem.name}</h3>
      <p className={styles.menuPrice}>Rs. {menuItem.price}</p>

      <button className={styles.orderButton} onClick={handleOrder}>
        Order Now
      </button>
    </div>
  );
}
