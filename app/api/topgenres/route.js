import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const topGenres = await prisma.topGenre.findMany();

    // Преобразуем JSON-строку в массив для каждого жанра
    const formattedGenres = topGenres.map((genre) => ({
      ...genre,
      images: JSON.parse(genre.images),
    }));

    return NextResponse.json(formattedGenres);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch top genres" },
      { status: 500 }
    );
  }
}
