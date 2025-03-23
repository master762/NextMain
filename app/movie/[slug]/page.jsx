import { PrismaClient } from "@prisma/client";
import styles from "@/styles/Film.module.css";
import CastSlider from "@/components/CastSlider";
import FilmCover from "@/components/FilmCover";
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import Reviews from "@/components/Reviews";
const prisma = new PrismaClient();

export default async function MoviePage({ params }) {
  const { slug } = await params;

  const film = await prisma.film.findUnique({
    where: { slug },
  });

  if (!film) {
    return <h1>movie not found</h1>;
  }

  return (
    <>
      <TheHeader showTextContent={false} showBgImage={false} />
      <div className="container">
        <FilmCover
          video={film.video}
          cover={film.cover}
          title={film.title}
          description={film.description}
        />

        <div className={styles.other}>
          <div className={styles.left}>
            <div className={styles.description}>
              <div className={styles.DescriptionContainer}>
                <h2>Description</h2>
                <p>{film.description}</p>
              </div>
            </div>
            <CastSlider cast={film.cast} />
            <Reviews />
            {/* <Reviews /> */}
          </div>
          <div className={styles.right}>
            <div className={styles.rightContainer}>
              {/* дата релиза */}
              <div className={styles.rightTitle}>
                <img src="/img/calendar.png" alt="" />
                <h3>Released Year</h3>
              </div>
              <p>{film.releaseYear}</p>
              {/* Языки */}
              <div className={styles.languagesTitle}>
                <img src="/img/language.png" alt="" />
                <h3>Available Languages</h3>
              </div>
              <div className={styles.languages}>
                {film.languages &&
                  film.languages.split(",").map((lang, index) => (
                    <div key={index}>
                      <p>{lang.trim()}</p>
                    </div>
                  ))}
              </div>
              {/* рэйтинг */}
              <div className={styles.ratingsTitle}>
                <img src="/img/star.png" alt="" />
                <h3>Ratings</h3>
              </div>
              <div className={styles.starsCards}>
                <div className={styles.card}>
                  <p>IMDb</p>
                  <div className={styles.stars}>
                    <div className={styles.star}></div>
                    <div className={styles.star}></div>
                    <div className={styles.star}></div>
                    <div className={styles.star}></div>
                    <div className={styles.star}></div>
                    <p>4.5</p>
                  </div>
                </div>
                <div className={styles.card}>
                  <p>Streamvibe</p>
                  <div className={styles.stars}>
                    <div className={styles.star}></div>
                    <div className={styles.star}></div>
                    <div className={styles.star}></div>
                    <div className={styles.star}></div>
                    <div className={styles.star}></div>
                    <p>4</p>
                  </div>
                </div>
              </div>
              {/* Жанры */}
              <div className={styles.genresTitle}>
                <img src="/img/app.png" alt="" />
                <h3>Gernes</h3>
              </div>
              <div className={styles.genres}>
                {film.genres &&
                  film.genres.split(",").map((genre, index) => (
                    <div key={index}>
                      <p>{genre.trim()}</p>
                    </div>
                  ))}
              </div>
              <div className={styles.staff}>
                <h3>Director</h3>
                <div>
                  <div className={styles.staffContent}>
                    <img src="/img/cast.png" alt="" />
                    <div className={styles.staffText}>
                      <p>Rishab Shetty</p>
                      <p>From India</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.staff}>
                <h3>Music</h3>
                <div>
                  <div className={styles.staffContent}>
                    <img src="/img/cast8.png" alt="" />
                    <div className={styles.staffText}>
                      <p>B. Ajaneesh Loknath</p>
                      <p>From India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TheFooter />
    </>
  );
}
