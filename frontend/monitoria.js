const API_URL = 'http://localhost:3000';
const token = sessionStorage.getItem('token');

if (!token) {
    window.location.href = 'login.html';
}

// 1. Função para renderizar um card individual na tela
function adicionarCardNaTela(monitoria) {
    const containerCards = document.getElementById('listaSolicita');

    // Cria o elemento HTML do card
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card mt-4';
    cardDiv.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${monitoria.materia}</h5>
            <p class="card-body">${monitoria.descricao}</p>
        </div>
    `;

    containerCards.appendChild(cardDiv);
}

async function carregarMonitorias() {
    try {
        const response = await fetch(`${API_URL}/solicitacoes`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const monitorias = await response.json();
            document.getElementById('listaSolicita').innerHTML = '';
            monitorias.forEach(m => adicionarCardNaTela(m));
        }
    } catch (error) {
        console.error('Erro ao carregar monitorias:', error);
    }
}

const formSolicitacao = document.getElementById('formSolicitacao');
if (formSolicitacao) {
    formSolicitacao.addEventListener('submit', async (event) => {
        event.preventDefault();

        const materia = document.getElementById('materia').value;
        const descricao = document.getElementById('descricao').value;

        try {
            const response = await fetch(`${API_URL}/solicitacoes`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ materia, descricao }),
            });

            if (!response.ok) {
                throw new Error('Erro ao criar solicitação.');
            }

            const novaMonitoria = await response.json();

            // Adiciona o card visualmente na hora sem precisar recarregar a página
            adicionarCardNaTela(novaMonitoria);

            // Limpa o formulário
            formSolicitacao.reset();
            alert('Solicitação criada com sucesso!');
        } catch (error) {
            console.error(error);
            alert('Não foi possível criar a solicitação.');
        }
    });
}

// Executa ao carregar a página
document.addEventListener('DOMContentLoaded', carregarMonitorias);