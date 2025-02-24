"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/Releases.module.css";

export default function Releases() {
  const [releasesData, setReleasesData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch("/api/releases");
        const data = await response.json();
        setReleasesData(data);
      } catch (error) {
        console.error("Failed to load releases data:", error);
      }
    };

    fetchReleases();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + releasesData.length) % releasesData.length
    );
  };

  return (
    <div className="container">
      <div className={styles.top}>
        <div>
          <h2 className={styles.title}>Releases</h2>
        </div>
        <div className={styles.controls}>
          <button className={styles.btn} onClick={handlePrev}>
            <img src="/img/arrowleft.png" alt="arrow left" />
          </button>
          <div className={styles.indicators}>
            {releasesData.slice(0, 5).map((_, index) => (
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
        {releasesData
          .slice(currentIndex, currentIndex + 5)
          .map((item, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.itemContainer}>
                <img src={item.image} alt="" />
                <div className={styles.Reliased}>
                  <p>Released at {item.released}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
