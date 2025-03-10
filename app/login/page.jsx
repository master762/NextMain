import React from "react";
import Link from "next/link";
import styles from "@/styles/LoginSignin.module.css";
export default function page() {
  return (
    <>
      <Link href="/">
        <button className={styles.back}>
          <span>Back</span>
        </button>
      </Link>
      <div className="container">
        <h2 className={styles.title}>Log in</h2>

        <div className={styles.form}>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="number" placeholder="Your age" />
          <label className={styles.label}>
            <span>Your country</span>
            <select name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
              <option value="usa">Russia</option>
              <option value="usa">USA</option>
            </select>
          </label>
          <p className={styles.desc}>
            Already registered?
            <Link href="/signin">
              <span>Sign in</span>
            </Link>
          </p>
          <div className={styles.center}>
            <button type="submit" className={styles.button}>
              <span>Registration</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
