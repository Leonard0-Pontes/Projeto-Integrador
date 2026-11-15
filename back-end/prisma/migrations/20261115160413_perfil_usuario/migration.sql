/*
  Warnings:

  - A unique constraint covering the columns `[usuario_id,disciplina_id]` on the table `Usuario_Disciplina` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Usuario_Disciplina_usuario_id_disciplina_id_key" ON "Usuario_Disciplina"("usuario_id", "disciplina_id");
