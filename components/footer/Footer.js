import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
         
          <div>
            <h2 className={styles.companyName}>TasteAura</h2>
            <p className={styles.text}>
              Bringing you unforgettable flavors crafted with passion and
              premium ingredients. Experience taste like never before.
            </p>
          </div>

          
          <div>
            <h3 className={styles.footerTitle}>Contact Us</h3>
            <p className={styles.text}>
              📍 45 Park Street, Colombo 07, Sri Lanka
            </p>
            <p className={styles.text}>📞 +94 77 123 4567</p>
            <p className={styles.text}>📞 +94 11 234 5678</p>
            <p className={styles.text}>✉️ hello@tasteaura.lk</p>
          </div>

        
          <div>
            <h3 className={styles.footerTitle}>Quick Links</h3>

            <Link href="/" className={styles.link}>
              Home
            </Link>
            <Link href="/menu" className={styles.link}>
              Menu
            </Link>
            <Link href="/about" className={styles.link}>
              About Us
            </Link>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          © {new Date().getFullYear()} TasteAura. All rights reserved.
        </div>
      </div>
    </section>
  );
}
