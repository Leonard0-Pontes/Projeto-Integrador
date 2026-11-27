(() => {
    const API_URL = window.APP_CONFIG.API_URL;
    const token = window.auth.exigirToken();

    if (!token) return;

    const formulario = document.getElementById('formAgendar');
    const selectSolicitacao = document.getElementById('solicitacaoId');
    const detalhesSolicitacao = document.getElementById('detalhesSolicitacao');
    const mensagem = document.getElementById('mensagemAgendamento');
    const botaoAgendar = document.getElementById('btnAgendar');

    const campoData = document.getElementById('data');
    const campoHorarioInicio = document.getElementById('horarioInicio');
    const campoHorarioFim = document.getElementById('horarioFim');
    const campoModalidade = document.getElementById('modalidade');

    const campoLocalContainer = document.getElementById('campoLocal');
    const campoLocal = document.getElementById('local');
    const campoLinkContainer = document.getElementById('campoLink');
    const campoLink = document.getElementById('link');

    const solicitacoes = new Map();

    function mostrarMensagem(tipo, texto) {
        mensagem.className = `alert alert-${tipo}`;
        mensagem.textContent = texto;
    }
    async function requisicao(endpoint, opcoes = {}) {
        const response = await fetch(`${API_URL}${endpoint}`, {
            ...opcoes,
            headers: {
                Authorization: `Bearer ${token}`,
                ...opcoes.headers,
            },
        });
        let resultado = null;
        if (response.status !== 204) {
            const texto = await response.text();
            if (texto.trim()) {
                try {
                    resultado = JSON.parse(texto);
                } catch {
                    throw new Error(
                        `A API retornou uma resposta inválida (HTTP ${response.status}).`,
                    );
                }
            } else if (response.ok) {
                throw new Error('A API retornou uma resposta vazia inesperada.');
            }
        }
        if (!response.ok) {
            const erro = Array.isArray(resultado?.message)
                ? resultado.message.join(' ')
                : resultado?.message;
            throw new Error(erro || `A requisição falhou (HTTP ${response.status}).`);
        }
        return resultado;
    }

    function dataParaInput(valor) {
        if (!valor) return '';
        const data = new Date(valor);
        return Number.isNaN(data.getTime())
            ? ''
            : data.toISOString().slice(0, 10);
    }

    function horarioParaInput(valor) {
        if (!valor) return '';
        const horario = new Date(valor);
        return Number.isNaN(horario.getTime())
            ? String(valor).slice(0, 5)
            : horario.toISOString().slice(11, 16);
    }

    function atualizarCamposDeModalidade() {
        const presencial = campoModalidade.value === 'Presencial';
        const online = campoModalidade.value === 'Online';
        campoLocalContainer.classList.toggle('d-none', !presencial);
        campoLocal.required = presencial;
        campoLocal.disabled = !presencial;
        campoLinkContainer.classList.toggle('d-none', !online);
        campoLink.required = online;
        campoLink.disabled = !online;
    }

    function selecionarSolicitacao() {
        const solicitacao = solicitacoes.get(Number(selectSolicitacao.value));
        if (!solicitacao) {
            detalhesSolicitacao.classList.add('d-none');
            return;
        }
        const disciplina = solicitacao.disciplina?.nome || 'Disciplina não informada';
        const aluno = solicitacao.aluno?.nome || 'Aluno não informado';
        detalhesSolicitacao.textContent =
            `${solicitacao.assunto} — ${disciplina} — ${aluno}`;
        detalhesSolicitacao.classList.remove('d-none');
        campoData.value = dataParaInput(solicitacao.preferencia_data);
        campoHorarioInicio.value =
            horarioParaInput(solicitacao.preferencia_horario);
        campoModalidade.value =
            solicitacao.preferencia_modal === 'Nenhuma'
                ? ''
                : solicitacao.preferencia_modal;
        campoLocal.value = solicitacao.preferencia_local || '';
        campoLink.value = '';
        atualizarCamposDeModalidade();
    }

    async function carregarSolicitacoes() {
        try {
            const resultado = await requisicao('/solicitacoes');
            const pendentes = resultado.filter(
                (solicitacao) => solicitacao.status === 'Pendente',
            );
            selectSolicitacao.replaceChildren(
                new Option('Selecione uma solicitação pendente', ''),
            );
            pendentes.forEach((solicitacao) => {
                solicitacoes.set(solicitacao.id, solicitacao);

                const disciplina = solicitacao.disciplina?.nome || 'Sem disciplina';
                const opcao = new Option(
                    `${solicitacao.assunto} — ${disciplina}`,
                    String(solicitacao.id),
                );
                selectSolicitacao.appendChild(opcao);
            });
            if (pendentes.length === 0) {
                mostrarMensagem(
                    'info',
                    'Não há solicitações pendentes para agendar.',
                );
                return;
            }
            const solicitacaoNaUrl = Number(
                new URLSearchParams(window.location.search)
                    .get('solicitacao_id'),
            );
            if (solicitacoes.has(solicitacaoNaUrl)) {
                selectSolicitacao.value = String(solicitacaoNaUrl);
            } else {
                selectSolicitacao.value = String(pendentes[0].id);
            }
            selecionarSolicitacao();
            botaoAgendar.disabled = false;
            mensagem.className = 'alert d-none';
        } catch (error) {
            mostrarMensagem(
                'danger',
                error instanceof Error
                    ? error.message
                    : 'Não foi possível carregar as solicitações.',
            );
        }
    }

    formulario.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!formulario.reportValidity()) return;
        const dados = {
            solicitacao_id: Number(selectSolicitacao.value),
            data: campoData.value,
            horario_inicio: campoHorarioInicio.value,
            horario_fim: campoHorarioFim.value,
            modalidade: campoModalidade.value,
        };
        if (campoModalidade.value === 'Presencial') {
            dados.local = campoLocal.value.trim();
        }
        if (campoModalidade.value === 'Online') {
            dados.link = campoLink.value.trim();
        }
        botaoAgendar.disabled = true;
        mostrarMensagem('info', 'Agendando monitoria...');
        try {
            await requisicao('/monitorias', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dados),
            });
            mostrarMensagem(
                'success',
                'Monitoria agendada. Redirecionando para a Central...',
            );
            window.setTimeout(() => {
                window.location.href = 'index.html';
            }, 700);
        } catch (error) {
            botaoAgendar.disabled = false;
            mostrarMensagem(
                'danger',
                error instanceof Error
                    ? error.message
                    : 'Não foi possível agendar a monitoria.',
            );
        }
    });
    selectSolicitacao.addEventListener('change', selecionarSolicitacao);
    campoModalidade.addEventListener('change', atualizarCamposDeModalidade);
    atualizarCamposDeModalidade();
    carregarSolicitacoes();
})();