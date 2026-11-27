-- AlterTable
ALTER TABLE "Usuario_Disciplina" ADD COLUMN     "ativo" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Participante_Monitoria" (
    "monitoria_id" INTEGER NOT NULL,
    "aluno_id" INTEGER NOT NULL,
    "criado_em" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "Participante_Monitoria_pkey" PRIMARY KEY ("monitoria_id","aluno_id")
);

-- CreateIndex
CREATE INDEX "Participante_Monitoria_aluno_id_idx" ON "Participante_Monitoria"("aluno_id");

-- AddForeignKey
ALTER TABLE "Participante_Monitoria" ADD CONSTRAINT "Participante_Monitoria_monitoria_id_fkey" FOREIGN KEY ("monitoria_id") REFERENCES "Monitoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participante_Monitoria" ADD CONSTRAINT "Participante_Monitoria_aluno_id_fkey" FOREIGN KEY ("aluno_id") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
