(() => {
    const API_URL = window.APP_CONFIG.API_URL;
    const token = window.auth.exigirToken();

    if (!token) return;

    const titulo = document.getElementById('tituloSolicitacao');
    const mensagem = document.getElementById('mensagemDetalhesSolicitacao');
    const conteudo = document.getElementById('conteudoDetalhesSolicitacao');
    const descricao = document.getElementById('descricaoSolicitacao');
    const informacoes = document.getElementById('informacoesSolicitacao');
    const botaoFechar = document.getElementById('btnFecharDetalhesSolicitacao');

    if (botaoFechar) {
        botaoFechar.addEventListener('click', () => window.close());
    }

    function mostrarMensagem(tipo, texto) {
        mensagem.className = `alert alert-${tipo}`;
        mensagem.textContent = texto;
    }

    async function requisicao(endpoint) {
        const response = await fetch(`${API_URL}${endpoint}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 401) {
            sessionStorage.removeItem('token');
            window.location.href = 'login.html';
            throw new Error('Sua sessão expirou.');
        }
        if (!response.ok) {
            let erro = 'Não foi possível carregar os detalhes da solicitação.';
            try {
                const corpo = await response.json();
                erro = Array.isArray(corpo.message)
                    ? corpo.message.join(' ')
                    : corpo.message || erro;
            } catch {
                // Mantém a mensagem padrão se a resposta não tiver JSON.
            }
            throw new Error(erro);
        }
        return response.json();
    }

    function formatarData(valor) {
        const data = new Date(valor);
        if (Number.isNaN(data.getTime())) return 'Data indisponível';
        return data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    }

    function formatarHorario(valor) {
        const horario = new Date(valor);
        if (Number.isNaN(horario.getTime())) return 'Horário indisponível';
        return horario.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'UTC',
        });
    }

    function adicionarDetalhe(rotulo, valor) {
        if (valor === null || valor === undefined || valor === '') return;
        const linha = document.createElement('p');
        linha.className = 'card-text mb-2';
        const nome = document.createElement('strong');
        nome.textContent = `${rotulo}: `;
        linha.append(nome, document.createTextNode(String(valor)));
        informacoes.appendChild(linha);
    }

    function renderizarSolicitacao(solicitacao) {
        titulo.textContent = solicitacao.assunto || `Solicitação #${solicitacao.id}`;
        descricao.textContent = solicitacao.descricao || 'Sem descrição informada.';
        informacoes.replaceChildren();
        adicionarDetalhe('Status', solicitacao.status);
        adicionarDetalhe('Disciplina', solicitacao.disciplina?.nome);
        adicionarDetalhe('Código da disciplina', solicitacao.disciplina?.codigo);
        adicionarDetalhe('Aluno', solicitacao.aluno?.nome);
        adicionarDetalhe('Data preferida', formatarData(solicitacao.preferencia_data));
        adicionarDetalhe('Horário preferido', formatarHorario(solicitacao.preferencia_horario));
        adicionarDetalhe('Modalidade preferida', solicitacao.preferencia_modal);
        adicionarDetalhe('Local preferido', solicitacao.preferencia_local);
        conteudo.classList.remove('d-none');
        mensagem.className = 'alert d-none';
        mensagem.textContent = '';
    }

    async function carregarDetalhes() {
        const parametros = new URLSearchParams(window.location.search);
        const id = parametros.get('id');
        if (!id || !/^[1-9]\d*$/.test(id)) {
            mostrarMensagem('danger', 'O identificador da solicitação é inválido.');
            return;
        }
        try {
            const solicitacao = await requisicao(`/solicitacoes/${encodeURIComponent(id)}`);
            renderizarSolicitacao(solicitacao);
        } catch (error) {
            mostrarMensagem('danger', error instanceof Error ? error.message : 'Não foi possível carregar os detalhes da solicitação.');
        }
    }
    document.addEventListener('DOMContentLoaded', carregarDetalhes);
})();