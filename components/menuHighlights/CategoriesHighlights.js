import { fetchCategories } from "@/app/services/categoryService";
import styles from "./CategoriesHighlights.module.css";

export default async function CategoriesHighlights() {
  const categories = await fetchCategories();

  // skip id 1 and take only 6 items
  const itemsToShow = categories
    .filter((cat) => cat.id !== 1)
    .slice(0, 6);

  return (
    <div className={styles.grid}>
      {itemsToShow.map((category) => (
        <div key={category.id} className={styles.card}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${category.imageUrl})` }}
          >
            <div className={styles.overlay}>
              <span className={styles.name}>{category.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
