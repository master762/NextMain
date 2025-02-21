"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/Treanding.module.css";

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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % treandingData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + treandingData.length) % treandingData.length
    );
  };

  // Для циклического слайдера выводим 5 элементов. Если данных меньше 5 – дополняем массив.
  const getVisibleItems = () => {
    let visible = treandingData.slice(currentIndex, currentIndex + 5);
    if (visible.length < 5) {
      visible = visible.concat(treandingData.slice(0, 5 - visible.length));
    }
    return visible;
  };

  const visibleItems = getVisibleItems();

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
            {treandingData.map((_, index) => (
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
        {visibleItems.map((item, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.itemContainer}>
              <img src={item.image} alt="" />
              <div className={styles.flex}>
                <div className={styles.time}>
                  <img src="/img/time.png" alt="time" />
                  <p>{item.time}</p>
                </div>
                <div className={styles.views}>
                  <img src="/img/views.png" alt="views" />
                  <p>{item.views}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
