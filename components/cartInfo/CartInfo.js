"use client";

import { useMemo, useState } from "react";
import styles from "./CartInfo.module.css";


const OrderStatus = {
  PENDING: "PENDING",
  CONFIRMED: "CONFIRMED",
  PREPARING: "PREPARING",
  OUT_FOR_DELIVERY: "OUT_FOR_DELIVERY",
  DELIVERED: "DELIVERED",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
};


const tabs = [
  { name: "ONGOING", colorClass: "ongoing" },
  { name: "COMPLETED", colorClass: "completed" },
  { name: "CANCELLED", colorClass: "cancelled" },
];

export default function CartInfo({ orders = [] }) {
  const [tab, setTab] = useState("ONGOING");


   if (!orders || orders.length === 0) {
    return (
      <div className={styles.container}>
        <p className={styles.empty}>No orders found.</p>
      </div>
    );
  }
  

  const filteredOrders = useMemo(() => {
  
    switch (tab) {
      case "ONGOING":
        return orders.filter((o) =>
          [
            OrderStatus.PENDING,
            OrderStatus.CONFIRMED,
            OrderStatus.PREPARING,
            OrderStatus.OUT_FOR_DELIVERY,
            OrderStatus.DELIVERED,
          ].includes(o.status)
        );
      case "COMPLETED":
        return orders.filter((o) => o.status === OrderStatus.COMPLETED);
      case "CANCELLED":
        return orders.filter((o) => o.status === OrderStatus.CANCELLED);
      default:
        return orders;
    }
  }, [orders, tab]);

  const getStatusClass = (status) => {
    if (status === OrderStatus.COMPLETED) return styles.completedStatus;
    if (status === OrderStatus.CANCELLED) return styles.cancelledStatus;
    return styles.pending;
  };

  return (
    <div className={styles.container}>
 
      <div className={styles.header}>
        <h2 className={styles.title}>My Orders</h2>

      
        <div className={styles.filters}>
          {tabs.map((t) => (
            <button
              key={t.name}
              className={`${styles.filterBtn} ${styles[t.colorClass]} ${
                tab === t.name ? styles.active : ""
              }`}
              onClick={() => setTab(t.name)}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>

    
      <div className={styles.orders}>
        {filteredOrders.length === 0 ? (
          <p className={styles.empty}>No {tab.toLowerCase()} orders</p>
        ) : (
          filteredOrders.map((order) => (
            <div key={order.id} className={styles.orderCard}>
              <div className={styles.orderTop}>
                <span className={styles.orderId}>Order #{order.id}</span>
                <span
                  className={`${styles.status} ${getStatusClass(order.status)}`}
                >
                  {order.status}
                </span>
              </div>

              <div className={styles.meta}>
                <div>{order.orderDate}</div>
                <div>Total: Rs. {order.totalAmount}</div>
              </div>

              <div className={styles.items}>
                {order.orderItems.map((item) => (
                  <div key={item.id} className={styles.item}>
                    <span>{item.menuItemName}</span>
                    <span>
                      {item.quantity} × Rs.{item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
