import ContactInfoSection from "@/components/contactusComponents/ContactInfoSection";
import styles from "./ContactUs.module.css";
import SendUs from "@/components/contactusComponents/SendUs";

export default function ContactUsPage() {
  return (
    <div className={styles.content}>
      <section className={styles.section}>
        <div className={styles.overlay} />

        <div className={`${styles.container} ${styles.content}`}>
          <h1 className={styles.heroText}>Connect With Us</h1>
        </div>
      </section>
      <div className={styles.containerflex}>
        <div className={styles.flexContainer}>
          <ContactInfoSection />
          <SendUs/>
        </div>
      </div>
    </div>
  );
}
