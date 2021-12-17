/* https://www.webcreatorbox.com/tech/slide-menu */

const button = document.querySelector('.js-button');
const menu =document.querySelector('js-menu');

button.addEventListner('click', () => {
    menu.classList.toggle('is-open')
});