"use client";
import { useState } from "react";
import styles from "@/styles/Cast.module.css";

export default function CastSlider({ cast }) {
  const images = cast ? cast.split(",") : [];
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

  if (images.length === 0) return null;

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
                src={src.trim()}
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
