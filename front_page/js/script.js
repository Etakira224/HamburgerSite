/* https://www.webcreatorbox.com/tech/slide-menu */

const btn = document.querySelector('.js-btn');
const menu = document.querySelector('.js-menu');
const closeBtn = document.querySelector('.js-closeBtn')
console.log(btn);
console.log(menu);
console.log(closeBtn);

btn.addEventListener('click', () => {
    menu.classList.add('is-open')
    console.log('OpenSidebar')
});

closeBtn.addEventListener('click', () =>{
    menu.classList.remove('is-open')
    console.log('CloseSidebar')
});

