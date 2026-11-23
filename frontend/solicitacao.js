const API_URL = window.APP_CONFIG.API_URL;
(() => {
    const token = window.auth.exigirToken();
    if (!token) return;

    function adicionarCardNaTela(solicitacao) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card mt-4';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const titulo = document.createElement('h5');
        titulo.className = 'card-title';
        titulo.textContent = solicitacao.assunto;

        const detalhes = document.createElement('p');
        detalhes.className = 'card-text';
        detalhes.textContent =
            `${solicitacao.preferencia_data}, ${solicitacao.preferencia_horario}`;

        cardBody.append(titulo, detalhes);
        cardDiv.appendChild(cardBody);

        document.getElementById('listaSolicita').appendChild(cardDiv);
    }

    async function carregarDisciplinas() {
        const response = await fetch(`${API_URL}/disciplina`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
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
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const solicitacoes = await response.json();
                document.getElementById('listaSolicita').innerHTML = '';
                solicitacoes.forEach(m => adicionarCardNaTela(m));
            }
        } catch (error) {
            console.error('Erro ao carregar solicitacoes:', error);
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
                    const mensagem = Array.isArray(resultado.message)
                        ? resultado.message.join('\n')
                        : resultado.message;

                    throw new Error(mensagem || 'Erro ao criar solicitação.');
                }

                adicionarCardNaTela(resultado);
                formSolicitacao.reset();
            } catch (error) {
                console.error('Erro ao criar solicitação:', error);
                alert(error instanceof Error ? error.message : 'Não foi possível criar a solicitação.');
            }
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        carregarSolicitacoes();
        carregarDisciplinas().catch((error) => {
            console.error('Erro ao carregar disciplinas:', error);
            alert('Não foi possível carregar as disciplinas.');
        });
    });
})();

