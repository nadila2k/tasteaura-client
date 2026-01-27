"use client";

import { useState } from "react";
import {
  FiMenu,
  FiHome,
  FiShoppingCart,
  FiClipboard,
  FiLogOut,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/image/logo/tasteaura-logo.png";
import styles from "./SidebarToggle.module.css";
import { signOut } from "next-auth/react";

export default function SidebarToggle() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await signOut({ callbackUrl: "/auth/signin" });
  };

  return (
    <>
      <div
        className={`${styles.sidebarOverlay} ${sidebarOpen ? "active" : ""}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <aside
        className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}
      >
        <div className={styles.logoContainer}>
          <Link href="/">
            <div className={styles.logoWrapper}>
              <Image
                src={logo}
                alt="TasteAura Logo"
                fill
                className={styles.logoImage}
                sizes="(max-width: 48rem) 150px, 200px"
                priority
              />
            </div>
          </Link>
        </div>

        <nav className={styles.navLinks}>
          <Link
            href="/dashboard"
            className={styles.navLink}
            onClick={() => setSidebarOpen(false)}
          >
            <FiHome size={20} /> Dashboard
          </Link>
          <Link
            href="/checkout"
            className={styles.navLink}
            onClick={() => setSidebarOpen(false)}
          >
            <FiShoppingCart size={20} /> Cart
          </Link>
          <Link
            href="/order-info"
            className={styles.navLink}
            onClick={() => setSidebarOpen(false)}
          >
            <FiClipboard size={20} /> Order Info
          </Link>
        </nav>

        <button
          onClick={handleLogout}
          disabled={loading}
          className={styles.logoutBtn}
        >
          {loading ? (
            "Logging out..."
          ) : (
            <>
              <FiLogOut size={20} /> Logout
            </>
          )}
        </button>
      </aside>

      <button
        className={styles.mobileMenuBtn}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FiMenu size={28} />
      </button>
    </>
  );
}
