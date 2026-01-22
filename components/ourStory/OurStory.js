import React from "react";
import styles from "./OurStory.module.css";
import Image from "next/image";
import logo from "@/public/image/logo/tasteaura-logo.png";

export default function OurStory() {
  return (
    <section className={styles.ourstorysection}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          {/* Text Content */}
          <div className={styles.textContent}>
            <h1>Our Story</h1>
            <h3>Here’s a glimpse of how our journey unfolded</h3>
            <p>
              TasteAura (Pvt) Ltd is a limited liability company, proudly
              registered in Sri Lanka in 2026, and has
              been steadily growing as a favorite dining destination. We offer a
              multi-cuisine menu crafted to delight a wide range of taste buds,
              making every meal an experience to remember.
            </p>
            <p>
              The vision of TasteAura is to become a renowned global restaurant
              chain, with branches in different parts of the world, serving
              top-quality dishes that bring people together and celebrate the
              joy of food.
            </p>
          </div>

          {/* Logo */}
          <div className={styles.logoWrapper}>
            <Image
              src={logo}
              alt="TasteAura Logo"
              width={400} 
              height={200} 
              quality={75} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
