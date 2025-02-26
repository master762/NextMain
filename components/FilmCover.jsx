"use client";
import React, { useState, useRef } from "react";
import styles from "@/styles/FilmCover.module.css";

export default function FilmCover() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [quality, setQuality] = useState("1080p");
  const videoRef = useRef(null);

  // Оставлены только 1080p, 720p и 480p
  const videoSources = {
    "1080p": "/video/video1080p.mp4",
    "720p": "/video/video720p.mp4",
    "480p": "/video/video480p.mp4",
  };

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  const changeQuality = (newQuality) => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      setQuality(newQuality);
      setTimeout(() => {
        videoRef.current.currentTime = currentTime;
        videoRef.current.play();
      }, 50);
    }
  };

  return (
    <div className={styles.slider}>
      {!isPlaying && (
        <div className={styles.preview}>
          <img
            src="/img/slide3.png"
            alt="Preview"
            className={styles.previewImage}
          />
          <div className={styles.text}>
            <h2>Kantara</h2>
            <p>
              With the help of remaining allies, the Avengers must assemble once
              more in order to undo Thanos's actions and undo the chaos to the
              universe, no matter what consequences may be in store, and no
              matter who they face... Avenge the fallen.
            </p>
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        className={styles.video}
        src={videoSources[quality]}
        controls
        autoPlay
        style={{ display: isPlaying ? "block" : "none" }}
      ></video>
      {!isPlaying && (
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
      )}
      {isPlaying && (
        <div className={styles.qualitySelector}>
          {Object.keys(videoSources).map((q) => (
            <button
              key={q}
              className={quality === q ? styles.activeQuality : ""}
              onClick={() => changeQuality(q)}
            >
              {q}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
