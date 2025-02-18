import React from "react";
import styles from "../styles/TheFooter.module.css";
export default function TheFooter() {
  return (
    <div className="container">
      <div className={styles.bunner}>
        <div className={styles.content}>
          <div>
            <h2>Start your free trial today!</h2>
            <p>
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <button>
            <span>Start a Free Trail</span>
          </button>
        </div>
      </div>
    </div>
  );
}
