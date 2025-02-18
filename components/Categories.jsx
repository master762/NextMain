"use client";
import { useState } from "react";
import styles from "../styles/Categories.module.css";

const categoriesData = [
  {
    name: "Action",
    images: [
      "/img/action1.png",
      "/img/action2.png",
      "/img/action3.png",
      "/img/action4.png",
    ],
  },
  {
    name: "Adventure",
    images: [
      "/img/Adventure1.png",
      "/img/Adventure2.png",
      "/img/Adventure3.png",
      "/img/Adventure4.png",
    ],
  },
  {
    name: "Comedy",
    images: [
      "/img/Comedy1.png",
      "/img/Comedy2.png",
      "/img/Comedy3.png",
      "/img/Comedy4.png",
    ],
  },
  {
    name: "Drama",
    images: [
      "/img/Drama1.png",
      "/img/Drama2.png",
      "/img/Drama3.png",
      "/img/Drama4.png",
    ],
  },
  {
    name: "Horror",
    images: [
      "/img/Horror1.png",
      "/img/Horror2.png",
      "/img/Horror3.png",
      "/img/Horror4.png",
    ],
  },
  {
    name: "Sci-Fi",
    images: [
      "/img/SciFi1.png",
      "/img/SciFi2.png",
      "/img/SciFi3.png",
      "/img/SciFi4.png",
    ],
  },
  {
    name: "Fantasy",
    images: [
      "/img/Fantasy1.jpg",
      "/img/Fantasy2.jpg",
      "/img/Fantasy3.jpg",
      "/img/Fantasy4.jpg",
    ],
  },
  {
    name: "Mystery",
    images: [
      "/img/Mystery1.jpg",
      "/img/Mystery2.jpg",
      "/img/Mystery3.jpg",
      "/img/Mystery4.jpg",
    ],
  },
  {
    name: "Thriller",
    images: [
      "/img/Thriller1.jpg",
      "/img/Thriller2.jpg",
      "/img/Thriller3.jpg",
      "/img/Thriller4.jpg",
    ],
  },
];

export default function Categories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + categoriesData.length) % categoriesData.length
    );
  };

  return (
    <div className="container">
      {/* Заголовок и кнопки переключения */}
      <div className={styles.top}>
        <div>
          <h2 className={styles.title}>
            Explore our wide variety of categories
          </h2>
          <p className={styles.desc}>
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new.
          </p>
        </div>
        <div className={styles.controls}>
          <button className={styles.btn} onClick={handlePrev}>
            <img src="/img/arrowleft.png" alt="arrow left" />
          </button>
          <div className={styles.indicators}>
            {categoriesData.slice(0, 5).map((_, index) => (
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

      {/* Категории */}
      <div className={styles.categories}>
        {categoriesData
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
  );
}
