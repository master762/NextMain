import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  const { nickname, email, age, country } = await req.json();

  const updatedUser = await prisma.user.update({
    where: { email },
    data: { nickname, age: parseInt(age, 10), country },
  });

  return NextResponse.json(updatedUser);
}
