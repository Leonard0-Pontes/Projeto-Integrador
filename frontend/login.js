const API_URL = 'http://localhost:3000';

const formulario = document.querySelector('#loginForm');

if (formulario) {

    formulario.addEventListener('submit', async (event) => {
        event.preventDefault();

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

            if (!response.ok) {
                throw new Error('E-mail ou senha inválidos.');
            }

            const data = await response.json();
            console.log('Dados recebidos da API:', data); // 

            sessionStorage.setItem('token', data.accessToken);

            window.location.href = 'index.html';
        } catch (error) {
            console.error('Erro capturado no catch:', error);
        }
    });
}