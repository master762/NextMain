import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { nickname, email, password, age, country } = await req.json();

    if (!nickname || !email || !password || !age || !country) {
      return NextResponse.json(
        { status: "All fields are required" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return NextResponse.json(
        { status: "Email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: { nickname, email, password: hashedPassword, age, country },
    });

    return NextResponse.json({ status: "Success" });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { status: "Error during registration" },
      { status: 500 }
    );
  }
}
