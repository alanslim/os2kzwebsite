import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper', {
    direction: 'horizontal', 
    spaceBetween: 10,
    slidesPerView: '3',
    centeredSlides: true,
    loop: true,
    loopedSlides: 8,
    speed: 3000, // Устанавливаем скорость анимации
   
    allowTouchMove: true, // Отключаем возможность перетаскивания
    autoplay: {
        delay: 0, // Плавное движение без остановок
        disableOnInteraction: true,
    },
    freeMode: true, // Включаем режим свободного скольжения
    freeModeMomentum: false, // Отключаем инерцию при остановке

    // Breakpoints для адаптации на мобильных устройствах
    breakpoints: {
        0: {
            direction: 'vertical',
            slidesPerView: '1',
            allowTouchMove: true,
         
        },
        768: {
            direction: 'horizontal',
            centeredSlides: true,
            allowTouchMove: true,
        },
        769: {
            direction: 'horizontal',
            centeredSlides: true,
        }
    }
});
const swiperContainer = document.querySelector('.swiper');
swiperContainer.addEventListener('mouseenter', () => {
    swiper.autoplay.stop(); // Останавливаем автопрокрутку при наведении
});

swiperContainer.addEventListener('mouseleave', () => {
    swiper.autoplay.start(); // Возобновляем автопрокрутку при убирании мыши
});


swiper.on('touchEnd', () => {
    setTimeout(()=> {
        swiper.autoplay.start();

    }, 3000);
})