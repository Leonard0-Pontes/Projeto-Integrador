const API_URL = 'http://localhost:3000';

const formulario = document.querySelector('#loginForm');

if (formulario) {
    console.log('Formulário encontrado com sucesso!'); // <-- Passo 1

    formulario.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('Botão de login pressionado, enviando requisição...'); // <-- Passo 2

        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha }),
            });

            console.log('Status da resposta do backend:', response.status); // <-- Passo 3

            if (!response.ok) {
                throw new Error('E-mail ou senha inválidos.');
            }

            const data = await response.json();
            console.log('Dados recebidos da API:', data); // <-- Passo 4

            // Tenta salvar o token
            sessionStorage.setItem('token', data.accessToken);
            console.log('Token salvo com sucesso:', localStorage.getItem('token')); 

            window.location.href = 'index.html';
        } catch (error) {
            console.error('Erro capturado no catch:', error); // <-- Passo 5 (Se cair aqui, o token nunca será salvo)
            alert(error.message);
        }
    });
} else {
    console.log('ERRO: Formulário #loginForm não foi encontrado na página!');
}