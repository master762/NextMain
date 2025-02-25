"use client";
import styles from "../styles/Hero.module.css";
import { useState } from "react";
const slides = [
  {
    title: "Avengers : Endgame",
    text: "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
    bg: "/img/slide1.png",
  },
  {
    title: "Stranger Things",
    text: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    bg: "/img/slide2.png",
  },
  {
    title: "Kantara",
    text: "A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.",
    bg: "/img/slide3.png",
  },
  {
    title: "Echoes of the Forgotten",
    text: "In a world where memories shape reality, a lone traveler awakens with no past and a single clue—a whisper of a name lost to time. As he journeys through a land of shifting landscapes and hidden truths, he must uncover the secrets of his existence before the echoes consume him forever.",
    bg: "/img/slide4.png",
  },
];
export default function TheHeader() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <section>
      <div className="container">
        <div
          className={styles.slider}
          style={{ backgroundImage: `url(${slides[currentSlide].bg})` }}
        >
          <div className={styles.text}>
            <h2>{slides[currentSlide].title}</h2>
            <p>{slides[currentSlide].text}</p>
          </div>
          <div className={styles.buttonContainer}>
            <button>
              <img src="/img/IconPlay.png" alt="Play Icon" />
              <span className={styles.span}>Play Now</span>
            </button>
            <button>
              <span>+</span>
            </button>
            <button>
              <img src="/img/Like.png" alt="Button 2" />
            </button>
            <button>
              <img src="/img/Volume.png" alt="Button 3" />
            </button>
          </div>

          <div className={styles.elements}>
            <button onClick={prevSlide} className={styles.navButton}>
              ←
            </button>
            <div className={styles.indicators}>
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`${styles.indicator} ${
                    index === currentSlide ? styles.active : ""
                  }`}
                ></div>
              ))}
            </div>

            <button onClick={nextSlide} className={styles.navButton}>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
