import CartInfo from "@/components/cartInfo/CartInfo";
import styles from "./OderInfo.module.css";
import { getMyOrders } from "@/app/services/orderService";

export default async function OderInfoPage() {
  const orders = await getMyOrders();

  return (
    <div className={styles.flexContainer}>
      <h1>Your Orders</h1>
      <h3>
        Track and manage your orders here. View ongoing, completed or cancelled
        orders.
      </h3>

      <CartInfo orders={orders.data} />
    </div>
  );
}
