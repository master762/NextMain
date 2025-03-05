import React from "react";
import styles from "@/styles/Support.module.css";

export default function Support() {
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
        <div className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>First Name</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter First Name"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Last Name</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter Last Name"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              className={styles.input}
              placeholder="Enter your Email"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Phone Number</label>
            <div className={styles.phoneInput}>
              <input
                type="tel"
                className={styles.input}
                placeholder="Enter Phone Number"
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Message</label>
            <textarea
              className={styles.textarea}
              placeholder="Enter your Message"
              rows="4"
            ></textarea>
          </div>
          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="terms" className={styles.checkbox} />
            <label className={styles.label} htmlFor="terms">
              I agree with Terms of Use and Privacy Policy
            </label>
          </div>
          <button className={styles.submitButton}>Send Message</button>
        </div>
      </div>
    </div>
  );
}
