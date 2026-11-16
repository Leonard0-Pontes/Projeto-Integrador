const API_URL = 'https://pi-soma-backend.onrender.com';

document.addEventListener('DOMContentLoaded', async () => {
    const token = sessionStorage.getItem('token');

    if (!token) {
        window.location.href = 'login.html';
        return;
    }
});
