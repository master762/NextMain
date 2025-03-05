import styles from "@/styles/TheHeader.module.css";
import HeaderInner from "./HeaderInner";

export default function TheHeader({ showTextContent, showBgImage }) {
  return (
    <header className={styles.header}>
      {showBgImage ? (
        <div className={styles.bgimage}>
          <div className="container">
            <HeaderInner />
            {/* Только на первой странице */}
            {showTextContent && (
              <>
                <div className={styles.play}>
                  <button aria-label="Play">
                    <img src="/img/AbstractPlay.png" alt="Play button" />
                  </button>
                </div>
                <div className={styles.text}>
                  <h2>The Best Streaming Experience</h2>
                  <p>
                    StreamVibe is the best streaming experience for watching
                    your favorite movies and shows on demand, anytime, anywhere.
                    With StreamVibe, you can enjoy a wide variety of content,
                    including the latest blockbusters, classic movies, popular
                    TV shows, and more. You can also create your own watchlists,
                    so you can easily find the content you want to watch.
                  </p>
                  <div className={styles.flex}>
                    <button>
                      <img src="/img/IconPlay.png" alt="Play Icon" />
                      <span className={styles.span}>Start Watching Now</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="container">
          <HeaderInner />
        </div>
      )}
    </header>
  );
}
