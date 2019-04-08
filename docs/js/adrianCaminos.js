const circle = document.querySelector('.container-hamburger');
const link = document.querySelector('.material-content').querySelectorAll('li');
const hamburger = document.querySelector('.material-hamburger');
const main = document.querySelector('main');
const win = window;

const openMenu = event => {
    circle.classList.toggle('active');
    hamburger.classList.toggle('material-close');
    main.classList.toggle('active');
    for (let i = 0; i < link.length; i++) {
        link[i].classList.toggle('active');
    }
    event.preventDefault();
    event.stopImmediatePropagation();
}

const closeMenu = () => {
    if (circle.classList.contains('active')) {
        circle.classList.remove('active');
        for (let i = 0; i < link.length; i++) {
            link[i].classList.toggle('active');
        }
        hamburger.classList.remove('material-close');
        main.classList.remove('active');
    }
}

circle.addEventListener('click', openMenu, false);
win.addEventListener('click', closeMenu, false);