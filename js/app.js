window.onload = function () {

    // cards slider
    const swiper = new Swiper('.card ', {
        // Optional parameters
        slidesPerView: 1,
        speed: 800,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });
    //

    // card switcher

    const switchers = document.querySelectorAll('.switcher');

    switchers.forEach((switcher) => {
        switcher.addEventListener('click', () => {
            // клас на самому switcher
            switcher.classList.toggle('active');

            // клас на подвійного батька
            switcher.parentElement.parentElement.classList.toggle('hidden');
        });
    });

    //
}