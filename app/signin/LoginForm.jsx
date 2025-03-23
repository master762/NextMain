"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import styles from "@/styles/LoginSignin.module.css";

export default function LoginForm() {
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    setPending(true);

    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (result?.error) {
      setMessage("Invalid email or password");
    } else {
      router.push("/");
    }

    setPending(false);
  }

  return (
    <>
      <Link href="/">
        <button className={styles.back}>
          <span>Back</span>
        </button>
      </Link>
      <div className="container">
        <h2 className={styles.title}>Sign In</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
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

          <p className={styles.desc}>
            Don't have an account?{" "}
            <Link href="/login">
              <span>Sign up</span>
            </Link>
          </p>
          <div className={styles.center}>
            <button type="submit" className={styles.button} disabled={pending}>
              <span>{pending ? "Logging in..." : "Sign In"}</span>
            </button>
          </div>
        </form>
        {message && (
          <>
            <div className={styles.errorMessge}>
              <p>{message}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
