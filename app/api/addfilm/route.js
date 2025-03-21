import { PrismaClient } from "@prisma/client";
import { transliterate } from "@/utils/translitiration";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const data = await req.json();

    if (!data || !data.title || !data.description || !data.releaseYear) {
      return new Response("Invalid request body", { status: 400 });
    }

    const { title, description, releaseYear, cover, video } = data;

    // Проверяем, что cover и video являются строками
    if (cover && typeof cover !== "string") {
      return new Response("Cover must be a string", { status: 400 });
    }
    if (video && typeof video !== "string") {
      return new Response("Video must be a string", { status: 400 });
    }

    // Генерируем slug
    const slug = transliterate(`${title}-${releaseYear}`).toLowerCase();

    // Создаем запись в базе
    const film = await prisma.film.create({
      data: {
        title,
        description,
        releaseYear: parseInt(releaseYear),
        slug,
        cover, // строка (URL изображения)
        video, // строка (URL видео)
      },
    });

    return new Response(JSON.stringify(film), { status: 201 });
  } catch (error) {
    console.error("Error adding film:", error);
    return new Response("Error adding film", { status: 500 });
  }
}
