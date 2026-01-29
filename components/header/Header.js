"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import styles from "./Header.module.css";
import logo from "@/public/image/logo/tasteaura-logo.png";
import NavBarLink from "../Link/NavBarLink";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
     { href: "/menu", label: "Menu" },
    { href: "/about-us", label: "About Us" },
     { href: "/gallery", label: "Gallery" },
    { href: "/contact-us", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={scrolled ? styles.headerScrolled : styles.headerTransparent}
    >
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.logo}>
            <Image
              src={logo}
              alt="TasteAura Logo"
              style={{ width: "auto", height: "5rem" }}
              priority
            />
          </div>
          <nav className={styles.navDesktop}>
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <NavBarLink
                  key={link.href}
                  href={link.href}
                  isActive={pathname === link.href}
                >
                  {link.label}
                </NavBarLink>
              ))}
            </ul>
          </nav>
          <div className={styles.authIcon}>
            <Link href="/auth/signin" aria-label="Login">
              <FaUser size={22} />
            </Link>
          </div>
          <div
            className={styles.hamburger}
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars size={24} />
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <>
          <div
            className={styles.overlay}
            onClick={() => setSidebarOpen(false)}
          />
          <div className={styles.sidebar}>
            <button
              className={styles.closeBtn}
              onClick={() => setSidebarOpen(false)}
            >
              <FaTimes size={24} />
            </button>
            <ul className={styles.sidebarList}>
              {navLinks.map((link) => (
                <NavBarLink
                  key={link.href}
                  href={link.href}
                  isActive={pathname === link.href}
                >
                  {link.label}
                </NavBarLink>
              ))}
            </ul>
            <div className={styles.sidebarAuthIcon}>
              <Link href="/auth/signin" aria-label="Login">
                <FaUser size={22} />
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
