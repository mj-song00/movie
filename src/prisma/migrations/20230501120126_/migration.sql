-- CreateTable
CREATE TABLE "Play" (
    "id" SERIAL NOT NULL,
    "actorId" INTEGER NOT NULL,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "Play_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Play" ADD CONSTRAINT "Play_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "Actor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Play" ADD CONSTRAINT "Play_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
