import styles from "./SendUs.module.css";

export default function SendUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>


        <div className={styles.formBox}>
          <h2>Get in touch with Us</h2>
          <span className={styles.dots}>......</span>

          <form className={styles.form}>
            <div className={styles.row}>
              <input type="text" placeholder="Your Name *" />
              <input type="email" placeholder="Email Address *" />
            </div>

            <div className={styles.row}>
              <input type="text" placeholder="Phone *" />
              <input type="text" placeholder="Subject *" />
            </div>

            <textarea placeholder="Your Message:" rows="5"></textarea>

            <button type="submit">
              Send Message <span>→</span>
            </button>
          </form>
        </div>

        {/* RIGHT – OPENING HOURS */}
        <div className={styles.infoBox}>
          <p className={styles.subTitle}>Call For Reservations</p>
          <h3>Opening Hours</h3>
          <span className={styles.dots}>......</span>

          <div className={styles.hours}>
            <div>
              <p>Monday to Friday</p>
              <h4>11:00</h4>
              <h4>22:00</h4>
            </div>

            <div className={styles.divider}></div>

            <div>
              <p>Saturday to Sunday</p>
              <h4>11:00</h4>
              <h4>22:00</h4>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}