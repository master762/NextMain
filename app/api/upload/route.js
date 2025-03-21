import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Читаем данные файла
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Генерируем имя файла
    const fileName = `${Date.now()}-${file.name}`;
    const uploadDir = join(process.cwd(), "public/uploads");

    // Проверяем, существует ли папка, и создаем её, если нет
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Полный путь к файлу
    const filePath = join(uploadDir, fileName);

    // Сохраняем файл
    await writeFile(filePath, buffer);

    // Возвращаем URL загруженного файла
    const fileUrl = `/uploads/${fileName}`;
    return NextResponse.json({ url: fileUrl }, { status: 200 });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { error: "Error uploading file" },
      { status: 500 }
    );
  }
}
