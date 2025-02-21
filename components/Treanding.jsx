import React from "react";
import styles from "../styles/Treanding.module.css";
export default function Treanding() {
  return (
    <div className="container">
      <div className={styles.top}>
        <div>
          <h2 className={styles.title}>Trending Now</h2>
        </div>
        <div className={styles.controls}>
          <button className={styles.btn}>
            <img src="/img/arrowleft.png" alt="arrow left" />
          </button>
          <div className={styles.indicators}>
            <div className={styles.indicator}></div>
          </div>
          <button className={styles.btn}>
            <img src="/img/arrowright.png" alt="arrow right" />
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.item}>
          <div className={styles.itemContainer}>
            <img src="/img/TrendingNow.jpg" alt="" />
            <div className={styles.flex}>
              <div className={styles.time}>
                <img src="/img/time.png" alt="" />
                <p>1h 30min</p>
              </div>
              <div className={styles.views}>
                <img src="/img/views.png" alt="" />
                <p>2K</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemContainer}>
            <img src="/img/TrendingNow1.jpg" alt="" />
            <div className={styles.flex}>
              <div className={styles.time}>
                <img src="/img/time.png" alt="" />
                <p>1h 57min</p>
              </div>
              <div className={styles.views}>
                <img src="/img/views.png" alt="" />
                <p>1.5K</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemContainer}>
            <img src="/img/TrendingNow2.jpg" alt="" />
            <div className={styles.flex}>
              <div className={styles.time}>
                <img src="/img/time.png" alt="" />
                <p>2h 10min</p>
              </div>
              <div className={styles.views}>
                <img src="/img/views.png" alt="" />
                <p>1.8K</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemContainer}>
            <img src="/img/TrendingNow3.jpg" alt="" />
            <div className={styles.flex}>
              <div className={styles.time}>
                <img src="/img/time.png" alt="" />
                <p>2h 20min</p>
              </div>
              <div className={styles.views}>
                <img src="/img/views.png" alt="" />
                <p>3K</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemContainer}>
            <img src="/img/TrendingNow4.jpg" alt="" />
            <div className={styles.flex}>
              <div className={styles.time}>
                <img src="/img/time.png" alt="" />
                <p>1h 42min</p>
              </div>
              <div className={styles.views}>
                <img src="/img/views.png" alt="" />
                <p>5K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
