"use client";
import React from "react";
import { useState } from "react";
import styles from "../styles/Questions.module.css";
const accordionData = [
  {
    number: "01",
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    number: "02",
    question: "How much does StreamVibe cost?",
    answer: "StreamVibe offers various subscription plans to fit your needs.",
  },
  {
    number: "03",
    question: "What content is available on StreamVibe?",
    answer: "Yes, you can download movies and shows to watch offline.",
  },
  {
    number: "04",
    question: "How can I watch StreamVibe?",
    answer:
      "StreamVibe supports smart TVs, computers, tablets, and mobile devices.",
  },
  {
    number: "05",
    question: "How do I sign up for StreamVibe?",
    answer: "Yes, we offer a 7-day free trial for new users.",
  },
  {
    number: "06",
    question: "What is the StreamVibe free trial?",
    answer: "Yes, you can cancel your subscription at any time.",
  },
  {
    number: "07",
    question: "How do I contact StreamVibe customer support?",
    answer: "Our premium plans are ad-free for an uninterrupted experience.",
  },
  {
    number: "08",
    question: "What are the StreamVibe payment methods?",
    answer: "You can reach our support team via email or live chat.",
  },
];
export default function Questions() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section>
      <div className="container">
        {/* Заголовок */}
        <div className={styles.top}>
          <div>
            <h2 className={styles.title}>Frequently Asked Questions</h2>
            <p className={styles.desc}>
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <button className={styles.btn}>
            <span>Ask a Question</span>
          </button>
        </div>
        {/* аккордион */}
        <div className={styles.container}>
          {[0, 1].map((col) => (
            <div key={col} className={styles.column}>
              {accordionData.slice(col * 4, col * 4 + 4).map((item, index) => (
                <div key={index} className={styles.accordionItem}>
                  <div
                    className={styles.header}
                    onClick={() => toggleAccordion(col * 4 + index)}
                  >
                    <div className={styles.number}>{item.number}</div>
                    <p className={styles.question}>{item.question}</p>
                    <span className={styles.icon}>
                      {openIndex === col * 4 + index ? "−" : "+"}
                    </span>
                  </div>
                  {openIndex === col * 4 + index && (
                    <div className={`${styles.answer} ${styles.open}`}>
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
