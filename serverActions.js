"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

// Регистрация пользователя
export async function registerUser({
  nickname,
  email,
  password,
  age,
  country,
}) {
  if (!nickname || !email || !password || !age || !country) {
    return { status: "All fields are required" };
  }

  try {
    // Проверяем, существует ли уже пользователь с таким email
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return { status: "Почта уже существует" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: { nickname, email, password: hashedPassword, age, country },
    });

    return { status: "Success" };
  } catch (error) {
    console.error("Registration error:", error);
    return { status: "Error during registration" };
  }
}
