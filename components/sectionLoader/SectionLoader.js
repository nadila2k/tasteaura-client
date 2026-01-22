import styles from "./SectionLoader.module.css";

export default function SectionLoader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}></div>
    </div>
  );
}
