"use client";
import { useState, useEffect, useRef } from "react";
import React from "react";
import styles from "@/styles/TheHeader.module.css";
import Link from "next/link";
export default function HeaderInner() {
  const [isActive, setIsActive] = useState(false);
  const searchRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsActive(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={styles.contentContainer}>
      <div className={styles.logo}>
        <Link href="/" scroll={false}>
          <img src="/img/Logo.png" alt="StreamVibe Logo" />
        </Link>
      </div>
      <nav>
        <ul className={styles.navigation}>
          <Link href="/" scroll={false}>
            <li>Home</li>
          </Link>
          <Link href="/Film">
            <li>Movies & Shows</li>
          </Link>
          <Link href="/support">
            <li>Support</li>
          </Link>
          <Link href="/subscription">
            <li>Subscriptions</li>
          </Link>
        </ul>
      </nav>
      <div className={styles.icons}>
        <div
          ref={searchRef}
          className={`${styles.search} ${isActive ? styles.active : ""}`}
          onClick={() => setIsActive(true)}
        >
          <input type="text" placeholder="Search..." />
          <img src="/img/search.png" alt="Search" />
        </div>

        <img src="/img/notifica.png" alt="Notifications" />
        <Link href="/login">
          <button>
            <span>log in</span>
          </button>
        </Link>
        <Link href="/signin">
          <button>
            <span>sign in</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
