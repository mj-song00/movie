/*
  Warnings:

  - You are about to drop the column `directorId` on the `Movie` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_directorId_fkey";

-- AlterTable
ALTER TABLE "Director" ADD COLUMN     "movieId" INTEGER;

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "directorId";

-- AddForeignKey
ALTER TABLE "Director" ADD CONSTRAINT "Director_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE SET NULL ON UPDATE CASCADE;
