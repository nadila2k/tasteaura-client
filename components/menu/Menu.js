"use client";

import { useState } from "react";
import styles from "./Menu.module.css";
import CategorieGrid from "./CategorieGrid";
import MenuitemGrid from "./MenuitemGrid";

export default function Menu({ categories = [], menuItems = [] }) {

  console.log(menuItems)
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categories.length > 0 ? categories[0].id : null,
  );

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

 const filteredMenuItems =
  selectedCategoryId === 1
    ? menuItems // show all food
    : menuItems.filter(
        (item) => item.category?.id === selectedCategoryId
      );
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.categories}>
          <div className={styles.categoriesGrid}>
            {categories.map((category) => (
              <CategorieGrid
                key={category.id}
                category={category}
                onSelectCategory={handleCategorySelect}
                selectedCategoryId={selectedCategoryId}
              />
            ))}
          </div>
        </div>
        <h1 className={styles.selectedCategoryTitle}>
          {categories.find((cat) => cat.id === selectedCategoryId)?.name ||
            "Select a category"}
        </h1>
        <div className={styles.menuitem}>
          {filteredMenuItems.map((item) => (
            <MenuitemGrid key={item.id} menuItem={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
