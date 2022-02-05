const mobileBtn = document.getElementById('mobile-cta');
var nav = document.querySelector('nav');
var mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn'); // for adding the menu-btn class on click event
        })

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn'); // for removing the menu-btn class on click event
        })

