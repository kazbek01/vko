$(document).ready(function(){

    $('.call-menu').on('click', function () {
        $('nav').addClass('nav-show');
    });

    $('.close-menu').on('click', function () {
        $('nav').removeClass('nav-show');
    });


    $('.call-question').on('click', function () {
        $('.blog-question').addClass('showed');
        $('.overlay').addClass('showed');
    });

    $('.overlay').on('click', function () {
        $('.question-popup').removeClass('showed');
        $('.overlay').removeClass('showed');
    });

    $('.call-application').on('click', function () {
        $('.control-question').addClass('showed');
        $('.overlay').addClass('showed');
    });
    $('.call-app').on('click', function () {
        $('.control-app').addClass('showed');
        $('.overlay').addClass('showed');
    });



});
$(function () {
    $('.call-answer').on('click', function () {
        var answer = $(this).next();
        $(this).closest('.answer-item').not(answer).slideUp(400);
        answer.slideToggle(400);
    });



});

//  SLIDER
$('.slider-cover').slick({
    slidesToShow:1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: false,
});


