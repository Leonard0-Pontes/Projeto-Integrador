# Lista de Tarefas — Gerenciador de Monitoria (Projeto Integrador IFRN)


## Front-end

### Telas
- [ ] Tela de **Login** (E-mail e senha)
- [ ] Tela de **Cadastro** 
  - [ ] Campos: Nome, e-mail, senha, curso, período, disciplinas de interesse
- [ ] Tela **Home / Dashboard**
  - [ ] Listagem de solicitações pendentes (para monitores)
  - [ ] Atalhos para "Minhas Monitorias" e "Minhas Solicitações"
- [ ] Tela de **Perfil do Usuário**
  - [ ] Exibição de dados (Nome, Curso, Período)
  - [ ] Listagem das disciplinas que o usuário oferece monitoria
  - [ ] Botão de Logout
- [ ] Tela de **Solicitação de Monitoria** (Aluno)
  - [ ] Formulário: Disciplina, assunto, descrição da dificuldade, data/horário de preferência, modalidade (Presencial/Online), local/link
- [ ] Tela de **Oferta / Detalhes da Solicitação** (Monitor)
  - [ ] Visualizar detalhes da solicitação
  - [ ] Botão "Aceitar monitoria"
- [ ] Tela de **Agendamento**
  - [ ] Definição de local/link (Meet) e confirmação de data/horário
- [ ] Tela de **Consulta de Monitorias**
  - [ ] Tabela "Minhas Solicitações" (com status)
  - [ ] Tabela "Minhas Monitorias" (como monitor)
- [ ] Tela de **Administração** (Admin)
  - [ ] CRUD de usuários
  - [ ] CRUD de disciplinas
  - [ ] Visualização geral de solicitações e monitorias
  - [ ] Dashboard do sistemas

### Acessibilidade
- [ ] Adicionar atributos `alt` em todas as imagens e ícones
- [ ] Garantir contraste adequado de cores (WCAG AA)
- [ ] Navegação completa por teclado
- [ ] Uso correto de tags semânticas (`<header>`, `<main>`, `<nav>`)
- [ ] `aria-label` em botões de ação (ex: ícones de editar/excluir)
- [ ] Labels associados aos inputs no formulário de solicitação
- [ ] Mensagens de erro e de sucesso acessíveis (via `aria-live`)

### Responsividade
- [ ] Layout mobile-first (essencial para alunos acessando via celular)
- [ ] Tabelas de monitorias com scroll horizontal controlado em telas pequenas
- [ ] Área de toque mínima de 44x44px para botões (ex: botão "Aceitar monitoria")

### UI/UX
- [ ] Definir paleta de cores e tipografia do projeto
- [ ] Criar protótipo de baixa fidelidade
- [ ] Feedback visual claro para os Status: `PENDENTE`, `ACEITA`, `AGENDADA`, `CONCLUÍDA`, `CANCELADA`
- [ ] Empty states (ex: "Você ainda não tem solicitações")

---

## Back-end

### Regras de Negócio
- [ ] Um mesmo usuário pode ser **Aluno** e **Monitor** simultaneamente
- [ ] Um monitor não pode aceitar duas solicitações para o mesmo dia/horário
- [ ] Um aluno não pode ter duas monitorias agendadas para o mesmo horário
- [ ] Fluxo de status da solicitação: `PENDENTE` -> `ACEITA` -> `AGENDADA` -> `CONCLUÍDA` ou `CANCELADA`
- [ ] Apenas o monitor pode aceitar a solicitação
- [ ] O sistema deve registrar o histórico de alteração de status
- [ ] Administrador pode remover usuários e disciplinas (soft delete)
- [ ] Não permitir agendamento para datas passadas

### Validação de Dados
- [ ] Validar formato de e-mail no cadastro
- [ ] Validar força da senha
- [ ] Validar campos obrigatórios na solicitação de monitoria (disciplina, assunto, data, horário)
- [ ] Sanitizar entradas contra XSS/SQL Injection
- [ ] Retornar mensagens de erro padronizadas via API

