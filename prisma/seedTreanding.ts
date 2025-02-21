import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const treandingData = [
  {
    image: "/img/TrendingNow.jpg",
    time: "1h 30min",
    views: "2K",
  },
  {
    image: "/img/TrendingNow1.jpg",
    time: "1h 57min",
    views: "1.5K",
  },
  {
    image: "/img/TrendingNow2.jpg",
    time: "2h 10min",
    views: "1.8K",
  },
  {
    image: "/img/TrendingNow3.jpg",
    time: "2h 20min",
    views: "3K",
  },
  {
    image: "/img/TrendingNow4.jpg",
    time: "1h 42min",
    views: "5K",
  },
  {
    image: "/img/TrendingNow5.jpg",
    time: "1h 50min",
    views: "2.2K",
  },
  {
    image: "/img/TrendingNow6.jpg",
    time: "2h 5min",
    views: "1.7K",
  },
  {
    image: "/img/TrendingNow7.jpg",
    time: "1h 55min",
    views: "2.5K",
  },
  {
    image: "/img/TrendingNow8.jpg",
    time: "2h 15min",
    views: "3.5K",
  },
];

async function main() {
  console.log("⏳ Clearing Treanding table...");
  await prisma.treanding.deleteMany();

  // Сброс автоинкремента (только для SQLite)
  await prisma.$executeRawUnsafe(
    `DELETE FROM sqlite_sequence WHERE name='Treanding';`
  );

  console.log("✅ Treanding table cleared!");

  console.log("⏳ Seeding Treanding table...");
  for (const item of treandingData) {
    await prisma.treanding.create({
      data: item,
    });
  }
  console.log("✅ Treanding seeding completed.");
}

main()
  .catch((error) => {
    console.error("❌ Error seeding Treanding:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
