"use client";
import { useState } from "react";
import styles from "@/styles/Cast.module.css";

const images = [
  "/img/cast.png",
  "/img/cast1.png",
  "/img/cast2.png",
  "/img/cast3.png",
  "/img/cast4.png",
  "/img/cast5.png",
  "/img/cast6.png",
  "/img/cast7.png",
  "/img/cast8.png",
  "/img/cast9.png",
];

export default function CastSlider() {
  const [index, setIndex] = useState(0);
  const visibleCount = 8;

  const nextSlide = () => {
    setIndex((prev) =>
      prev + 2 <= images.length - visibleCount ? prev + 2 : 0
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev - 2 >= 0 ? prev - 2 : images.length - visibleCount
    );
  };

  return (
    <div className={styles.cast}>
      <div className={styles.DescriptionContainer}>
        <div className={styles.elements}>
          <h2>Cast</h2>
          <div className={styles.arrows}>
            <button onClick={prevSlide}>
              <img src="/img/arrowleft.png" alt="Previous" />
            </button>
            <button onClick={nextSlide}>
              <img src="/img/arrowRight.png" alt="Next" />
            </button>
          </div>
        </div>
        <div className={styles.sliderContainer}>
          <div
            className={styles.slider}
            style={{
              transform: `translateX(-${index * (100 / visibleCount)}%)`,
            }}
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Cast ${i}`}
                className={styles.slideImage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
