const themeToggle = document.querySelector('.toggle-btn');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});