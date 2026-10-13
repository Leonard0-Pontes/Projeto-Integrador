const API_URL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', async () => {
    const token = sessionStorage.getItem('token');

    if (!token) {
        window.location.href = 'login.html';
        return;
    }
});