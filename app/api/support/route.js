import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Получение всех заявок
export async function GET() {
  try {
    const messages = await prisma.supportMessage.findMany();
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error("Ошибка при получении заявок:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Создание новой заявки (твой существующий код)
export async function POST(req) {
  try {
    const body = await req.json();

    if (
      !body.firstName ||
      !body.lastName ||
      !body.email ||
      !body.phone ||
      !body.message
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const newMessage = await prisma.supportMessage.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        message: body.message,
        status: "new", // Добавил статус по умолчанию
      },
    });

    return NextResponse.json(
      { message: "Message sent successfully!", data: newMessage },
      { status: 201 }
    );
  } catch (error) {
    console.error("Ошибка при создании заявки:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Обновление статуса заявки
export async function PUT(req) {
  try {
    const { id, status } = await req.json();

    if (!id || !status) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    await prisma.supportMessage.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json(
      { message: "Status updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Ошибка при обновлении статуса:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
