-- CreateEnum
CREATE TYPE "funcaoUsuario" AS ENUM ('Aluno', 'Monitor');

-- CreateEnum
CREATE TYPE "modalidadePref" AS ENUM ('Presencial', 'Online');

-- CreateEnum
CREATE TYPE "statusSolicit" AS ENUM ('Pendente', 'Aceita', 'Concluida');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "senha_hash" VARCHAR(100) NOT NULL,
    "funcao" "funcaoUsuario" NOT NULL,
    "curso" VARCHAR(50) NOT NULL,
    "periodo" INTEGER NOT NULL,
    "is_admin" BOOLEAN NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "criado_em" TIMESTAMPTZ NOT NULL,
    "atualizado_em" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disciplinas" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "codigo" VARCHAR(50) NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "criado_em" TIMESTAMPTZ NOT NULL,
    "atualizado_em" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "Disciplinas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Solicitacoes" (
    "id" SERIAL NOT NULL,
    "aluno_id" INTEGER NOT NULL,
    "disciplina_id" INTEGER NOT NULL,
    "assunto" VARCHAR(100) NOT NULL,
    "descricao" VARCHAR(500) NOT NULL,
    "preferencia_data" TIMESTAMPTZ NOT NULL,
    "preferencia_modal" "modalidadePref" NOT NULL,
    "preferencia_local" VARCHAR(100) NOT NULL,
    "status" "statusSolicit" NOT NULL,
    "criado_em" TIMESTAMPTZ NOT NULL,
    "atualizado_em" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "Solicitacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Monitoria" (
    "id" SERIAL NOT NULL,
    "solicitacao_id" INTEGER NOT NULL,
    "monitor_id" INTEGER NOT NULL,
    "data" TIMESTAMPTZ NOT NULL,
    "modalidade" "modalidadePref" NOT NULL,
    "local" VARCHAR(250) NOT NULL,
    "link" TEXT,
    "criado_em" TIMESTAMPTZ NOT NULL,
    "atualizado_em" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "Monitoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario_Disciplina" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "disciplina_id" INTEGER NOT NULL,
    "funcao" "funcaoUsuario" NOT NULL,
    "criado_em" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "Usuario_Disciplina_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Solicitacoes" ADD CONSTRAINT "Solicitacoes_aluno_id_fkey" FOREIGN KEY ("aluno_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solicitacoes" ADD CONSTRAINT "Solicitacoes_disciplina_id_fkey" FOREIGN KEY ("disciplina_id") REFERENCES "Disciplinas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Monitoria" ADD CONSTRAINT "Monitoria_solicitacao_id_fkey" FOREIGN KEY ("solicitacao_id") REFERENCES "Solicitacoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Monitoria" ADD CONSTRAINT "Monitoria_monitor_id_fkey" FOREIGN KEY ("monitor_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario_Disciplina" ADD CONSTRAINT "Usuario_Disciplina_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario_Disciplina" ADD CONSTRAINT "Usuario_Disciplina_disciplina_id_fkey" FOREIGN KEY ("disciplina_id") REFERENCES "Disciplinas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
