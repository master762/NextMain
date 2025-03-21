"use client";

import React, { useState } from "react";
import styles from "@/styles/Support.module.css";

export default function Support() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    termsAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage(""); // Очистка сообщения перед новой отправкой

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          termsAccepted: false,
        });
      } else {
        setSuccessMessage("Error sending message. Try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("Error sending message. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.ui}>
          <h1>Welcome to our support page!</h1>
          <p>
            We're here to help you with any problems you may be having with our
            product.
          </p>
          <img
            className={styles.bunner}
            src="/img/bunnerSuppurt.png"
            alt="Support Banner"
          />
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>First Name</label>
            <input
              type="text"
              name="firstName"
              className={styles.input}
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Last Name</label>
            <input
              type="text"
              name="lastName"
              className={styles.input}
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              className={styles.input}
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Phone Number</label>
            <input
              type="tel"
              name="phone"
              className={styles.input}
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Message</label>
            <textarea
              name="message"
              className={styles.textarea}
              placeholder="Enter your Message"
              rows="4"
              maxLength="500"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="terms"
              name="termsAccepted"
              className={styles.checkbox}
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            <label className={styles.label} htmlFor="terms">
              I agree with Terms of Use and <a href="/">Privacy Policy</a>
            </label>
          </div>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={!formData.termsAccepted || isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {successMessage && (
            <p className={styles.successMessage}>{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}
