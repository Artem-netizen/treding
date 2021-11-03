var swiperTWo = new Swiper(".case__wrapper", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
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
        nextEl: '.case__next',
        prevEl: '.case__prev',
    },
});