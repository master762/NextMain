/*
  Warnings:

  - Added the required column `slug` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT 'no description',
    "cover" TEXT,
    "releaseYear" INTEGER NOT NULL,
    "slug" TEXT NOT NULL
);
INSERT INTO "new_Movie" ("cover", "description", "id", "releaseYear", "title") SELECT "cover", "description", "id", "releaseYear", "title" FROM "Movie";
DROP TABLE "Movie";
ALTER TABLE "new_Movie" RENAME TO "Movie";
CREATE UNIQUE INDEX "Movie_slug_key" ON "Movie"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
