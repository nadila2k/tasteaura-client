import Image from "next/image";
import Link from "next/link";
import logo from "@/public/image/logo/tasteaura-logo.png";

import styles from "./DashboardLayout.module.css";
import SidebarToggle from "@/components/sidebarToggle/SidebarToggle";

export default function DashboardLayout({ children }) {
  return (
    <div className={styles.dashboardContainer}>
      {/* Client sidebar + mobile hamburger */}
      <SidebarToggle />

      {/* Main content */}
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
}