window.onload = function () {
    console.log("loaded");

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

    const switcher = document.querySelector(".switcher");

    switcher.addEventListener('click', () => {
        switcher.classList.toggle('active');
        if(switcher.id === 'deactivateCard') {
            switcher.parentElement.parentElement.classList.toggle('hidden');
        }
    });
    
    //
}