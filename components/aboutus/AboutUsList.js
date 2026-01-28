import Image from "next/image";
import React from "react";

import styles from "./AboutUsList.module.css";

export default function AboutUsList({ item }) {
  return (
    <div className={styles.container}>
      <div className={styles.textBlock}>
        <h1>{item.mainHeader}</h1>
        <h3>{item.subHeader}</h3>
        <p>{item.firstParagraph}</p>
      </div>

      <div className={styles.imageBlock}>
        <Image
          src={item.imageUrl}
          alt={item.mainHeader}
          fill
          sizes="(max-width: 300px) 70vw, 50vw"
        />
      </div>

      <div className={styles.fullWidth}>
        <p>{item.secondParagraph}</p>
      </div>
    </div>
  );
}
