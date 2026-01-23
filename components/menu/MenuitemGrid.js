import React from "react";
import styles from "./MenuitemGrid.module.css";
import Image from "next/image";
export default function MenuitemGrid({ menuItem }) {
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

      <button className={styles.orderButton}>Order Now</button>
    </div>
  );
}
