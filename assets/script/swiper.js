import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal', // По умолчанию горизонтальный режим
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    slidesPerView: 3,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Breakpoints для адаптации на мобильных устройствах
    breakpoints: {
        // при ширине экрана от 0 до 767px
        0: {
            direction: 'vertical', // Вертикальная ориентация
            slidesPerView: 1, // Один слайд на экране
            spaceBetween: 10, // Отступы между слайдами
            centeredSlides: false, // Убираем центрирование на мобильных
            width: '100%', // Занимаем всю ширину экрана
        },
        // при ширине экрана от 768px
        768: {
            direction: 'horizontal', // Горизонтальная ориентация
            slidesPerView: 3, // Три слайда на экране
            spaceBetween: 30, // Отступы между слайдами
            centeredSlides: true, // Центрирование слайдов
        }
    }
});

let btnActive = document.querySelector('#btn-table-activate');
let btnDeactive = document.querySelector('#btn-table-inactivate');

let table = document.querySelector('.harvest-table');

btnActive.addEventListener('click', () => {

    table.classList.add('active-harvest');
    btnActive.style.display = "none";
    btnDeactive.style.display = "block";
  
});
btnDeactive.addEventListener('click', () => {

    table.classList.remove('active-harvest');
    btnActive.style.display = "block";
    btnDeactive.style.display = "none";

});
