const API_URL = 'https://pi-soma-backend.onrender.com';

const formulario = document.querySelector('#cadastroForm');

if (formulario) {
    formulario.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (!formulario.reportValidity()) return;

        const senha = document.getElementById('senha').value;
        const confirmacao = document.getElementById('confSenha').value;

        if (senha !== confirmacao) {
            alert('As senhas não coincidem.');
            return;
        }

        const dados = {
            nome: document.getElementById('nomeFull').value.trim(),
            email: document.getElementById('email').value.trim(),
            senha,
            funcao: document.getElementById('funcao').value,
            curso: document.getElementById('curso').value.trim(),
            periodo: document.getElementById('periodo').value,
        };

        try {
            const response = await fetch(`${API_URL}/usuario`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dados),
            });

            const resultado = await response.json();

            if (!response.ok) {
                const mensagem = Array.isArray(resultado.message)
                    ? resultado.message.join('\n')
                    : resultado.message;
                throw new Error(mensagem || 'Não foi possível criar a conta.');
            }

            alert('Cadastro realizado. Faça login para continuar.');
            window.location.href = './login.html';
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            alert(error instanceof Error ? error.message : 'Não foi possível criar a conta.');
        }
    });
}
