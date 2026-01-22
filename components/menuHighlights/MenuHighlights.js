
import styles from "./MenuHighlights.module.css";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { fetchMenuItems } from "@/app/services/menuService";
import CategoriesHighlights from "./CategoriesHighlights";
import { Suspense } from "react";
import SectionLoader from "../sectionLoader/SectionLoader";

export default async function MenuHighlights() {
  const menuItems = await fetchMenuItems();
  const itemsToShow = menuItems.slice(0, 8);
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.textContent}>
            <h1>Discover Our</h1>
            <h3>MOUTH-WATERING MENU</h3>
            <div className={styles.menuItems}>
              {itemsToShow.map((item, index) => (
                <MenuItem key={item.id} item={item} number={index + 1} />
              ))}
            </div>
            <Link href="/menu" className={styles.ctaButton}>
              Explore Our Menu
            </Link>
          </div>
          <div className={styles.media}>
            <Suspense fallback={<SectionLoader />}>
          <CategoriesHighlights />
        </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
