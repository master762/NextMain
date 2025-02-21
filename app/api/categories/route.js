import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const categories = await prisma.category.findMany();

    const formattedCategories = categories.map((category) => ({
      ...category,
      images: JSON.parse(category.images),
    }));

    return NextResponse.json(formattedCategories);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
