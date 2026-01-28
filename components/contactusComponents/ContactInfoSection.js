import styles from "./ContactInfoSection.module.css";

export default function ContactInfoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          
          <div className={styles.item}>
            <h3>Reservations</h3>
            <p>Phone: +94 11 245 8899</p>
            <p>Email: reservations@tasteaura.lk</p>
          </div>

          <div className={styles.item}>
            <h3>Our Address</h3>
            <p>
              No. 145, Galle Road,<br />
              Kollupitiya,<br />
              Colombo 03, Sri Lanka
            </p>
          </div>

          <div className={styles.item}>
            <h3>Head Office</h3>
            <p>Phone: +94 11 256 7733</p>
            <p>Email: info@tasteaura.lk</p>
          </div>

        </div>
      </div>
    </section>
  );
}