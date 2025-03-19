import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");
  const email = formData.get("email");

  if (!file) return NextResponse.json({ error: "No file uploaded" });

  const filePath = `/public/userAvatars/${email}.png`;
  const buffer = await file.arrayBuffer();
  fs.writeFileSync(path.join(process.cwd(), filePath), Buffer.from(buffer));

  const updatedUser = await prisma.user.update({
    where: { email },
    data: { image: filePath.replace("/public", "") },
  });

  return NextResponse.json({ imageUrl: updatedUser.image });
}
