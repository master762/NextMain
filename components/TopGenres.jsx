"use client";
import { useState, useEffect } from "react";
import styles from "../styles/TopGenres.module.css";

export default function TopGenres() {
  const [genres, setGenres] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch("/api/topgenres");
        const data = await response.json();
        setGenres(data);
      } catch (error) {
        console.error("Failed to load top genres:", error);
      }
    };

    fetchGenres();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + genres.length) % genres.length
    );
  };

  return (
    <section>
      <div className="container">
        <div className={styles.top}>
          <div>
            <h2 className={styles.title}>Our Genres</h2>
          </div>
          <div className={styles.controls}>
            <button className={styles.btn} onClick={handlePrev}>
              <img src="/img/arrowleft.png" alt="arrow left" />
            </button>
            <div className={styles.indicators}>
              {genres.slice(0, 5).map((_, index) => (
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
          {genres.slice(currentIndex, currentIndex + 5).map((genre, index) => (
            <div className={styles.category} key={index}>
              <div className={styles.images}>
                {genre.images.map((img, imgIndex) => (
                  <img src={img} alt="genre image" key={imgIndex} />
                ))}
              </div>
              <div className={styles.categoryText}>
                <div>
                  <div className={styles.Label}>
                    <p>Top 10 In</p>
                  </div>
                  <p>{genre.name}</p>
                </div>
                <img src="/img/arrowright.png" alt="arrow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
