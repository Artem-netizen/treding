var Swiper = new Swiper(".reviews__wrapper", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    spaceBetween: 70,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.button__next',
        prevEl: '.button__prev',
    },
});