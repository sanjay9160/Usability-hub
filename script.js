$(function() {
    $('.toggle').click(function() {
        $('nav').slideToggle();
    });

    //animation on scroll-aos
    AOS.init({
        delay: 400,
        duration: 1000,
    });

});