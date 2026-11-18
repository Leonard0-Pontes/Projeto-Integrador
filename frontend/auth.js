(() => {
    function exigirToken() {
        const token = sessionStorage.getItem('token');

        if (!token) {
            window.location.href = 'login.html';
            return;
        }

        return token;
    }

    window.auth = { exigirToken };

    const btnSair = document.getElementById('btn-sair');
    if (btnSair) {
        btnSair.addEventListener('click', () => {
            sessionStorage.removeItem('token');
        });
    }
})();