let headerButton = document.querySelector('.header__button');
let headerCloseButton = document.querySelector('.header__button--close');

let navigation = document.querySelector('.header__navigation-container');

headerButton.addEventListener('click', function(evt) {
    navigation.classList.toggle('header__navigation-container--shown');
});

headerCloseButton.addEventListener('click', function(evt) {
    navigation.classList.toggle('header__navigation-container--shown');
});