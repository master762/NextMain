import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const treanding = await prisma.treanding.findMany();
    return NextResponse.json(treanding);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch treanding data" },
      { status: 500 }
    );
  }
}
