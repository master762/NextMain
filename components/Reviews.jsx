"use client";
import { useState } from "react";
import styles from "@/styles/Reviews.module.css";

const initialReviews = [
  {
    name: "Aniket Roy",
    country: "India",
    rating: 4,
    text: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
  },
  {
    name: "Swaraj",
    country: "India",
    rating: 5,
    text: "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.",
  },
];

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    country: "",
    rating: "",
    text: "",
  });

  const nextSlide = () => {
    setIndex((prev) => (prev + 1 < reviews.length ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 >= 0 ? prev - 1 : reviews.length - 1));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setNewReview({ name: "", country: "", rating: "", text: "" });
  };

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const addReview = () => {
    if (
      newReview.name &&
      newReview.country &&
      newReview.rating &&
      newReview.text
    ) {
      setReviews([
        ...reviews,
        { ...newReview, rating: parseFloat(newReview.rating) },
      ]);
      closeModal();
    }
  };

  return (
    <div className={styles.Reviews}>
      <div className={styles.DescriptionContainer}>
        <div className={styles.flex}>
          <h2>Reviews</h2>
          <button className={styles.add} onClick={openModal}>
            <span>+</span>
            <p>Add Your Review</p>
          </button>
        </div>

        <div
          className={styles.comments}
          style={{ display: "flex", overflow: "hidden" }}
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className={styles.comment}
              style={{
                transform: `translateX(-${index * 100}%)`,
                transition: "transform 0.5s ease-in-out",
                minWidth: "100%",
              }}
            >
              <div className={styles.commentContainer}>
                <div className={styles.flex}>
                  <div className={styles.RatingTitle}>
                    <h2>{review.name}</h2>
                    <p>From {review.country}</p>
                  </div>
                  <div className={styles.rating}>
                    <div className={styles.stars}>
                      {Array.from({ length: 5 }, (_, j) => (
                        <div
                          key={j}
                          className={styles.star}
                          style={{
                            backgroundColor: j < review.rating ? "red" : "gray",
                          }}
                        />
                      ))}
                      <p>{review.rating}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.mainText}>
                  <p>{review.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.controlls}>
          <button onClick={prevSlide}>
            <img src="/img/arrowleft.png" alt="Previous" />
          </button>
          <div className={styles.indicators}>
            {reviews.map((_, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: i === index ? "red" : "gray",
                  width: i === index ? "23px" : "16px",
                }}
              ></div>
            ))}
          </div>
          <button onClick={nextSlide}>
            <img src="/img/arrowRight.png" alt="Next" />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Add Your Review</h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="country"
              placeholder="Your Country"
              onChange={handleChange}
            />
            <input
              type="number"
              name="rating"
              placeholder="Rating (1-5)"
              onChange={handleChange}
            />
            <textarea
              name="text"
              placeholder="Your Review"
              onChange={handleChange}
            />
            <div className={styles.buttons}>
              <button onClick={addReview}>Submit</button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
