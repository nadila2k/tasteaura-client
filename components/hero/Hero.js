import Link from "next/link";
import styles from "./Hero.module.css";
import heroImage from "@/public/image/hero/hero-image.jpg";

export default function Hero() {
  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <h1>Your Daily Dose of Healthy Eating</h1>
          <h5>
            Fresh, healthy meals delivered daily, designed around your lifestyle
            and dietary needs.
          </h5>
          <Link href="/menu" className={styles.ctaButton}>
            Explore Our Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
