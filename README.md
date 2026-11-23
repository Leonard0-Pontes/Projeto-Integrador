# Gerenciador de Monitoria

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

Aplicação web desenvolvida para facilitar a **solicitação, oferta, agendamento e acompanhamento de monitorias acadêmicas** entre estudantes, incentivando a colaboração entre pares e centralizando a organização dos atendimentos.

> Projeto desenvolvido no âmbito da disciplina **Seminário de Orientação de Projeto Integrador I** — Curso Superior de Tecnologia em Sistemas para Internet (IFRN — Campus Currais Novos).

---

## Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Perfis de Usuário e Regras de Negócio](#-perfis-de-usuário-e-regras-de-negócio)
- [Escopo do MVP](#-escopo-do-mvp)
- [Ciclo de Vida da Solicitação](#-ciclo-de-vida-da-solicitação)
- [Arquitetura do Sistema](#-arquitetura-do-sistema)
- [Modelagem do Banco de Dados](#-modelagem-do-banco-de-dados)
- [Tecnologias e Ferramentas](#-tecnologias-e-ferramentas)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Documentação da API (Swagger)](#-documentação-da-api-swagger)
- [Testes Automatizados](#-testes-automatizados)
- [Autores](#-autores)

---

## Sobre o Projeto

No ambiente acadêmico, a busca por auxílio em disciplinas frequentemente ocorre de forma informal e descentralizada, dificultando o acompanhamento de horários, locais e histórico de atendimentos.

O **Gerenciador de Monitoria** resolve esse problema oferecendo uma plataforma única onde estudantes podem:
- Registrar pedidos de monitoria informando disciplina, assunto, descrição da dúvida, data/horário preferidos e modalidade;
- Visualizar solicitações abertas nas disciplinas em que possuem domínio e disponibilidade para atuar como monitores;
- Agendar encontros presenciais (informando sala/laboratório) ou remotos (informando link da reunião);
- Acompanhar sua agenda de atendimentos futuros e histórico de monitorias concluídas ou canceladas.

---

## Perfis de Usuário e Regras de Negócio

O sistema contempla três perfis principais com **dualidade de atuação** entre estudantes:

| Perfil | Responsabilidades Principais |
| :--- | :--- |
| **Aluno** | Realizar auto-cadastro e login, editar perfil, consultar disciplinas ativas, criar/editar/cancelar solicitações pendentes, consultar agenda e histórico e cancelar monitorias agendadas. |
| **Monitor** *(herda de Aluno)* | Associar-se às disciplinas em que oferece auxílio, visualizar solicitações pendentes dessas disciplinas, aceitar solicitações e realizar o agendamento oficial, alterar agendamentos e concluir monitorias realizadas. |
| **Administrador** | Visualizar e gerenciar usuários (ativar/desativar), cadastrar e editar disciplinas, filtrar globalmente todas as solicitações e monitorias e consultar indicadores gerais da plataforma. |

### Regras de Negócio Essenciais
- **Colaboração Mútua:** Um mesmo estudante pode solicitar monitoria em uma disciplina (ex.: *Cálculo*) e, simultaneamente, atuar como monitor em outra (ex.: *Programação*).
- **Privacidade e Visibilidade:** Apenas o **Administrador** pode visualizar todas as solicitações da plataforma; demais usuários visualizam exclusivamente as solicitações e monitorias das quais participam como aluno solicitante ou monitor.
- **Imutabilidade Pós-Aceite:** Solicitações já aceitas por um monitor não podem mais ser editadas pelo aluno solicitante. Monitorias marcadas como `CONCLUIDA` não podem ter seu estado alterado novamente.

---

## Escopo do MVP

### Funcionalidades Incluídas (MVP)
- Cadastro de usuários (com senha armazenada via hash criptográfico) e autenticação via **JWT + Passport**;
- Gestão de perfil pessoal com curso, período e disciplinas vinculadas;
- Cadastro e listagem de disciplinas ativas;
- Abertura, edição (enquanto pendente) e cancelamento de solicitações de monitoria;
- Aceite de solicitação por monitor habilitado com agendamento obrigatório (data, horário, modalidade e local ou link);
- Consulta de **Minhas Solicitações**, **Minhas Monitorias** e **Agenda**;
- Painel administrativo básico para controle de usuários, disciplinas e acompanhamento global.

### Fora do Escopo Inicial
- Sistema de pagamentos;
- Chat em tempo real ou videoconferência própria embarcada;
- Aplicativo mobile nativo;
- Sistema complexo de avaliação/ranking ou recomendações por IA;
- Integração com Google Calendar, notificações por SMS ou sistemas acadêmicos institucionais (ex.: SUAP).

---

## Ciclo de Vida da Solicitação

Cada solicitação de monitoria segue um fluxo controlado de estados:

```text
  [ PENDENTE ] ───────► [ ACEITA / AGENDADA ] ───────► [ CONCLUÍDA ]
       │                          │
       └──────► [ CANCELADA ] ◄───┘
```

- **`PENDENTE`**: Solicitação criada pelo aluno aguardando aceite de um monitor vinculado à disciplina.
- **`ACEITA`**: Solicitação assumida por um monitor com agendamento oficial registrado na tabela `monitoria`.
- **`CONCLUIDA`**: Atendimento realizado e finalizado pelo monitor.
- **`CANCELADA`**: Solicitação ou agendamento cancelado antes da conclusão.

---

## Arquitetura do Sistema

A aplicação adota uma **arquitetura cliente-servidor em camadas**, isolada em contêineres **Docker**, garantindo baixo acoplamento e separação clara de responsabilidades:

```text
┌──────────────────────────────────────────────────────────────────────┐
│                             DOCKER                                   │
│                                                                      │
│  ┌─────────────────────────┐       ┌──────────────────────────────┐  │
│  │        FRONTEND         │       │           BACKEND            │  │
│  │  (HTML / CSS / JS /     │ HTTP  │   (Node.js / TypeScript /    │  │
│  │       Bootstrap)        │ ────► │           NestJS)            │  │
│  │                         │ REST  │                              │  │
│  │ • Páginas               │       │ • Controllers                │  │
│  │   Login, Dashboard,     │       │   Auth, Usuario, Disciplina, │  │
│  │   Solicitações, Perfil, │       │   Solicitacao, Monitoria     │  │
│  │   AgendaMonitoria       │       │              │               │  │
│  │ • Componentes           │       │              ▼               │  │
│  │   Navbar, Cards,        │       │ • Services (Regras de Negócio│  │
│  │   Formulários, Seções   │       │              │               │  │
│  │ • Serviços/API          │       │              ▼               │  │
│  │   HttpClient Fetch      │       │ • Repositories (Prisma ORM)  │  │
│  └─────────────────────────┘       └──────────────┬───────────────┘  │
│                                                   │                  │
│                                                   ▼                  │
│                                    ┌──────────────────────────────┐  │
│                                    │     BANCO DE DADOS (SQL)     │  │
│                                    │         PostgreSQL           │  │
│                                    └──────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────┘
```

### Organização dos Módulos
- **Frontend (`Páginas`, `Componentes`, `Serviços/API`)**: Interface web responsiva com clientes HTTP dedicados (`authAPI`, `solicitacaoAPI`, `disciplinaAPI`, `monitoriaAPI`) centralizados em `HttpClient Fetch`.
- **Backend (`Controllers`, `Services`, `Repositories`)**: Padrão *Repository* implementado em NestJS, onde os controladores expõem os endpoints REST, os serviços executam as regras de negócio e os repositórios abstraem o acesso ao banco via Prisma ORM.

---

## Modelagem do Banco de Dados

O banco relacional em **PostgreSQL** é composto por cinco entidades principais e três tipos enumerados:

- **`usuario`**: Armazena dados cadastrais (`id`, `nome`, `email`, `senha_hash`, `curso`, `periodo`, `is_admin`, `ativo`, `criado_em`, `atualizado_em`).
- **`diciplinas`**: Catálogo de disciplinas (`id`, `nome`, `codigo`, `ativo`, `criado_em`, `atualizado_em`).
- **`USUARIO_DICIPLINA`**: Tabela associativa `N:N` com chave composta `(id_usuario, id_disciplina)` e atributo `tipo` (`ALUNO`, `MONITOR`, `PROFESSOR`).
- **`solicitacoes`**: Demandas abertas pelos alunos (`id`, `aluno_id`, `disciplina_id`, `assunto`, `descricao`, `preferencia_data_hora`, `modalidade_preferida`, `local_preferido`, `status`, `criado_em`, `atualizado_em`).
- **`monitoria`**: Agendamentos confirmados com relação `1:1` para `solicitacoes` (`id`, `solicitacao_id`, `monitor_id`, `data`, `modalidade`, `local`, `link`, `criado_em`, `atualizado_em`).

### Enumerações (`ENUM`)
- **`tipo_vinculo_diciplina`**: `ALUNO` | `MONITOR` | `PROFESSOR`
- **`modalidade_monitoria_enum`**: `PRESENCIAL` | `REMOTO` | `HIBRIDO`
- **`status_solicitacoes_enum`**: `PENDENTE` | `ACEITA` | `CANCELADA` | `CONCLUIDA`

---

## Tecnologias e Ferramentas

| Camada / Finalidade | Ferramenta / Tecnologia |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (ES6+), Bootstrap, Fetch API |
| **Backend** | Node.js, TypeScript, NestJS |
| **Banco de Dados e ORM** | PostgreSQL, Prisma ORM (Migrations) |
| **Segurança e Sessão** | JWT (JSON Web Token), Passport, Cookies, Cache |
| **Documentação da API** | Swagger (OpenAPI) |
| **Qualidade e Testes** | Lint, Jest (Testes de API), Cypress (Testes E2E) |
| **Infraestrutura e Deploy** | Docker, Docker Compose, Git/GitHub, Render |

---

## Como Executar o Projeto

### Pré-requisitos
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) *(recomendado)*
- [Node.js](https://nodejs.org/) (v18 ou superior, caso execute fora do Docker)

### 1. Clonar o repositório
```bash
git clone https://github.com/Leonard0-Pontes/Projeto-Integrador.git
cd Projeto-Integrador
```

### 2. Configurar variáveis de ambiente
Crie um arquivo `.env` na raiz (ou no diretório do backend, conforme a estrutura de pastas) tomando como base o `.env.example`:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/gerenciador_monitoria?schema=public"
JWT_SECRET="sua_chave_secreta_jwt"
PORT=3000
```

### 3. Executar com Docker (Recomendado)
Suba todos os serviços (Frontend, Backend e PostgreSQL) com um único comando:

```bash
docker-compose up --build -d
```

Caso precise aplicar as migrations do Prisma no contêiner do backend:
```bash
docker-compose exec backend npx prisma migrate deploy
```

### 4. Executar localmente (sem Docker)
```bash
# Instalar dependências
npm install

# Executar migrations do banco de dados PostgreSQL
npx prisma migrate dev

# Iniciar o servidor em modo de desenvolvimento
npm run start:dev
```

---

## Documentação da API (Swagger)

Com a aplicação em execução, a documentação interativa dos endpoints REST pode ser acessada diretamente no navegador através da rota do Swagger:

```text
http://localhost:3000/api
```

Por meio dessa interface é possível inspecionar os schemas de requisição/resposta e testar as rotas autenticadas utilizando o token JWT (`Bearer Token`).

---

## Testes Automatizados

O projeto conta com verificação estática de código e suítes de testes automatizados:

```bash
# Análise estática de código (Lint)
npm run lint

# Testes unitários e de integração da API (Jest)
npm run test

# Testes ponta a ponta da interface web (Cypress)
npx cypress open
```

---

## Autores

Desenvolvido pela equipe do **Projeto Integrador** — Curso Superior de Tecnologia em Sistemas para Internet (IFRN — Campus Currais Novos):

- **Leonardo Pontes** — [@Leonard0-Pontes](https://github.com/Leonard0-Pontes)
- **Ângelo Gabriel** — [@V0idNight](https://github.com/V0idNight)
- *(Adicione aqui os demais integrantes da equipe)*

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos no Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte (IFRN).