### Autenticação e Autorização
- [ ] Implementar autenticação via JWT (ou Spring Security Session)
- [ ] Hash de senha com BCrypt
- [ ] Middleware de autorização para rotas de Admin
- [ ] Middleware para garantir que apenas o aluno dono da solicitação possa cancelá-la

### API REST / Endpoints
- [ ] `POST /auth/login` e `/auth/register`
- [ ] `GET /users/{id}` e `PUT /users/{id}`
- [ ] `GET /disciplinas` e `POST /disciplinas` (Admin)
- [ ] `POST /solicitacoes` (Aluno)
- [ ] `GET /solicitacoes` (Monitor visualiza pendentes)
- [ ] `PUT /solicitacoes/{id}/aceitar` (Monitor)
- [ ] `PUT /solicitacoes/{id}/agendar`
- [ ] `PUT /solicitacoes/{id}/cancelar`
- [ ] Documentar API com Swagger/OpenAPI

### Testes (Foco em Qualidade)
- [ ] Testes unitários para a máquina de estados (Status da Monitoria)
- [ ] Teste de integração do fluxo completo (Aluno cria -> Monitor aceita -> Agendamento)
- [ ] Teste de concorrência/carga (Referente ao RNF01 do relatório: tempo de resposta < 2s para 50 usuários)
- [ ] teste de interface

---

## Banco de Dados (PostgreSQL)

- [ ] Modelagem do DER (Diagrama Entidade-Relacionamento)
- [ ] Tabela `usuarios` (id, nome, email, senha_hash, curso, periodo)
- [ ] Tabela `disciplinas` (id, nome)
- [ ] Tabela `usuario_disciplina` (Tabela associativa para disciplinas que o usuário oferece monitoria)
- [ ] Tabela `solicitacoes` (id, aluno_id, monitor_id, disciplina_id, assunto, descricao, data_preferencia, hora_preferencia, modalidade, local_link, status)
- [ ] Tabela `agendamentos` ou histórico de status (para rastrear quando mudou de PENDENTE para ACEITA, etc.)
- [ ] Definir chaves primárias e estrangeiras
- [ ] Criar índices para colunas de busca frequente (ex: `status`, `data_preferencia`)
- [ ] Criar migrations versionadas

---

## Documentação (Padrão IFRN)

- [ ] **README.md** no GitHub com instruções de instalação (Docker e ambiente local)
- [ ] **Relatório Técnico (ABNT NBR 10719)**:
  - [ ] Redigir Resumo (150 a 500 palavras)
  - [ ] Redigir Introdução (Problema, Objetivo Geral e Específicos)
  - [ ] Detalhar Materiais e Métodos (Tecnologias justificadas, Técnicas de elicitação, Cronograma)
  - [ ] Documentar Desenvolvimento (Casos de uso detalhados, DER, Arquitetura em camadas)
  - [ ] Escrever Resultados (O que foi entregue, testes aprovados/reprovados)
  - [ ] Escrever Conclusões e Trabalhos Futuros
  - [ ] Formatar Referências
- [ ] Documentação da API (Swagger)
- [ ] Manual do usuário (Aluno/Monitor/Admin)

---

## Infraestrutura e DevOps

- [ ] Configurar `Dockerfile` para o Front-end (React)
- [ ] Configurar `Dockerfile` para o Back-end (Spring Boot)
- [ ] Criar `docker-compose.yml` para subir App + Banco PostgreSQL de uma vez
- [ ] Configurar variáveis de ambiente (`.env.example`)
- [ ] Configurar CI/CD (GitHub Actions) para rodar os testes a cada Pull Request
- [ ] Configurar gestão de tarefas no Trello (Colunas: *A fazer, Em andamento, Em revisão, Concluído*)