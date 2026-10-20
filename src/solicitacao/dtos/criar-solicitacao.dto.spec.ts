import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CriarSolicitacaoDto } from './criar-solicitacao.dto';

describe('CriarSolicitacaoDto', () => {
  it('accepts the supplied solicitation payload', async () => {
    const payload = {
      assunto: 'Dificuldade com trigonometria',
      data_preferida: '2026-10-24',
      horario_preferido: '14:30',
      status: 'pendente',
    };

    const errors = await validate(plainToInstance(CriarSolicitacaoDto, payload));

    expect(errors).toHaveLength(0);
  });

  it('rejects statuses that are not supported', async () => {
    const payload = {
      assunto: 'Dificuldade com trigonometria',
      data_preferida: '2026-10-24',
      horario_preferido: '14:30',
      status: 'aprovada',
    };

    const errors = await validate(plainToInstance(CriarSolicitacaoDto, payload));

    expect(errors.some(({ property }) => property === 'status')).toBe(true);
  });
});
