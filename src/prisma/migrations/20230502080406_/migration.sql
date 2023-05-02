/*
  Warnings:

  - You are about to drop the column `movieId` on the `Director` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Director" DROP CONSTRAINT "Director_movieId_fkey";

-- AlterTable
ALTER TABLE "Director" DROP COLUMN "movieId";

-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "directorId" INTEGER;

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_directorId_fkey" FOREIGN KEY ("directorId") REFERENCES "Director"("id") ON DELETE SET NULL ON UPDATE CASCADE;
