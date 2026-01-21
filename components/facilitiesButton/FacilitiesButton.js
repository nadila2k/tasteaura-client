import styles from "./FacilitiesButton.module.css";

export default function FacilitiesButton({ children, active, onClick }) {
  return (
    <button
      className={`${styles.button} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
