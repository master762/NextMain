"use client";
import { useState, useEffect } from "react";
import styles from "../styles/Categories.module.css";

export default function Categories({ OnePage, TwoPage }) {
  const [categories, setCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to load categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
    );
  };

  return (
    <section>
      <div className="container">
        <div className={styles.top}>
          <div>
            {OnePage && (
              <>
                <h2 className={styles.title}>
                  Explore our wide variety of categories
                </h2>
                <p className={styles.desc}>
                  Whether you're looking for a comedy to make you laugh, a drama
                  to make you think, or a documentary to learn something new.
                </p>
              </>
            )}
            {TwoPage && (
              <>
                <h2 className={styles.title}>Our Genres</h2>
              </>
            )}
          </div>
          <div className={styles.controls}>
            <button className={styles.btn} onClick={handlePrev}>
              <img src="/img/arrowleft.png" alt="arrow left" />
            </button>
            <div className={styles.indicators}>
              {categories.slice(0, 5).map((_, index) => (
                <div
                  key={index}
                  className={`${styles.indicator} ${
                    index === currentIndex ? styles.active : ""
                  }`}
                ></div>
              ))}
            </div>
            <button className={styles.btn} onClick={handleNext}>
              <img src="/img/arrowright.png" alt="arrow right" />
            </button>
          </div>
        </div>

        <div className={styles.categories}>
          {categories
            .slice(currentIndex, currentIndex + 5)
            .map((category, index) => (
              <div className={styles.category} key={index}>
                <div className={styles.images}>
                  {category.images.map((img, imgIndex) => (
                    <img src={img} alt="category image" key={imgIndex} />
                  ))}
                </div>
                <div className={styles.categoryText}>
                  <p>{category.name}</p>
                  <img src="/img/arrowright.png" alt="arrow" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
