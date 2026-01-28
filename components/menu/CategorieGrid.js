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
          fill
          priority
          sizes="(max-width: 48rem) 192px, (max-width: 75rem) 224px, 256px"
        />
      </div>
      <p className={styles.text}>{category.name}</p>
    </button>
  );
}
