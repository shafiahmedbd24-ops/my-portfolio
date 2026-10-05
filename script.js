const themeBtn = document.getElementById('theme-btn');
const body = document.body;
const card = document.querySelector('.card');

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    card.classList.toggle('dark-mode');
});