import React from "react";
import styles from "../styles/TheFooter.module.css";

export default function TheFooter() {
  return (
    <>
      {/* баннер */}
      <section>
        <div className="container">
          <div className={styles.bunner}>
            <div className={styles.content}>
              <div>
                <h2>Start your free trial today!</h2>
                <p>
                  This is a clear and concise call to action that encourages
                  users to sign up for a free trial of StreamVibe.
                </p>
              </div>
              <button>
                <span>Start a Free Trial</span>
              </button>
            </div>
          </div>
          <div className={styles.content}></div>
        </div>
      </section>
      {/* футер */}
      <footer className={styles.footer}>
        <div className="container">
          <nav>
            <div className={styles.top}>
              <ul>
                <li className={styles.title}>Home</li>
                <li className={styles.asside}>Categories</li>
                <li className={styles.asside}>Devices</li>
                <li className={styles.asside}>Pricing</li>
                <li className={styles.asside}>FAQ</li>
              </ul>
              <ul>
                <li className={styles.title}>Movies</li>
                <li className={styles.asside}>Gernes</li>
                <li className={styles.asside}>Trending</li>
                <li className={styles.asside}>New Release</li>
                <li className={styles.asside}>Popular</li>
              </ul>
              <ul>
                <li className={styles.title}>Shows</li>
                <li className={styles.asside}>Gernes</li>
                <li className={styles.asside}>Trending</li>
                <li className={styles.asside}>New Release</li>
                <li className={styles.asside}>Popular</li>
              </ul>
              <ul>
                <li className={styles.title}>Support</li>
                <li className={styles.asside}>Contact Us</li>
              </ul>
              <ul>
                <li className={styles.title}>Subscription</li>
                <li className={styles.asside}>Plans</li>
                <li className={styles.asside}>Features</li>
              </ul>
              <ul>
                <li className={styles.title}>Connect With Us</li>
                <div className={styles.buttonContainer}>
                  <a href="">
                    <button>
                      <img src="/img/facebook.png" alt="" />
                    </button>
                  </a>
                  <a href="">
                    <button>
                      <img src="/img/twitter.png" alt="" />
                    </button>
                  </a>
                  <a href="">
                    <button>
                      <img src="/img/in.png" alt="" />
                    </button>
                  </a>
                </div>
              </ul>
            </div>
          </nav>
          <div className={styles.desc}>
            <p>@2023 streamvib, All Rights Reserved</p>
            <div>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
