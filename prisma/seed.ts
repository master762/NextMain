import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const categoriesData = [
  {
    name: "Action",
    images: JSON.stringify([
      "/img/action1.png",
      "/img/action2.png",
      "/img/action3.png",
      "/img/action4.png",
    ]),
  },
  {
    name: "Adventure",
    images: JSON.stringify([
      "/img/Adventure1.png",
      "/img/Adventure2.png",
      "/img/Adventure3.png",
      "/img/Adventure4.png",
    ]),
  },
  {
    name: "Comedy",
    images: JSON.stringify([
      "/img/Comedy1.png",
      "/img/Comedy2.png",
      "/img/Comedy3.png",
      "/img/Comedy4.png",
    ]),
    
  },
  {
    name: "Drama",
    images: JSON.stringify([
     "/img/Drama1.png",
      "/img/Drama2.png",
      "/img/Drama3.png",
      "/img/Drama4.png",
    ]),
    
  },
  {
    name: "Horror",
    images: JSON.stringify([
        "/img/Horror1.png",
      "/img/Horror2.png",
      "/img/Horror3.png",
      "/img/Horror4.png",
    ]),
    
  },
  {
    name: "Sci-Fi",
    images: JSON.stringify([
        "/img/SciFi1.png",
        "/img/SciFi2.png",
        "/img/SciFi3.png",
        "/img/SciFi4.png",
    ]),
    
  },
  {
    name: "Fantasy",
    images: JSON.stringify([
        "/img/Fantasy1.jpg",
      "/img/Fantasy2.jpg",
      "/img/Fantasy3.jpg",
      "/img/Fantasy4.jpg",
    ]),
    
  },
  {
    name: "Mystery",
    images: JSON.stringify([
        "/img/Mystery1.jpg",
      "/img/Mystery2.jpg",
      "/img/Mystery3.jpg",
      "/img/Mystery4.jpg",
    ]),
    
  },
  {
    name: "Thriller",
    images: JSON.stringify([
        "/img/Thriller1.jpg",
        "/img/Thriller2.jpg",
        "/img/Thriller3.jpg",
        "/img/Thriller4.jpg",
    ]),
    
  },
];

async function main() {
  console.log("Seeding database...");
  for (const category of categoriesData) {
    await prisma.category.create({
      data: {
        name: category.name,
        images: category.images, // Здесь уже JSON-строка
      },
    });
  }
  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });