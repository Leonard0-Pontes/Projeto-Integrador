/*
  Warnings:

  - Changed the type of `periodo` on the `Usuario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "periodos" AS ENUM ('Primeiro', 'Segundo', 'Terceiro', 'Quarto', 'Quinto', 'Sexto');

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "periodo",
ADD COLUMN     "periodo" "periodos" NOT NULL;
