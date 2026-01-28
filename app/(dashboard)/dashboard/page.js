import CustomerStat from "@/components/customerStat/CustomerStat";
import styles from "./Dashboard.module.css";
import { getCustomerCards } from "@/app/services/orderService";

export default async function DashboardPage() {
  const stats = await getCustomerCards();

  return (
    <div className={styles.flexContainer}>
      <h1>Dashboard</h1>
      <h3>Customer Statistics</h3>

      <CustomerStat data={stats.data} />
    </div>
  );
}
