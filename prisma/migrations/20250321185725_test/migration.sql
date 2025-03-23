/*
  Warnings:

  - You are about to drop the `Cast` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Genre` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Language` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FilmCast` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FilmGenres` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FilmLanguages` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cast` to the `Film` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genres` to the `Film` table without a default value. This is not possible if the table is not empty.
  - Added the required column `languages` to the `Film` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_FilmCast_B_index";

-- DropIndex
DROP INDEX "_FilmCast_AB_unique";

-- DropIndex
DROP INDEX "_FilmGenres_B_index";

-- DropIndex
DROP INDEX "_FilmGenres_AB_unique";

-- DropIndex
DROP INDEX "_FilmLanguages_B_index";

-- DropIndex
DROP INDEX "_FilmLanguages_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Cast";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Genre";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Language";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_FilmCast";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_FilmGenres";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_FilmLanguages";
PRAGMA foreign_keys=on;

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
    "video" TEXT NOT NULL,
    "languages" TEXT NOT NULL,
    "genres" TEXT NOT NULL,
    "cast" TEXT NOT NULL
);
INSERT INTO "new_Film" ("cover", "description", "id", "releaseYear", "slug", "title", "video") SELECT "cover", "description", "id", "releaseYear", "slug", "title", "video" FROM "Film";
DROP TABLE "Film";
ALTER TABLE "new_Film" RENAME TO "Film";
CREATE UNIQUE INDEX "Film_slug_key" ON "Film"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
