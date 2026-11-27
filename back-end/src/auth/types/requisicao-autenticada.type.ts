import { funcaoUsuario } from 'src/generated/prisma/enums';

export type RequisicaoAutenticada = {
  user: {
    id: number;
    funcao: funcaoUsuario;
  };
};