const toggleBtn = document.querySelector('.toggleBtn');
const navbarRight = document.querySelector('.navbar__right');

toggleBtn.addEventListener('click', () => {
    navbarRight.classList.toggle('visible');
})