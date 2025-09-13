const header = document.querySelector('.header');
const burger = document.querySelector('.burger__menu');
const burgerIcon = document.querySelector('.burger__menu-icon');

burger.addEventListener('click', function () {
    header.classList.toggle('header__mobile');
});
