const API_URL = 'http://localhost:3000';
const formulario = document.querySelector('#loginForm');
const resultado = document.querySelector('#resultado');

if (formulario) {
    formulario.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Erro ao fazer login. Verifique suas credenciais.');
            }

            const data = await response.json();
            localStorage.setItem('token', data.access_token);
            
            // Redireciona para a página de perfil após o login bem-sucedido
            window.location.href = 'perfil.html';
        } catch (error) {
            alert(error.message);
        }
    });
}

async function carregarDadosPerfil() {
    const token = localStorage.getItem('token');

    if (!token) {
        window.location.href = 'login.html';
        return;
    }

    try {
        const response = await fetch(`${API_URL}/perfil`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Não autorizado ou sessão expirada.');
        }

        const usuario = await response.json();
        const elementoNome = document.getElementById('nome-usuario');
        if (elementoNome) {
            elementoNome.innerText = usuario.nome;
        }
    } catch (error) {
        console.error(error);
        localStorage.removeItem('token');
        window.location.href = 'login.html';
    }
}

if (document.getElementById('nome-usuario')) {
    document.addEventListener('DOMContentLoaded', carregarDadosPerfil);
}


document.addEventListener('DOMContentLoaded', carregarDadosPerfil);