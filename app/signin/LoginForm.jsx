import React from "react";
import Link from "next/link";
import styles from "@/styles/LoginSignin.module.css";
export default function Login() {
  return (
    <>
      <Link href="/">
        <button className={styles.back}>
          <span>Back</span>
        </button>
      </Link>
      <div className="container">
        <h2 className={styles.title}>Sign in</h2>

        <div className={styles.form}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <p className={styles.desc}>
            Haven't registered yet?
            <Link href="/login">
              <span>Log in</span>
            </Link>
          </p>
          <div className={styles.center}>
            <button type="submit" className={styles.button}>
              <span>Enter</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
