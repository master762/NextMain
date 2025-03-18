/*
  Warnings:

  - You are about to drop the `_GenreToMovie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_LanguageToMovie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "_GenreToMovie_B_index";

-- DropIndex
DROP INDEX "_GenreToMovie_AB_unique";

-- DropIndex
DROP INDEX "_LanguageToMovie_B_index";

-- DropIndex
DROP INDEX "_LanguageToMovie_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_GenreToMovie";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_LanguageToMovie";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_MovieGenres" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_MovieGenres_A_fkey" FOREIGN KEY ("A") REFERENCES "Genre" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MovieGenres_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_MovieLanguages" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_MovieLanguages_A_fkey" FOREIGN KEY ("A") REFERENCES "Language" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MovieLanguages_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT 'no description',
    "cover" TEXT,
    "releaseYear" INTEGER NOT NULL
);
INSERT INTO "new_Movie" ("cover", "description", "id", "releaseYear", "title") SELECT "cover", "description", "id", "releaseYear", "title" FROM "Movie";
DROP TABLE "Movie";
ALTER TABLE "new_Movie" RENAME TO "Movie";
CREATE TABLE "new_Video" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quality" TEXT NOT NULL,
    "url" TEXT,
    "movieId" INTEGER NOT NULL,
    CONSTRAINT "Video_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Video" ("id", "movieId", "quality", "url") SELECT "id", "movieId", "quality", "url" FROM "Video";
DROP TABLE "Video";
ALTER TABLE "new_Video" RENAME TO "Video";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_MovieGenres_AB_unique" ON "_MovieGenres"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieGenres_B_index" ON "_MovieGenres"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieLanguages_AB_unique" ON "_MovieLanguages"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieLanguages_B_index" ON "_MovieLanguages"("B");
