import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const topGenresData = [
    {
      name: "Action",
      images: JSON.stringify([
        "/img/topGenres.jpg",
        "/img/topGenres1.jpg",
        "/img/topGenres2.jpg",
        "/img/topGenres3.jpg",
      ]),
    },
    {
      name: "Adventure",
      images: JSON.stringify([
        "/img/topGenres4.jpg",
        "/img/topGenres5.jpg",
        "/img/topGenres6.jpg",
        "/img/topGenres7.jpg",
      ]),
    },
    {
      name: "Comedy",
      images: JSON.stringify([
        "/img/topGenres8.jpg",
        "/img/topGenres9.jpg",
        "/img/topGenres10.jpg",
        "/img/topGenres11.jpg",
      ]),
      
    },
    {
      name: "Drama",
      images: JSON.stringify([
       "/img/topGenres12.jpg",
        "/img/topGenres13.jpg",
        "/img/topGenres14.jpg",
        "/img/topGenres15.jpg",
      ]),
      
    },
    {
      name: "Crime",
      images: JSON.stringify([
          "/img/topGenres16.jpg",
        "/img/topGenres17.jpg",
        "/img/topGenres18.jpg",
        "/img/topGenres19.jpg",
      ]),
      
    },
    {
      name: "Anime",
      images: JSON.stringify([
          "/img/topGenres20.jpg",
          "/img/topGenres21.jpg",
          "/img/topGenres22.jpg",
          "/img/topGenres23.jpg",
      ]),
      
    },
    {
      name: "Musical",
      images: JSON.stringify([
          "/img/topGenres24.jpg",
        "/img/topGenres25.jpg",
        "/img/topGenres26.jpg",
        "/img/topGenres27.jpg",
      ]),
      
    },
    {
      name: "Superhero",
      images: JSON.stringify([
          "/img/topGenres28.jpg",
        "/img/topGenres29.jpg",
        "/img/topGenres30.jpg",
        "/img/topGenres31.jpg",
      ]),
      
    },
    {
      name: "Western",
      images: JSON.stringify([
          "/img/topGenres32.jpg",
          "/img/topGenres33.jpg",
          "/img/topGenres34.jpg",
          "/img/topGenres35.jpg",
      ]),
      
    },
  ];

async function main() {
  console.log("⏳ Clearing TopGenre table...");
  await prisma.topGenre.deleteMany();


  await prisma.$executeRawUnsafe(`DELETE FROM sqlite_sequence WHERE name='TopGenre';`);

  console.log("✅ TopGenre table cleared!");

  console.log("⏳ Seeding TopGenre table...");
  for (const genre of topGenresData) {
    await prisma.topGenre.create({
      data: genre,
    });
  }
  console.log("✅ TopGenre seeding completed.");
}

main()
  .catch((error) => {
    console.error("❌ Error seeding TopGenre:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
