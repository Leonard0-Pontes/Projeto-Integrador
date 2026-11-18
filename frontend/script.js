document.addEventListener('DOMContentLoaded', async () => {
    const token = window.auth.exigirToken();
    if (!token) return;
});
