import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { description } = await req.json();

    const newFilm = await prisma.film.create({
      data: {
        name: "New Movie",
        description,
      },
    });

    return NextResponse.json({ success: true, film: newFilm });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
