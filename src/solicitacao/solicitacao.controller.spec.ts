jest.mock('@nestjs/passport', () => ({
  AuthGuard: () => class {},
}));

import { Test, TestingModule } from '@nestjs/testing';
import { SolicitacaoController } from './solicitacao.controller';
import { SolicitacaoService } from './solicitacao.service';

describe('SolicitacaoController', () => {
  let controller: SolicitacaoController;
  const solicitacoesService = {
    listar: jest.fn().mockReturnValue([]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitacaoController],
      providers: [
        {
          provide: SolicitacaoService,
          useValue: solicitacoesService,
        },
      ],
    }).compile();

    controller = module.get<SolicitacaoController>(SolicitacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('returns the solicitations from the service', () => {
    expect(controller.listar()).toEqual([]);
    expect(solicitacoesService.listar).toHaveBeenCalled();
  });
});
