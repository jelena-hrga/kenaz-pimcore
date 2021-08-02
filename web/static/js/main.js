$(document).ready(() => {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:
            "<img class='prev-arrow--slider' src='/var/assets/arrow-left.svg'>",
        nextArrow:
            "<img class='next-arrow--slider' src='/var/assets/arrow-right.svg'>"
    });

    $('.carousel-news').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow:
            "<img class='prev-arrow' src='/var/assets/prev-arrow-yellow.svg'>",
        nextArrow:
            "<img class='next-arrow' src='/var/assets/next-arrow-yellow.svg'>"
    })

    $('.carousel-news-single').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:
            "<img class='prev-arrow' src='/var/assets/prev-arrow-brown.svg'>",
        nextArrow:
            "<img class='next-arrow' src='/var/assets/next-arrow-brown.svg'>"
    })
})