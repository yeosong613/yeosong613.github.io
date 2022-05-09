$(function () {
    ////////////////////////////////////////////////////////

    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp(5000);
    });

    $('.main_slider').slick({
        arrow: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });


    $('.main_slider').on('init reInit afterChange', function () {
        let current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
    })

    ////////////////////////////////////////////////////////

});