import Image from "next/image";
import styles from "./Gallery.module.css";

import image1 from "@/public/image/gallery/image1.jpg";
import image2 from "@/public/image/gallery/image2.jpg";
import image3 from "@/public/image/gallery/image3.jpg";
import image4 from "@/public/image/gallery/image4.jpg";
import image5 from "@/public/image/gallery/image5.jpg";
import image6 from "@/public/image/gallery/image6.jpg";
import image7 from "@/public/image/gallery/image7.jpg";
import image8 from "@/public/image/gallery/image8.jpg";
import image9 from "@/public/image/gallery/image9.jpg";

const galleryImages = [
  { src: image1, alt: "Gallery 1", rowSpan: 2, colStart: 1 },
  { src: image2, alt: "Gallery 2", rowSpan: 2, colStart: 2 },
  { src: image3, alt: "Gallery 3", rowSpan: 3, colStart: 3 },
  { src: image4, alt: "Gallery 4", rowSpan: 3, colStart: 1, rowStart: 3 },
  { src: image5, alt: "Gallery 5", rowSpan: 2, colStart: 2, rowStart: 3 },
  { src: image6, alt: "Gallery 6", rowSpan: 2, colStart: 3, rowStart: 4 },
  { src: image7, alt: "Gallery 7", rowSpan: 2, colStart: 1, rowStart: 6 },
  { src: image8, alt: "Gallery 8", rowSpan: 3, colStart: 2, rowStart: 5 },
  { src: image9, alt: "Gallery 9", rowSpan: 2, colStart: 3, rowStart: 6 },
];

export default function GalleryPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Gallery</h1>
      
      <div className={styles.grid}>
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className={styles.imageWrapper}
            style={{
              gridRowEnd: `span ${img.rowSpan}`,
              gridColumnStart: img.colStart,
              gridRowStart: img.rowStart || "auto",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className={styles.image}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </main>
  );
}