/*
  Warnings:

  - You are about to drop the column `directorId` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `genreId` on the `Movie` table. All the data in the column will be lost.
  - Added the required column `description` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_directorId_fkey";

-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_genreId_fkey";

-- AlterTable
ALTER TABLE "Director" ADD COLUMN     "movieId" INTEGER;

-- AlterTable
ALTER TABLE "Genre" ADD COLUMN     "movieId" INTEGER;

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "directorId",
DROP COLUMN "genreId",
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Play" ADD COLUMN     "movieId" INTEGER;

-- AddForeignKey
ALTER TABLE "Genre" ADD CONSTRAINT "Genre_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Director" ADD CONSTRAINT "Director_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Play" ADD CONSTRAINT "Play_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE SET NULL ON UPDATE CASCADE;
