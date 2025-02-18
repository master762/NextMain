import React from "react";
import styles from "../styles/Bunner.module.css";
export default function Bunner() {
  return (
    <div className="container">
      {/* Заголовок */}
      <div className={styles.top}>
        <div>
          <h2 className={styles.title}>
            We Provide you streaming experience across various devices.
          </h2>
          <p className={styles.desc}>
            With StreamVibe, you can enjoy your favorite movies and TV shows
            anytime, anywhere. Our platform is designed to be compatible with a
            wide range of devices, ensuring that you never miss a moment of
            entertainment.
          </p>
        </div>
      </div>
      {/* карточки */}
      <div className={styles.Cards}>
        {/* первая карточка */}
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.cardTitle}>
              <img src="/img/phoneIcon.png" alt="" />
              <h3>Smartphones</h3>
            </div>
            <p>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
        </div>
        {/* вторая карточка */}
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.cardTitle}>
              <img src="/img/TabletIcon.png" alt="" />
              <h3>Tablet</h3>
            </div>
            <p>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
        </div>
        {/* третья карточка */}
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.cardTitle}>
              <img src="/img/TvIcon.png" alt="" />
              <h3>Smart TV</h3>
            </div>
            <p>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
        </div>
        {/* четвертая карточка */}
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.cardTitle}>
              <img src="/img/LaptopIcon.png" alt="" />
              <h3>Laptops</h3>
            </div>
            <p>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
        </div>
        {/* пятая карточка */}
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.cardTitle}>
              <img src="/img/GamingIcon.png" alt="" />
              <h3>Gaming Consoles</h3>
            </div>
            <p>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
        </div>
        {/* шестая карточка */}
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.cardTitle}>
              <img src="/img/VrIcon.png" alt="" />
              <h3>VR Headsets</h3>
            </div>
            <p>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
