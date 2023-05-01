/*
  Warnings:

  - You are about to drop the column `characterId` on the `Play` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Play" DROP CONSTRAINT "Play_characterId_fkey";

-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "playId" INTEGER;

-- AlterTable
ALTER TABLE "Play" DROP COLUMN "characterId";

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_playId_fkey" FOREIGN KEY ("playId") REFERENCES "Play"("id") ON DELETE SET NULL ON UPDATE CASCADE;
