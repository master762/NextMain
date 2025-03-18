import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const body = await request.json(); // Получаем тело запроса

    // Проверка на обязательные данные
    if (
      !body.description ||
      !body.cover ||
      !body.releaseYear ||
      !body.languages ||
      !body.genres ||
      !body.videos["720p"]
    ) {
      return NextResponse.json(
        { error: "Missing required data" },
        { status: 400 }
      );
    }

    const { description, cover, releaseYear, languages, genres, videos } = body;

    // Сохраняем фильм в базе данных через Prisma
    const movie = await prisma.movie.create({
      data: {
        description,
        cover,
        releaseYear,
        languages: {
          connect: languages.map((lang) => ({ name: lang })),
        },
        genres: {
          connect: genres.map((genre) => ({ name: genre })),
        },
        videos: {
          create: [
            { quality: "720p", url: videos["720p"] },
            { quality: "1080p", url: videos["1080p"] },
            { quality: "480p", url: videos["480p"] },
          ],
        },
      },
    });

    return NextResponse.json(movie);
  } catch (error) {
    console.error("Error creating movie:", error);
    return NextResponse.json(
      { error: "Failed to create movie" },
      { status: 500 }
    );
  }
}
