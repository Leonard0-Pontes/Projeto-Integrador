(() => {
    const API_URL = window.APP_CONFIG.API_URL;
    const token = window.auth.exigirToken();

    if (!token) return;

    const lista = document.getElementById('listaMonitorias');
    const estado = document.getElementById('estadoMonitorias');
    const secaoMinhasMonitorias = document.getElementById('secaoMinhasMonitorias');
    const listaMinhasMonitorias = document.getElementById('listaMinhasMonitorias');
    let estadoMinhasMonitorias = document.getElementById('estadoMinhasMonitorias');

    if (!lista || !estado) return;

    function mostrarEstado(tipo, texto) {
        estado.className = `alert alert-${tipo}`;
        estado.textContent = texto;
    }

    function ocultarEstado() {
        estado.className = 'alert d-none';
        estado.textContent = '';
    }

    function mostrarEstadoMinhas(tipo, texto) {
        if (!estadoMinhasMonitorias) return;
        estadoMinhasMonitorias.className = `alert alert-${tipo}`;
        estadoMinhasMonitorias.textContent = texto;
    }

    function ocultarEstadoMinhas() {
        if (!estadoMinhasMonitorias) return;
        estadoMinhasMonitorias.className = 'alert d-none';
        estadoMinhasMonitorias.textContent = '';
    }

    function lerPayloadToken() {
        try {
            const parte = token.split('.')[1];
            const base64 = parte
                .replace(/-/g, '+')
                .replace(/_/g, '/')
                .padEnd(Math.ceil(parte.length / 4) * 4, '=');
            const bytes = Uint8Array.from(atob(base64), caractere =>
                caractere.charCodeAt(0),
            );
            return JSON.parse(new TextDecoder().decode(bytes));
        } catch {
            throw new Error('Não foi possível identificar o usuário autenticado.');
        }
    }

    let ehMonitor;
    try {
        ehMonitor = lerPayloadToken().funcao === 'Monitor';
    } catch (error) {
        mostrarEstado('danger', error instanceof Error ? error.message : 'Não foi possível identificar o usuário autenticado.');
        return;
    }

    if (ehMonitor) {
        if (!secaoMinhasMonitorias || !listaMinhasMonitorias || !estadoMinhasMonitorias) {
            mostrarEstado('danger', 'Não foi possível exibir suas monitorias.');
            return;
        }
        secaoMinhasMonitorias.classList.remove('d-none');
    }

    async function requisicao(endpoint, opcoes = {}) {
        const response = await fetch(`${API_URL}${endpoint}`, {
            ...opcoes,
            headers: {
                Authorization: `Bearer ${token}`,
                ...opcoes.headers,
            },
        });

        if (response.status === 401) {
            sessionStorage.removeItem('token');
            window.location.href = 'login.html';
            throw new Error('Sua sessão expirou.');
        }

        if (!response.ok) {
            let erro = 'Não foi possível concluir a operação.';
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
        if (response.status === 204) return null;
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

    async function alterarParticipacao(monitoria, entrar, botao) {
        botao.disabled = true;
        try {
            await requisicao(`/monitorias/${monitoria.id}/participantes`, {
                method: entrar ? 'POST' : 'DELETE',
            });
            await carregarMonitorias();
            mostrarEstado('success', entrar ? 'Você entrou na monitoria.' : 'Você saiu da monitoria.');
        } catch (error) {
            botao.disabled = false;
            mostrarEstado('danger', error instanceof Error ? error.message : 'Não foi possível alterar sua participação.');
        }
    }

    async function alterarStatusMonitoria(monitoria, acao, botao) {
        let body;
        if (acao === 'cancelar') {
            const justificativa = window.prompt('Informe a justificativa para cancelar esta monitoria:');
            if (justificativa === null) return;
            if (!justificativa.trim()) {
                mostrarEstadoMinhas('warning', 'Informe uma justificativa para cancelar a monitoria.');
                return;
            }
            if (justificativa.trim().length > 300) {
                mostrarEstadoMinhas('warning', 'A justificativa deve ter no máximo 300 caracteres.');
                return;
            }
            body = JSON.stringify({ justificativa: justificativa.trim() });
        }
        const confirmacao = acao === 'concluir' ? 'Deseja concluir esta monitoria?' : 'Deseja cancelar esta monitoria?';
        if (!window.confirm(confirmacao)) return;
        botao.disabled = true;
        try {
            await requisicao(`/monitorias/${monitoria.id}/${acao}`, {
                method: 'PATCH',
                ...(body
                    ? {
                        headers: { 'Content-Type': 'application/json' },
                        body,
                    }
                    : {}),
            });
            if (await carregarMinhasMonitorias()) {
                mostrarEstadoMinhas('success', acao === 'concluir' ? 'Monitoria concluída.' : 'Monitoria cancelada.');
            }
        } catch (error) {
            botao.disabled = false;
            mostrarEstadoMinhas('danger', error instanceof Error ? error.message : 'Não foi possível atualizar a monitoria.');
        }
    }

    function criarCard(monitoria, minhasMonitorias = false) {
        const coluna = document.createElement('div');
        coluna.className = 'col-12';
        const card = document.createElement('article');
        card.className = 'card';
        const corpo = document.createElement('div');
        corpo.className = 'card-body';
        const cabecalho = document.createElement('div');
        cabecalho.className = 'd-flex flex-wrap justify-content-between align-items-start gap-2';
        const titulo = document.createElement('h2');
        titulo.className = 'h5 card-title mb-0';
        titulo.textContent = monitoria.solicitacao?.assunto || `Monitoria #${monitoria.id}`;
        const status = document.createElement('span');
        status.className = 'badge text-bg-primary';
        status.textContent = monitoria.status || 'Marcada';
        cabecalho.append(titulo, status);
        corpo.appendChild(cabecalho);
        const acoes = document.createElement('div');
        acoes.className = 'd-flex flex-wrap gap-2 mt-3';
        const botaoDetalhes = document.createElement('button');
        botaoDetalhes.type = 'button';
        botaoDetalhes.className = 'btn btn-outline-primary';
        botaoDetalhes.textContent = 'Ver detalhes';
        botaoDetalhes.addEventListener('click', () => {
            const url = new URL('./detalhes-monitoria.html', window.location.href);
            url.searchParams.set('id', String(monitoria.id));
            url.searchParams.set('origem', minhasMonitorias ? 'minhas' : 'disponiveis');
            const janela = window.open(url.href, '_blank', 'popup=yes,width=740,height=620,resizable=yes,scrollbars=yes');
            if (janela) {
                janela.opener = null;
            } else {
                alert('Permita pop-ups para abrir os detalhes da solicitação.');
            }
        });
        acoes.appendChild(botaoDetalhes);
        if (minhasMonitorias && monitoria.status === 'Marcada') {
            const botaoConcluir = document.createElement('button');
            botaoConcluir.type = 'button';
            botaoConcluir.className = 'btn btn-success';
            botaoConcluir.textContent = 'Concluir';
            botaoConcluir.addEventListener('click', () => alterarStatusMonitoria(monitoria, 'concluir', botaoConcluir));
            const botaoCancelar = document.createElement('button');
            botaoCancelar.type = 'button';
            botaoCancelar.className = 'btn btn-outline-danger';
            botaoCancelar.textContent = 'Cancelar';
            botaoCancelar.addEventListener('click', () => alterarStatusMonitoria(monitoria, 'cancelar', botaoCancelar));
            acoes.append(botaoConcluir, botaoCancelar);
        } else if (!minhasMonitorias) {
            const estaInscrito = monitoria.participante_atual === true;
            const lotada = monitoria.participantes_ativos >= monitoria.limiteParticipantes;
            const botaoParticipacao = document.createElement('button');
            botaoParticipacao.type = 'button';
            botaoParticipacao.className = estaInscrito
                ? 'btn btn-outline-danger'
                : 'btn btn-success';
            if (estaInscrito) {
                botaoParticipacao.textContent = 'Sair da monitoria';
                botaoParticipacao.addEventListener('click', () => alterarParticipacao(monitoria, false, botaoParticipacao));
            } else if (lotada) {
                botaoParticipacao.textContent = 'Vagas esgotadas';
                botaoParticipacao.disabled = true;
            } else {
                botaoParticipacao.textContent = 'Entrar na monitoria';
                botaoParticipacao.addEventListener('click', () => alterarParticipacao(monitoria, true, botaoParticipacao));
            }
            acoes.appendChild(botaoParticipacao);
        }
        corpo.appendChild(acoes);
        card.appendChild(corpo);
        coluna.appendChild(card);
        return coluna;
    }

    async function carregarMinhasMonitorias() {
        if (!ehMonitor || !listaMinhasMonitorias) return false;
        listaMinhasMonitorias.replaceChildren();
        mostrarEstadoMinhas('info', 'Carregando suas monitorias...');
        try {
            const monitorias = await requisicao('/monitorias');
            if (!Array.isArray(monitorias) || monitorias.length === 0) {
                mostrarEstadoMinhas('info', 'Você ainda não está oferecendo monitorias.');
                return true;
            }
            ocultarEstadoMinhas();
            monitorias.forEach((monitoria) => {
                listaMinhasMonitorias.appendChild(criarCard(monitoria, true));
            });
            return true;
        } catch (error) {
            mostrarEstadoMinhas('danger', error instanceof Error ? error.message : 'Não foi possível carregar suas monitorias.');
            return false;
        }
    }

    async function carregarMonitorias() {
        lista.replaceChildren();
        mostrarEstado('info', 'Carregando monitorias...');
        try {
            const monitorias = await requisicao('/monitorias/disponiveis');
            if (!Array.isArray(monitorias) || monitorias.length === 0) {
                mostrarEstado('info', 'Não há monitorias disponíveis no momento.');
                return;
            }
            ocultarEstado();
            monitorias.forEach((monitoria) => {
                lista.appendChild(criarCard(monitoria));
            });
        } catch (error) {
            mostrarEstado('danger', error instanceof Error ? error.message : 'Não foi possível carregar as monitorias.');
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        if (ehMonitor) carregarMinhasMonitorias();
        carregarMonitorias();
    });
})();