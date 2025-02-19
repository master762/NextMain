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
    title: "A Song of Ice and Fire",
    text: "In a land where summers span decades and winters can last a lifetime, noble houses battle for the Iron Throne. As ancient prophecies unfold and long-forgotten creatures return, the fate of Westeros hangs in the balance. From the frozen North to the burning South, a tale of power, betrayal, and destiny begins—a song of ice and fire.",
    bg: "/img/slide2.png",
  },
  {
    title: "Ghost: The Direwolf's Legacy",
    text: "In the frozen lands beyond the Wall, a legendary direwolf roams—silent, swift, and deadly. Bound by loyalty to his master, Jon Snow, Ghost embarks on a journey of survival, vengeance, and discovery. As ancient threats awaken and new alliances form, the fate of the North may rest in the paws of the last true guardian of House Stark.",
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
