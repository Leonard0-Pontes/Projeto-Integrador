-- AlterTable
ALTER TABLE "Disciplinas" ALTER COLUMN "ativo" SET DEFAULT true;

-- AlterTable
ALTER TABLE "Monitoria" ALTER COLUMN "status" SET DEFAULT 'Marcada';

-- AlterTable
ALTER TABLE "Solicitacoes" ALTER COLUMN "status" SET DEFAULT 'Pendente';

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "is_admin" SET DEFAULT false,
ALTER COLUMN "ativo" SET DEFAULT true;
