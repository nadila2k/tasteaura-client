"use client";

import { useState } from "react";
import FacilitiesButton from "../facilitiesButton/FacilitiesButton";
import styles from "./RestaurantFacilities.module.css";
import facilities from "@/data/facilities";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function RestaurantFacilities() {

   const [activeId, setActiveId] = useState(1);

  const activeFacility = facilities.find((f) => f.id === activeId);

  // Handlers for manual slider
  const handlePrev = () => {
    const currentIndex = facilities.findIndex((f) => f.id === activeId);
    const prevIndex = (currentIndex - 1 + facilities.length) % facilities.length;
    setActiveId(facilities[prevIndex].id);
  };

  const handleNext = () => {
    const currentIndex = facilities.findIndex((f) => f.id === activeId);
    const nextIndex = (currentIndex + 1) % facilities.length;
    setActiveId(facilities[nextIndex].id);
  };

  return (
    <section className={styles.facilitiesSection}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageBox} style={{ backgroundImage: `url(${activeFacility?.image})` }}>
              <div className={styles.imageOverlay}>
                <h2>{activeFacility?.facilityName}</h2>
                <p>{activeFacility?.description}</p>
              </div>

              {/* Slider Controls */}
              <button className={`${styles.sliderButton} ${styles.prev}`} onClick={handlePrev}>
                <FaChevronLeft />
              </button>
              <button className={`${styles.sliderButton} ${styles.next}`} onClick={handleNext}>
                <FaChevronRight />
              </button>
            </div>
          </div>
          <div className={styles.textContent}>
            <h1>Our Facilities</h1>
            <h3>Curated for Comfort & Delight</h3>
            <p>
              Thoughtfully designed spaces to enhance your dining experience
              with comfort, style, and convenience.
            </p>

            <div className={styles.buttonGroup}>
              {facilities.map((facility) => (
                <FacilitiesButton
                  key={facility.id}
                  active={facility.id === activeId}
                  onClick={() => setActiveId(facility.id)}
                >
                  {facility.facilityName}
                </FacilitiesButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
