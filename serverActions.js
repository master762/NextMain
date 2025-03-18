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
    // проверка, есть ли такой емейл
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return { status: "Почта уже существует" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        nickname,
        email,
        password: hashedPassword,
        age,
        country,
      },
    });

    // jwt токен, создание
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return { status: "Success", token }; //  отправка токена
  } catch (error) {
    console.error("Registration error:", error);
    return { status: "Error during registration" };
  }
}

// авторизация, не работает
export async function loginUser({ email, password }) {
  if (!email || !password) {
    return { status: "All fields are required" };
  }

  try {
    // пользовтель устанавливается по email
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return { status: "Invalid email or password" };
    }

    // сравнение хэшированных паролей
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return { status: "Invalid email or password" };
    }

    // генерация токена для авторизованного пользователя
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return { status: "Success", token }; // возврат токена
  } catch (error) {
    console.error("Login error:", error);
    return { status: "Error during login" };
  }
}
