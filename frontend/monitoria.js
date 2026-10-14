const API_URL = 'http://localhost:3000';
const token = sessionStorage.getItem('token');

if (!token) {
    window.location.href = 'login.html';
}

function adicionarCardNaTela(monitoria) {
    const containerCards = document.getElementById('listaSolicita');

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card mt-4';
    cardDiv.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${monitoria.assunto}</h5>
            <p class="card-body">${monitoria.data_preferida}, ${monitoria.horario_preferido}</p>
            <button type="button" class="btn btn-success">Aceitar</button>
            <button type="button" class="btn btn-danger">Recusar</button>
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

const formSolicitacao = document.getElementById('criarSolicita');
if (formSolicitacao) {
    formSolicitacao.addEventListener('submit', async (event) => {
        event.preventDefault();

        const assunto = document.getElementById('assunto').value;
        const data = document.getElementById('data').value;
        const horario = document.getElementById('horario').value;

        try {
            const response = await fetch(`${API_URL}/solicitacoes`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ assunto: assunto, data_preferida: data, horario_preferido: horario }),
            });

            if (!response.ok) {
                throw new Error('Erro ao criar solicitação.');
            }

            const novaMonitoria = await response.json();

            adicionarCardNaTela(novaMonitoria);

            formSolicitacao.reset();
        } catch (error) {
            console.error(error);
            alert('Não foi possível criar a solicitação.');
        }
    });
}

document.addEventListener('DOMContentLoaded', carregarMonitorias);