import React from "react";
import styles from "@/styles/TheHeader.module.css";
import Link from "next/link";
export default function HeaderInner() {
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
          <li>Subscriptions</li>
        </ul>
      </nav>
      <div className={styles.icons}>
        <img src="/img/search.png" alt="Search" />
        <img src="/img/notifica.png" alt="Notifications" />
        <button>
          <span>log in</span>
        </button>
        <button>
          <span>log out</span>
        </button>
      </div>
    </div>
  );
}
