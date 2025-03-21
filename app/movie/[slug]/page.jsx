import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function MoviePage({ params }) {
  const { slug } = await params;

  const film = await prisma.film.findUnique({
    where: { slug },
  });

  if (!film) {
    return <h1>Фильм не найден</h1>;
  }

  return (
    <div>
      <h1>{film.title}</h1>
      <p>{film.description}</p>
      <p>Год релиза: {film.releaseYear}</p>
      <img src={film.cover} alt={film.title} style={{ width: "300px" }} />
      {film.video && (
        <video controls width="600">
          <source src={film.video} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      )}
    </div>
  );
}
