/*
  Warnings:

  - You are about to drop the column `actorId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `characterId` on the `Movie` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_actorId_fkey";

-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_characterId_fkey";

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "actorId";

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "characterId";
