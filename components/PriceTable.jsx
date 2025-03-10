import React from "react";
import styles from "@/styles/Table.module.css";
export default function PriceTable() {
  return (
    <div className="container">
      <div className={styles.title}>
        <h2>Compare our plans and find the right one for you</h2>
        <p>
          StreamVibe offers three different plans to fit your needs: Basic,
          Standard, and Premium. Compare the features of each plan and choose
          the one that's right for you.
        </p>
      </div>
      <div className={styles.table}>
        <div className={styles.table_row}>
          <div className={styles.radiusTop}>Features</div>
          <div>Basic</div>
          <div>
            Standart <span>Popular</span>
          </div>
          <div className={styles.radiusTop}>Premium</div>
        </div>
        <div className={styles.table_row}>
          <div>Price</div>
          <div>$9.99/Month</div>
          <div>$12.99/Month</div>
          <div>$14.99/Month</div>
        </div>
        <div className={styles.table_row}>
          <div>Content</div>
          <div>
            Access to a wide selection of movies and shows, including some new
            releases.
          </div>
          <div>
            Access to a wider selection of movies and shows, including most new
            releases and exclusive content
          </div>
          <div>
            Access to a widest selection of movies and shows, including all new
            releases and Offline Viewing
          </div>
        </div>
        <div className={styles.table_row}>
          <div>Devices</div>
          <div>Watch on one device simultaneously</div>
          <div>Watch on Two device simultaneously</div>
          <div>Watch on Four device simultaneously</div>
        </div>
        <div className={styles.table_row}>
          <div>Free Trail</div>
          <div>7 Days</div>
          <div>7 Days</div>
          <div>7 Days</div>
        </div>
        <div className={styles.table_row}>
          <div>Cancel Anytime</div>
          <div>Yes</div>
          <div>Yes</div>
          <div>Yes</div>
        </div>
        <div className={styles.table_row}>
          <div>HDR</div>
          <div>No</div>
          <div>Yes</div>
          <div>Yes</div>
        </div>
        <div className={styles.table_row}>
          <div>Dolby Atmos</div>
          <div>No</div>
          <div>Yes</div>
          <div>Yes</div>
        </div>
        <div className={styles.table_row}>
          <div>Ad - Free</div>
          <div>No</div>
          <div>Yes</div>
          <div>Yes</div>
        </div>
        <div className={styles.table_row}>
          <div>Offline Viewing</div>
          <div>No</div>
          <div>Yes, for select titles.</div>
          <div>Yes, for all titles.</div>
        </div>
        <div className={styles.table_row}>
          <div className={styles.radiusBottom}>Family Sharing</div>
          <div>No</div>
          <div>Yes, up to 5 family members.</div>
          <div className={styles.radiusBottom}>
            Yes, up to 6 family members.
          </div>
        </div>
      </div>
    </div>
  );
}
