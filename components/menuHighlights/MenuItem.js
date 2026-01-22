import styles from './MenuItem.module.css';

export default function MenuItem({ item, number }) {
  return (
    <div className={styles.menuItem}>
      <p className={styles.name}>
        {number.toString().padStart(2, "0")}. {item.name}
      </p>
      <span className={styles.dots}></span>
      <p className={styles.price}>Rs. {item.price.toFixed(2)}</p>
    </div>
  );
}
