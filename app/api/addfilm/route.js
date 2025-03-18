import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();

    console.log("Received data:", body); // Логирование данных

    const {
      title,
      description,
      cover,
      releaseYear,
      genres,
      languages,
      videos,
    } = body;

    // Преобразование releaseYear в целое число
    const releaseYearInt = parseInt(releaseYear, 10);

    if (isNaN(releaseYearInt)) {
      throw new Error("Invalid releaseYear, must be a number");
    }

    // Преобразуем URL видео на пустую строку вместо null, если URL отсутствует
    const formattedVideos = videos.map((video) => ({
      quality: video.quality,
      url: video.url || "", // Если URL пустой, заменяем его на пустую строку
    }));

    // Создание фильма в базе данных
    const movie = await prisma.movie.create({
      data: {
        title,
        description,
        cover,
        releaseYear: releaseYearInt, // передаем как число
        genres: {
          connect: genres.map((genre) => ({ name: genre })), // подключаем жанры по имени
        },
        languages: {
          connect: languages.map((language) => ({ name: language })), // подключаем языки по имени
        },
        videos: {
          create: formattedVideos, // передаем форматированные видео
        },
      },
    });

    return NextResponse.json(movie);
  } catch (error) {
    console.error(
      "Error creating movie:",
      error instanceof Error ? error.message : error
    );

    return NextResponse.json(
      { error: "Failed to create movie" },
      { status: 500 }
    );
  }
}
