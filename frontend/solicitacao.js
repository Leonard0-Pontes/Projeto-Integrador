(() => {
    const API_URL = window.APP_CONFIG.API_URL;
    const token = window.auth.exigirToken();

    if (!token) return;

    const lista = document.getElementById('listaSolicita');

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

    let usuario;

    try {
        usuario = lerPayloadToken();
    } catch (error) {
        alert(error instanceof Error ? error.message : 'Sessão inválida.');
        return;
    }

    const ehMonitor = usuario.funcao === 'Monitor';

    function chaveRecusa(solicitacaoId) {
        return `soma:monitor:${usuario.sub}:solicitacao:${solicitacaoId}:recusada`;
    }

    function mostrarAviso(tipo, texto) {
        lista.replaceChildren();
        const aviso = document.createElement('div');
        aviso.className = `alert alert-${tipo} mt-4`;
        aviso.textContent = texto;
        lista.appendChild(aviso);
    }

    function adicionarCardNaTela(solicitacao) {
        const card = document.createElement('article');
        card.className = 'card mt-4';
        const corpo = document.createElement('div');
        corpo.className = 'card-body';
        const titulo = document.createElement('h2');
        titulo.className = 'h5 card-title';
        titulo.textContent = solicitacao.assunto || 'Solicitação de monitoria';
        corpo.appendChild(titulo);
        const data = new Date(solicitacao.preferencia_data);
        const dataFormatada = Number.isNaN(data.getTime())
            ? 'Data indisponível'
            : data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
        const horario = new Date(solicitacao.preferencia_horario);
        const horarioFormatado = Number.isNaN(horario.getTime())
            ? 'Horário indisponível'
            : horario.toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'UTC',
            });
        const preferencia = document.createElement('p');
        preferencia.className = 'card-text mb-0';
        preferencia.textContent = `Data Preferida: ${dataFormatada} | Horário Preferido: ${horarioFormatado}`;
        corpo.appendChild(preferencia);
        const acoes = document.createElement('div');
        acoes.className = 'd-flex flex-wrap gap-2 mt-3';
        const botaoDetalhes = document.createElement('button');
        botaoDetalhes.type = 'button';
        botaoDetalhes.className = 'btn btn-outline-primary';
        botaoDetalhes.textContent = 'Ver detalhes';
        botaoDetalhes.addEventListener('click', () => {
            const url = new URL('./detalhes-solicitacao.html', window.location.href);
            url.searchParams.set('id', String(solicitacao.id));
            const janela = window.open(url.href, '_blank', 'popup=yes,width=740,height=620,resizable=yes,scrollbars=yes');
            if (janela) {
                janela.opener = null;
            } else {
                alert('Permita pop-ups para abrir os detalhes da solicitação.');
            }
        });
        acoes.appendChild(botaoDetalhes);
        if (ehMonitor && solicitacao.status === 'Pendente') {
            const aceitar = document.createElement('a');
            aceitar.className = 'btn btn-success';
            aceitar.textContent = 'Aceitar';
            aceitar.href = `./agendar-monitoria.html?solicitacao_id=${encodeURIComponent(solicitacao.id)}`;
            const recusar = document.createElement('button');
            recusar.type = 'button';
            recusar.className = 'btn btn-danger';
            recusar.textContent = 'Recusar';
            recusar.addEventListener('click', () => {
                if (!window.confirm('Ocultar esta solicitação para sua conta neste navegador?')) {
                    return;
                }
                try {
                    localStorage.setItem(chaveRecusa(solicitacao.id), '1');
                    card.remove();
                } catch {
                    alert('Não foi possível salvar a recusa neste navegador.');
                }
            });
            acoes.append(aceitar, recusar);
        }
        corpo.appendChild(acoes);
        card.appendChild(corpo);
        lista.appendChild(card);
    }

    async function carregarDisciplinas() {
        const response = await fetch(`${API_URL}/disciplina`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) {
            throw new Error('Não foi possível carregar as disciplinas.');
        }
        const disciplinas = await response.json();
        const select = document.getElementById('disciplinaId');
        disciplinas.forEach((disciplina) => {
            const opcao = document.createElement('option');
            opcao.value = disciplina.id;
            opcao.textContent = disciplina.nome;
            select.appendChild(opcao);
        });
    }

    async function carregarSolicitacoes() {
        try {
            const response = await fetch(`${API_URL}/solicitacoes`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (!response.ok) {
                throw new Error('Não foi possível carregar as solicitações.');
            }
            const solicitacoes = await response.json();
            lista.replaceChildren();
            const visiveis = solicitacoes.filter((solicitacao) => {
                if (ehMonitor && solicitacao.status !== 'Pendente') return false;
                return !ehMonitor ||
                    localStorage.getItem(chaveRecusa(solicitacao.id)) !== '1';
            });
            if (visiveis.length === 0) {
                mostrarAviso('info', ehMonitor ? 'Não há solicitações pendentes visíveis.' : 'Você ainda não possui solicitações.');
                return;
            }
            visiveis.forEach(adicionarCardNaTela);
        } catch (error) {
            mostrarAviso('danger', error instanceof Error ? error.message : 'Não foi possível carregar as solicitações.');
        }
    }

    const formSolicitacao = document.getElementById('criarSolicita');

    if (formSolicitacao) {
        formSolicitacao.addEventListener('submit', async (event) => {
            event.preventDefault();
            if (!formSolicitacao.reportValidity()) return;
            const dados = {
                disciplina_id: Number(document.getElementById('disciplinaId').value),
                assunto: document.getElementById('assunto').value.trim(),
                data_preferida: document.getElementById('data').value,
                horario_preferido: document.getElementById('horario').value,
                modalidade_preferida: document.getElementById('modalidade').value,
                descricao: document.getElementById('descricao').value.trim() || undefined,
            };
            try {
                const response = await fetch(`${API_URL}/solicitacoes`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dados),
                });
                const resultado = await response.json();
                if (!response.ok) {
                    const erro = Array.isArray(resultado.message) ? resultado.message.join('\n') : resultado.message;
                    throw new Error(erro || 'Erro ao criar solicitação.');
                }
                formSolicitacao.reset();
                await carregarSolicitacoes();
            } catch (error) {
                alert(error instanceof Error ? error.message : 'Não foi possível criar a solicitação.');
            }
        });
    }

    const campoDescricao = document.getElementById('descricao');
    const contadorDescricao = document.getElementById('contadorDescricao');

    if (campoDescricao && contadorDescricao) {
        const atualizarContador = () => {
            const restantes = campoDescricao.maxLength - campoDescricao.value.length;
            contadorDescricao.textContent = `${restantes} caracteres restantes`;
        };
        campoDescricao.addEventListener('input', atualizarContador);
        formSolicitacao.addEventListener('reset', () => {
            window.setTimeout(atualizarContador, 0);
        });
        atualizarContador();
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        carregarSolicitacoes();
        carregarDisciplinas().catch((error) => {
            alert(error instanceof Error ? error.message : 'Não foi possível carregar as disciplinas.');
        });
    });
})();