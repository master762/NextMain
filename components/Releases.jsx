"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/Releases.module.css";

export default function Treanding() {
  const [treandingData, setTreandingData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTreanding = async () => {
      try {
        const response = await fetch("/api/treanding");
        const data = await response.json();
        setTreandingData(data);
      } catch (error) {
        console.error("Failed to load treanding data:", error);
      }
    };

    fetchTreanding();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + treandingData.length) % treandingData.length
    );
  };

  return (
    <div className="container">
      <div className={styles.top}>
        <div>
          <h2 className={styles.title}>Trending Now</h2>
        </div>
        <div className={styles.controls}>
          <button className={styles.btn} onClick={handlePrev}>
            <img src="/img/arrowleft.png" alt="arrow left" />
          </button>
          <div className={styles.indicators}>
            {treandingData.slice(0, 5).map((_, index) => (
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
      <div className={styles.content}>
        {treandingData
          .slice(currentIndex, currentIndex + 5)
          .map((item, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.itemContainer}>
                <img src={item.image} alt="" />
                <div className={styles.Reliased}>
                  <p>Released at{item.datarelease}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
