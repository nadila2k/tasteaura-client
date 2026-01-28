"use client";

import { FiShoppingCart, FiCheckCircle, FiClock, FiXCircle, FiCreditCard } from "react-icons/fi";
import styles from "./CustomerStat.module.css";

export default function CustomerStat({ data }) {
 
  if (!data) return <p>No statistics available.</p>;

 const stats = [
  { title: "Total Orders", value: data.totalOrders, icon: <FiShoppingCart className={styles.icon} />, color: "#4f46e5" },
  { title: "Completed Orders", value: data.completedOrders, icon: <FiCheckCircle className={styles.icon} />, color: "#10b981" },
  { title: "Ongoing Orders", value: data.ongoingOrders, icon: <FiClock className={styles.icon} />, color: "#f59e0b" },
  { title: "Cancelled Orders", value: data.cancelledOrders, icon: <FiXCircle className={styles.icon} />, color: "#ef4444" },
  { title: "Total Spent", value: `Rs ${data.totalSpent}`, icon: <FiCreditCard className={styles.icon} />, color: "#6366f1" },
  { title: "Today Spent", value: `Rs ${data.todaySpent}`, icon: <FiCreditCard className={styles.icon} />, color: "#3b82f6" },
];


  return (
    <div className={styles.cardContainer}>
      {stats.map((stat) => (
        <div key={stat.title} className={styles.card} style={{ borderTop: `4px solid ${stat.color}` }}>
          <div className={styles.iconWrapper}>{stat.icon}</div>
          <div className={styles.content}>
            <p className={styles.title}>{stat.title}</p>
            <p className={styles.value}>{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
