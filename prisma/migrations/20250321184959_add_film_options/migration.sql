/*
  Warnings:

  - You are about to drop the `Movie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Video` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MovieGenres` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MovieLanguages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Genre_name_key";

-- DropIndex
DROP INDEX "Language_name_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Movie";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Video";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_MovieGenres";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_MovieLanguages";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Cast" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "photo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FilmLanguages" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_FilmLanguages_A_fkey" FOREIGN KEY ("A") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_FilmLanguages_B_fkey" FOREIGN KEY ("B") REFERENCES "Language" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_FilmGenres" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_FilmGenres_A_fkey" FOREIGN KEY ("A") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_FilmGenres_B_fkey" FOREIGN KEY ("B") REFERENCES "Genre" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_FilmCast" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_FilmCast_A_fkey" FOREIGN KEY ("A") REFERENCES "Cast" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_FilmCast_B_fkey" FOREIGN KEY ("B") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_FilmLanguages_AB_unique" ON "_FilmLanguages"("A", "B");

-- CreateIndex
CREATE INDEX "_FilmLanguages_B_index" ON "_FilmLanguages"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FilmGenres_AB_unique" ON "_FilmGenres"("A", "B");

-- CreateIndex
CREATE INDEX "_FilmGenres_B_index" ON "_FilmGenres"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FilmCast_AB_unique" ON "_FilmCast"("A", "B");

-- CreateIndex
CREATE INDEX "_FilmCast_B_index" ON "_FilmCast"("B");
