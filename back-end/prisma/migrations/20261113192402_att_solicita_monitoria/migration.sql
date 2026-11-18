/*
  Warnings:

  - The values [Concluida] on the enum `statusSolicit` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `horario_fim` to the `Monitoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horario_inicio` to the `Monitoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Monitoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preferencia_horario` to the `Solicitacoes` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "statusMonitor" AS ENUM ('Marcada', 'Concluida', 'Cancelada');

-- AlterEnum
ALTER TYPE "modalidadePref" ADD VALUE 'Nenhuma';

-- AlterEnum
BEGIN;
CREATE TYPE "statusSolicit_new" AS ENUM ('Pendente', 'Aceita');
ALTER TABLE "Solicitacoes" ALTER COLUMN "status" TYPE "statusSolicit_new" USING ("status"::text::"statusSolicit_new");
ALTER TYPE "statusSolicit" RENAME TO "statusSolicit_old";
ALTER TYPE "statusSolicit_new" RENAME TO "statusSolicit";
DROP TYPE "public"."statusSolicit_old";
COMMIT;

-- AlterTable
ALTER TABLE "Monitoria" ADD COLUMN     "horario_fim" TIME NOT NULL,
ADD COLUMN     "horario_inicio" TIME NOT NULL,
ADD COLUMN     "justificativa_cancel" VARCHAR(300),
ADD COLUMN     "status" "statusMonitor" NOT NULL;

-- AlterTable
ALTER TABLE "Solicitacoes" ADD COLUMN     "preferencia_horario" TIME NOT NULL,
ALTER COLUMN "descricao" DROP NOT NULL,
ALTER COLUMN "preferencia_data" SET DATA TYPE DATE,
ALTER COLUMN "preferencia_local" DROP NOT NULL;
