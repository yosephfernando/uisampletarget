const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 1000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Disable autoplay on user interaction
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});