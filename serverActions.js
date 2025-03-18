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
    // Проверяем, существует ли email
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return { status: "Email already exists" };
    }

    // Хешируем пароль
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создаём пользователя
    const newUser = await prisma.user.create({
      data: {
        nickname,
        email,
        password: hashedPassword,
        age,
        country,
      },
    });

    // Генерируем токен
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return { status: "Success", token }; // Отправляем токен клиенту
  } catch (error) {
    console.error("Registration error:", error);
    return { status: "Error during registration" };
  }
}

// Авторизация пользователя
export async function loginUser({ email, password }) {
  if (!email || !password) {
    return { status: "All fields are required" };
  }

  try {
    // Находим пользователя по email
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return { status: "Invalid email or password" };
    }

    // Проверяем правильность пароля
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return { status: "Invalid email or password" };
    }

    // Генерация токена для авторизованного пользователя
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return { status: "Success", token }; // Возвращаем токен
  } catch (error) {
    console.error("Login error:", error);
    return { status: "Error during login" };
  }
}
