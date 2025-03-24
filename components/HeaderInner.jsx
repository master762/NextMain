"use client";
import { useState, useEffect, useRef } from "react";
import { useSession, signOut } from "next-auth/react";
import React from "react";
import styles from "@/styles/TheHeader.module.css";
import Link from "next/link";

export default function HeaderInner() {
  const { data: session } = useSession();
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [films, setFilms] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // Проверяем, был ли клик вне поля ввода и списка результатов
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsActive(false); // Закрыть поле поиска
        setFilms([]); // Очистить результаты поиска
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSearchChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilms([]); // Очищаем результаты поиска, если запрос пустой
      return;
    }

    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (res.ok) {
        const data = await res.json();
        setFilms(data.films); // Обновляем результаты поиска
        setIsActive(true); // Открыть результаты
      } else {
        setFilms([]);
      }
    } catch (error) {
      console.error("Error searching films:", error);
      setFilms([]);
    }
  };

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
          <Link href="/movies">
            <li>Films</li>
          </Link>
          {/* если есть роль админ */}
          {session?.user?.role === "admin" && (
            <Link href="/admin">
              <li>admin</li>
            </Link>
          )}
        </ul>
      </nav>
      <div className={styles.icons}>
        <div
          ref={searchRef}
          className={`${styles.search} ${isActive ? styles.active : ""}`}
          onClick={() => setIsActive(true)}
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <img src="/img/search.png" alt="Search" />
          {isActive && films.length > 0 && (
            <div className={styles.searchResults}>
              <ul>
                {films.map((film) => (
                  <li key={film.id}>
                    <Link href={`/movie/${film.slug}`}>{film.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <img src="/img/notifica.png" alt="Notifications" />

        {session ? (
          <>
            {/* Если пользователь авторизован */}
            <Link className={styles.account} href="/profile">
              <img src="/img/profile.png" alt="profile" />
            </Link>
            <button onClick={() => signOut()}>
              <span>Log out</span>
            </button>
          </>
        ) : (
          <>
            {/* Если пользователь не авторизован */}
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
          </>
        )}
      </div>
    </div>
  );
}
