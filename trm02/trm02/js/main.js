$(function () {
    //////////////////////////////////////////////////

    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp(5000);
    });

    $('.main_slider').on('init reInit afterChange', function () {
        let current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
    })


    $('.main_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.movie .dec i:nth-of-type(1)').on('click', function () {
        $('.movie video').trigger('play');
    });

    $('.movie .dec i:nth-of-type(2)').on('click', function () {
        $('.movie video').trigger('pause');
    });

    $("#myMovie").YTPlayer({
        videoURL: 'https://youtu.be/G29hY9YsMOc', containment: '.youtube', autoPlay: true, mute: false,
        startAt: 0, opacity: 1, showControls: false, playOnlyIfVisible: true
    });

    $('.youtube i:nth-of-type(1)').on('click', function () {
        $('myMovie').YTPPlay();
    });

    $('.youtube i:nth-of-type(2)').on('click', function () {
        $('myMovie').YTPPause();
    });

    /////////////////////////////////////////////////
});