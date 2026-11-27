(() => {
    const API_URL = window.APP_CONFIG.API_URL;
    const token = window.auth.exigirToken();

    if (!token) return;

    const titulo = document.getElementById('tituloMonitoria');
    const mensagem = document.getElementById('mensagemDetalhesMonitoria');
    const conteudo = document.getElementById('conteudoDetalhesMonitoria');
    const descricao = document.getElementById('descricaoMonitoria');
    const informacoes = document.getElementById('informacoesMonitoria');
    const linkContainer = document.getElementById('linkMonitoria');
    const botaoFechar = document.getElementById('btnFecharDetalhesMonitoria');

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
            let erro = 'Não foi possível carregar os detalhes da monitoria.';
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
        if (Number.isNaN(horario.getTime())) return '--:--';
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

    function renderizarLink(valor) {
        linkContainer.replaceChildren();
        if (!valor) return;
        const linha = document.createElement('p');
        linha.className = 'card-text mb-0';
        const rotulo = document.createElement('strong');
        rotulo.textContent = 'Link: ';
        linha.appendChild(rotulo);
        let url;
        try {
            url = new URL(valor);
        } catch {
            linha.appendChild(document.createTextNode('Link inválido.'));
            linkContainer.appendChild(linha);
            linkContainer.classList.remove('d-none');
            return;
        }
        if (!['http:', 'https:'].includes(url.protocol)) {
            linha.appendChild(document.createTextNode('Link inválido.'));
            linkContainer.appendChild(linha);
            linkContainer.classList.remove('d-none');
            return;
        }
        const link = document.createElement('a');
        link.href = url.href;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Acessar monitoria';
        linha.appendChild(link);
        linkContainer.appendChild(linha);
        linkContainer.classList.remove('d-none');
    }

    function renderizarMonitoria(monitoria) {
        titulo.textContent = monitoria.solicitacao?.assunto || `Monitoria #${monitoria.id}`;
        descricao.textContent = monitoria.solicitacao?.descricao || 'Sem descrição informada.';
        informacoes.replaceChildren();
        adicionarDetalhe('Disciplina', monitoria.solicitacao?.disciplina?.nome);
        adicionarDetalhe('Código da disciplina', monitoria.solicitacao?.disciplina?.codigo);
        adicionarDetalhe('Aluno', monitoria.solicitacao?.aluno?.nome);
        adicionarDetalhe('Monitor', monitoria.monitor?.nome);
        adicionarDetalhe('Status', monitoria.status);
        adicionarDetalhe('Data', formatarData(monitoria.data));
        adicionarDetalhe('Horário', `${formatarHorario(monitoria.horario_inicio)} - ${formatarHorario(monitoria.horario_fim)}`);
        adicionarDetalhe('Modalidade', monitoria.modalidade);
        adicionarDetalhe('Local', monitoria.local);
        if (typeof monitoria.participantes_ativos === 'number' && typeof monitoria.limiteParticipantes === 'number'
        ) {
            adicionarDetalhe('Participantes', `${monitoria.participantes_ativos} / ${monitoria.limiteParticipantes}`);
        }
        if (monitoria.status === 'Cancelada') {
            adicionarDetalhe('Justificativa do cancelamento', monitoria.justificativa_cancel);
        }
        if (monitoria.modalidade === 'Online') {
            renderizarLink(monitoria.link);
        }
        conteudo.classList.remove('d-none');
        mensagem.className = 'alert d-none';
        mensagem.textContent = '';
    }

    async function buscarMonitoria(id, origem) {
        if (origem === 'minhas') {
            return requisicao(`/monitorias/${encodeURIComponent(id)}`);
        }
        if (origem === 'disponiveis') {
            const monitorias = await requisicao('/monitorias/disponiveis');
            const monitoria = Array.isArray(monitorias)
                ? monitorias.find((item) => String(item.id) === id)
                : null;
            if (!monitoria) {
                throw new Error('Esta monitoria não está mais disponível.');
            }
            return monitoria;
        }
        throw new Error('A origem da monitoria não é válida.');
    }

    async function carregarDetalhes() {
        const parametros = new URLSearchParams(window.location.search);
        const id = parametros.get('id');
        const origem = parametros.get('origem');
        if (!id || !/^[1-9]\d*$/.test(id)) {
            mostrarMensagem('danger', 'O identificador da monitoria é inválido.');
            return;
        }
        try {
            const monitoria = await buscarMonitoria(id, origem);
            renderizarMonitoria(monitoria);
        } catch (error) {
            mostrarMensagem('danger', error instanceof Error ? error.message : 'Não foi possível carregar os detalhes da monitoria.');
        }
    }

    document.addEventListener('DOMContentLoaded', carregarDetalhes);
})();