import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import styles from "@/styles/FilmPage.module.css";
const prisma = new PrismaClient();

export default async function MoviesList() {
  const movies = await prisma.film.findMany();

  return (
    <>
      <div className="container">
        <h1 className={styles.Title}>List of films</h1>

        {movies.map((movie) => (
          <div className={styles.cards} key={movie.id}>
            <Link href={`/movie/${movie.slug}`}>
              <div className={styles.card}>
                <p>{movie.title}</p>
                <p>{movie.description}</p>
                <p>{movie.releaseYear}</p>
                <img src={movie.cover} alt={movie.description} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
