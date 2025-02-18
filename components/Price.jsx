"use client";
import { useState } from "react";
import styles from "../styles/Price.module.css";

export default function Price() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic Plan",
      monthlyPrice: 9.99,
      description:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    },
    {
      name: "Standard Plan",
      monthlyPrice: 12.99,
      description:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
    },
    {
      name: "Premium Plan",
      monthlyPrice: 14.99,
      description:
        "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
    },
  ];

  return (
    <div className="container">
      {/* Заголовок */}
      <div className={styles.top}>
        <div>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.desc}>
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.btn} ${!isYearly ? styles.active : ""}`}
            onClick={() => setIsYearly(false)}
          >
            <span>Monthly</span>
          </button>
          <button
            className={`${styles.btn} ${isYearly ? styles.active : ""}`}
            onClick={() => setIsYearly(true)}
          >
            <span>Yearly</span>
          </button>
        </div>
      </div>

      {/* Прайсы */}
      <div className={styles.items}>
        {plans.map((plan, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.content}>
              <h2>{plan.name}</h2>
              <p>{plan.description}</p>
              <data
                value={isYearly ? plan.monthlyPrice * 12 : plan.monthlyPrice}
              >
                $
                {isYearly
                  ? (plan.monthlyPrice * 12).toFixed(2)
                  : plan.monthlyPrice}{" "}
                <span>/ {isYearly ? "year" : "month"}</span>
              </data>
              <div className={styles.buttons}>
                <button>
                  <span>Start Free Trial</span>
                </button>
                <button>
                  <span>Choose Plan</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
