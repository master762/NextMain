import React from "react";
import styles from "../styles/MoviesBlock.module.css";
import Categories from "@/components/Categories";
import TopGenres from "./TopGenres";
export default function MoviesBlock() {
  return (
    <div className={`${styles.main} container`}>
      <div className={styles.description}>
        <p>Movies</p>
      </div>
      <Categories OnePage={false} TwoPage={true} />
      <TopGenres />
    </div>
  );
}
