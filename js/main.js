const main = document.querySelector('main');
let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    navbar.classList.toggle('nav-active', window.scrollY > 40);
})


const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    breakpoints: {
        1025: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
    pagination: {
        clickable: true,
        el: ".carousel__count",
        type: "fraction",
    },
    navigation: {
        nextEl: ".carousel__next-btn",
    },

});

const swiper2 = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    loop: true,
    navigation: {
        nextEl: ".inspirations__next",
        prevEl: ".inspirations__prev",
    },
    spaceBetween: 30,
    pagination: {
        clickable: true,
        el: ".view__corousel",
        type: "fraction",
    },
});