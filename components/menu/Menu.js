"use client";

import { useState } from "react";
import styles from "./Menu.module.css";
import CategorieGrid from "./CategorieGrid";
import MenuitemGrid from "./MenuitemGrid";

export default function Menu({ categories = [], menuItems = [] }) {
  console.log(menuItems);
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categories.length > 0 ? categories[0].id : null,
  );

  const [search, setSearch] = useState("");

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const categoryFiltered =
    selectedCategoryId === 1
      ? menuItems
      : menuItems.filter((item) => item.category?.id === selectedCategoryId);


  const filteredMenuItems = categoryFiltered.filter((item) => {
    const query = search.toLowerCase();

    return (
      item.name.toLowerCase().includes(query) ||
      item.category?.name.toLowerCase().includes(query)
    );
  });

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
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search by item or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.menuitem}>
          {filteredMenuItems.map((item) => (
            <MenuitemGrid key={item.id} menuItem={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
