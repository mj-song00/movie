/*
  Warnings:

  - You are about to drop the column `playId` on the `Character` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_playId_fkey";

-- DropForeignKey
ALTER TABLE "Play" DROP CONSTRAINT "Play_actorId_fkey";

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "playId";

-- AlterTable
ALTER TABLE "Play" ADD COLUMN     "characterId" INTEGER,
ALTER COLUMN "actorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Play" ADD CONSTRAINT "Play_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "Actor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Play" ADD CONSTRAINT "Play_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE SET NULL ON UPDATE CASCADE;
