import AboutUsList from "@/components/aboutus/AboutUsList";
import styles from "./AboutUs.module.css";
import aboutUsData from "@/data/aboutUsData";

export default function AboutUsPage() {
  return (
    <div className={styles.content}>
      <section className={styles.section}>
        <div className={styles.overlay} />

        <div className={styles.container}>
          <h1 className={styles.heroText}>About our Restaurant</h1>
        </div>
      </section>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          {aboutUsData.map((item, index) => (
            <AboutUsList key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
