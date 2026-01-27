import Menu from "@/components/menu/Menu";
import styles from "./MenuPage.module.css";
import { fetchCategories } from "@/app/services/categoryService";
import { fetchMenuItems } from "@/app/services/menuService";

export default async function MenuPage() {
  const categories = await fetchCategories();
  const menuItems = await fetchMenuItems();
  return (
    <div className={styles.flexContainer}>
      <section className={styles.section}>
        <div className={styles.overlay} />

        <div className={`${styles.container} ${styles.content}`}>
          <h1 className={styles.heroText}>Savor Our Dishes</h1>
        </div>
      </section>

      <div className={styles.menuflex}>
        <Menu categories={categories} menuItems={menuItems} />
      </div>
    </div>
  );
}
