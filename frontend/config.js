window.APP_CONFIG = {
    API_URL:
        window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
            ? 'http://localhost:3000'
            : 'https://pi-soma-backend.onrender.com',
};