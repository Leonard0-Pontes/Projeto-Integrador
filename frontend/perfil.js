const API_URL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');

    // Se não houver token, chuta para o login imediatamente
    if (!token) {
        window.location.href = 'login.html';
        return;
    }

    try {
        const response = await fetch(`${API_URL}/auth/perfil`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Sessão expirada ou não autorizada.');
        }

        const usuario = await response.json();

        const elementoNome = document.getElementById('nome-usuario');
        const elementoEmail = document.getElementById('email-usuario');

        if (elementoNome) elementoNome.innerText = usuario.nome;
        if (elementoEmail) elementoEmail.innerText = usuario.email;

    }
    
    catch (error) {
        console.error('Erro ao carregar perfil:', error);
        localStorage.removeItem('token');
        window.location.href = 'login.html';
    }

    const btnSair = document.getElementById('btn-sair');
    if (btnSair) {
        btnSair.addEventListener('click', () => {
            localStorage.removeItem('token');
            window.location.href = 'login.html';
        });
    } 
});