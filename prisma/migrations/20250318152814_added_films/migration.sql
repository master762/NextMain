-- CreateTable
CREATE TABLE "Film" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "video480p" TEXT,
    "video720p" TEXT,
    "video1080p" TEXT,
    "releaseYear" INTEGER,
    "languageId" INTEGER,
    "directorId" INTEGER,
    "musicId" INTEGER,
    CONSTRAINT "Film_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Film_directorId_fkey" FOREIGN KEY ("directorId") REFERENCES "Director" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Film_musicId_fkey" FOREIGN KEY ("musicId") REFERENCES "Music" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cast" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rating" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "filmId" INTEGER NOT NULL,
    CONSTRAINT "Review_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Language" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "language" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "genre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Director" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Music" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "composer" TEXT NOT NULL
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

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "role" TEXT NOT NULL DEFAULT 'user',
    "nickname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "image" TEXT NOT NULL DEFAULT '/userAvatars/defaultAvatar.png'
);
INSERT INTO "new_User" ("age", "country", "email", "id", "nickname", "password", "role") SELECT "age", "country", "email", "id", "nickname", "password", "role" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Film_name_key" ON "Film"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Language_language_key" ON "Language"("language");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_genre_key" ON "Genre"("genre");

-- CreateIndex
CREATE UNIQUE INDEX "_FilmGenres_AB_unique" ON "_FilmGenres"("A", "B");

-- CreateIndex
CREATE INDEX "_FilmGenres_B_index" ON "_FilmGenres"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FilmCast_AB_unique" ON "_FilmCast"("A", "B");

-- CreateIndex
CREATE INDEX "_FilmCast_B_index" ON "_FilmCast"("B");
