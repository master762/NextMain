"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/LoginSignin.module.css";
import { registerUser } from "@/serverActions";

export default function RegisterForm() {
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    setPending(true);

    try {
      const result = await registerUser({
        nickname: formData.get("nickname"),
        email: formData.get("email"),
        password: formData.get("password"),
        age: parseInt(formData.get("age"), 10),
        country: formData.get("country"),
      });

      setMessage(result.status);
    } catch (error) {
      setMessage("Error during registration");
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <Link href="/">
        <button className={styles.back}>
          <span>Back</span>
        </button>
      </Link>
      <div className="container">
        <h2 className={styles.title}>Sign Up</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            name="nickname"
            type="text"
            required
            placeholder="Your name"
            className={styles.input}
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className={styles.input}
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className={styles.input}
          />
          <input
            name="age"
            type="number"
            required
            placeholder="Your age"
            className={styles.input}
          />
          <label className={styles.label}>
            <span>Your country</span>
            <select name="country" className={styles.select}>
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="USA">USA</option>
              <option value="Russia">Russia</option>
            </select>
          </label>
          <p className={styles.desc}>
            Already registered?{" "}
            <Link href="/signin">
              <span>Sign in</span>
            </Link>
          </p>
          <div className={styles.center}>
            <button type="submit" className={styles.button} disabled={pending}>
              <span>{pending ? "Registering..." : "Registration"}</span>
            </button>
          </div>
        </form>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </>
  );
}
