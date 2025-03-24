import { PrismaClient } from "@prisma/client";

export async function POST(req) {
  const { query } = await req.json();

  if (!query) {
    return new Response(
      JSON.stringify({ error: "Отсутствует параметр поиска" }),
      { status: 400 }
    );
  }

  const prisma = new PrismaClient();

  try {
    const films = await prisma.film.findMany({
      where: {
        title: {
          contains: query.toLowerCase(),
        },
      },
    });

    if (!films || films.length === 0) {
      return new Response(JSON.stringify({ error: "Фильмы не найдены" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ films }), { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Ошибка поиска фильмов:", error.message);
    } else {
      console.error("Неизвестная ошибка:", error);
    }
    return new Response(JSON.stringify({ error: "Ошибка поиска фильмов" }), {
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}
