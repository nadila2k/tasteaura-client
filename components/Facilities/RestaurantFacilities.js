import styles from "./RestaurantFacilities.module.css";
export default function RestaurantFacilities() {
  return (
    <section className={styles.facilitiesSection}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div>hello</div>
          <div className={styles.textContent}>
            <h1>Our Facilities</h1>
            <h3>Curated for Comfort & Delight</h3>
            <p>Thoughtfully designed spaces to enhance your dining experience with comfort, style, and convenience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
