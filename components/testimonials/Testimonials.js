"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./Testimonials.module.css";
import customerReviews from "@/data/customerReviews";

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonialscontainer}>
        <section className={styles.testimonials}>
          <div className={styles.overlay} />

          <div className={styles.container}>
            <div className={styles.title}>
              <h1>Testimonials</h1>
              <h3>What our customers say</h3>
            </div>

            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000 }}
              spaceBetween={20}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
            >
              {customerReviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className={styles.card}>
                    <div className={styles.profile}>
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={50}
                        height={50}
                      />
                      <div className={styles.info}>
                        <div className={styles.stars}>★★★★★</div>
                        <p>{review.name}</p>
                        <span>Customer</span>
                      </div>
                    </div>

                    <p className={styles.comment}>“{review.comment}”</p>

                    <div className={styles.quote}>❝</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </section>
  );
}
