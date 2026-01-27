import CartCard from "@/components/cartCard/CartCard";
import styles from "./CartPage.module.css";

export default function CheckoutPage() {
  return (
    <div className={styles.flexContainer}>
      <h1>Your Cart</h1>
      <h3>Review the items you’ve added before placing your order.</h3>
      <CartCard />
    </div>
  );
}
