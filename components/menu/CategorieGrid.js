"use client";

import Image from "next/image";
import styles from "./CategorieGrid.module.css";

export default function CategorieGrid({
  category,
  onSelectCategory,
  selectedCategoryId,
}) {
  const isActive = selectedCategoryId === category.id;

  return (
    <button
      className={`${styles.button} ${isActive ? styles.selected : ""}`}
      onClick={() => onSelectCategory(category.id)}
    >
      <div className={styles.imageContainer}>
        <Image
          src={category.imageUrl}
          alt={category.name}
          className={styles.image}
          fill
          priority
        />
      </div>
       <p className={styles.text}>{category.name}</p>
    </button>
  );
}
