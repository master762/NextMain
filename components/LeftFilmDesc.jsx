import React from "react";
import styles from "@/styles/LeftFilmDesc.module.css";
import CastSlider from "@/components/CastSlider";
import Reviews from "@/components/Reviews";
import FilmCover from "./FilmCover";
export default function LeftFilmDesc() {
  return (
    <div className="container">
      <FilmCover />
      <div className={styles.other}>
        <div className={styles.left}>
          <div className={styles.description}>
            <div className={styles.DescriptionContainer}>
              <h2>Description</h2>
              <p>
                A fiery young man clashes with an unflinching forest officer in
                a south Indian village where spirituality, fate and folklore
                rule the lands.
              </p>
            </div>
          </div>
          <CastSlider />
          <Reviews />
        </div>
        <div className={styles.right}>
          <div className={styles.rightContainer}>
            <div className={styles.rightTitle}>
              <img src="/img/calendar.png" alt="" />
              <h3>Released Year</h3>
            </div>
            <p>2022</p>
            <div className={styles.languagesTitle}>
              <img src="/img/language.png" alt="" />
              <h3>Available Languages</h3>
            </div>
            <div className={styles.languages}>
              <div>
                <p>English</p>
              </div>
              <div>
                <p>Hindi</p>
              </div>
              <div>
                <p>Tamil</p>
              </div>
              <div>
                <p>Telegu</p>
              </div>
              <div>
                <p>Kannada</p>
              </div>
            </div>
            <div className={styles.ratingsTitle}>
              <img src="/img/star.png" alt="" />
              <h3>Ratings</h3>
            </div>
            <div className={styles.starsCards}>
              <div className={styles.card}>
                <p>IMDb</p>
                <div className={styles.stars}>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <p>4.5</p>
                </div>
              </div>
              <div className={styles.card}>
                <p>Streamvibe</p>
                <div className={styles.stars}>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <p>4</p>
                </div>
              </div>
            </div>
            <div className={styles.genresTitle}>
              <img src="/img/app.png" alt="" />
              <h3>Gernes</h3>
            </div>
            <div className={styles.genres}>
              <div>
                <p>Action</p>
              </div>
              <div>
                <p>Adventure</p>
              </div>
            </div>
            <div className={styles.staff}>
              <h3>Director</h3>
              <div>
                <div className={styles.staffContent}>
                  <img src="/img/cast.png" alt="" />
                  <div className={styles.staffText}>
                    <p>Rishab Shetty</p>
                    <p>From India</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.staff}>
              <h3>Music</h3>
              <div>
                <div className={styles.staffContent}>
                  <img src="/img/cast8.png" alt="" />
                  <div className={styles.staffText}>
                    <p>B. Ajaneesh Loknath</p>
                    <p>From India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
