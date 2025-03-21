import Link from "next/link";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function MoviesList() {
  const movies = await prisma.film.findMany(); // Получаем все фильмы

  return (
    <div>
      <h1>Список фильмов</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movie/${movie.slug}`}>
              {movie.title} ({movie.releaseYear})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
