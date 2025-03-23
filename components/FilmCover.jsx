"use client";
import React, { useState, useRef } from "react";
import styles from "@/styles/FilmCover.module.css";

export default function FilmCover({ video, cover, title, description }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <div className="container">
      <div className={styles.coverContainer}>
        {!isPlaying && (
          <div className={styles.preview}>
            <img src={cover} alt="Preview" className={styles.previewImage} />
          </div>
        )}

        <video
          ref={videoRef}
          className={styles.video}
          src={video}
          controls
          style={{ display: isPlaying ? "block" : "none" }}
        ></video>

        {!isPlaying && (
          <>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.description}>{description}</p>
            </div>

            <div className={styles.buttonContainer}>
              <button onClick={handlePlay}>
                <img src="/img/IconPlay.png" alt="Play Icon" />
                <span className={styles.span}>Play Now</span>
              </button>
              <button>
                <span>+</span>
              </button>
              <button>
                <img src="/img/Like.png" alt="Like" />
              </button>
              <button>
                <img src="/img/Volume.png" alt="Volume" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
