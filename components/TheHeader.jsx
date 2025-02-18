import styles from "@/styles/TheHeader.module.css";

export default function TheHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.bgimage}>
        <div className="container">
          <div className={styles.contentContainer}>
            <div className={styles.logo}>
              <img src="/img/Logo.png" alt="StreamVibe Logo" />
            </div>
            <nav>
              <ul className={styles.navigation}>
                <li>Home</li>
                <li>Movies & Shows</li>
                <li>Support</li>
                <li>Subscriptions</li>
              </ul>
            </nav>
            <div className={styles.icons}>
              <img src="/img/search.png" alt="Search" />
              <img src="/img/notifica.png" alt="Notifications" />
            </div>
          </div>
          <div className={styles.play}>
            <button aria-label="Play">
              <img src="/img/AbstractPlay.png" alt="Play button" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.text}>
        <h2>The Best Streaming Experience</h2>
        <p>
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
        <div className={styles.flex}>
          <button>
            <img src="/img/IconPlay.png" alt="Play Icon" />
            <span className={styles.span}>Start Watching Now</span>
          </button>
        </div>
      </div>
    </header>
  );
}
