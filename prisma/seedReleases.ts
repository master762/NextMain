import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const releasesData = [
  {
    image: "/img/Releases.jpg",
    released: "14 April 2023",
  },
  {
    image: "/img/Releases1.jpg",
    released: "22 April 2023",
  },
  {
    image: "/img/Releases2.jpg",
    released: "13 April 2023",
  },
  {
    image: "/img/Releases3.jpg",
    released: "9 April 2023",
  },
  {
    image: "/img/Releases4.jpg",
    released: "19 April 2023",
  },
  {
    image: "/img/Releases5.jpg",
    released: "11 April 2023",
  },
  {
    image: "/img/Releases6.jpg",
    released: "20 April 2023",
  },
  {
    image: "/img/Releases7.jpg",
    released: "23 April 2023",
  },
  {
    image: "/img/Releases8.jpg",
    released: "21 April 2023",
  },
];

async function main() {
  console.log("⏳ Clearing Release table...");
  await prisma.release.deleteMany();

  // Сброс автоинкремента для SQLite
  await prisma.$executeRawUnsafe(
    `DELETE FROM sqlite_sequence WHERE name='Release';`
  );
  console.log("✅ Release table cleared!");

  console.log("⏳ Seeding Release table...");
  for (const item of releasesData) {
    await prisma.release.create({ data: item });
  }
  console.log("✅ Release seeding completed.");
}

main()
  .catch((error) => {
    console.error("❌ Error seeding Release:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
