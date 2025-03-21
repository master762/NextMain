/*
  Warnings:

  - Added the required column `video` to the `Film` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Film" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "video" TEXT NOT NULL
);
INSERT INTO "new_Film" ("cover", "description", "id", "releaseYear", "slug", "title") SELECT "cover", "description", "id", "releaseYear", "slug", "title" FROM "Film";
DROP TABLE "Film";
ALTER TABLE "new_Film" RENAME TO "Film";
CREATE UNIQUE INDEX "Film_slug_key" ON "Film"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
