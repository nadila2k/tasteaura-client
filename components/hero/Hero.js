import styles from "./Hero.module.css";
import heroImage from "@/public/image/hero/hero-image.jpg";

export default function Hero() {
  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <div className={styles.container}>
       <h1>hello world</h1>
      </div>
    </section>
  );
}
