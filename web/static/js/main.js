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

    $('.top-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.bottom-slider'
    });
    $('.bottom-slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.top-slider',
        dots: false,
        focusOnSelect: true,
        prevArrow:
            "<img class='prev-arrow--gallery' src='/var/assets/arrow-left.svg'>",
        nextArrow:
            "<img class='next-arrow--gallery' src='/var/assets/arrow-right.svg'>"
    });

    $('.magnifier').on('click', (e) => {
        let img = e.target.nextElementSibling;
        let newImg = $('.new-image');
        let imgDiv = $('.fullscreen-image');
        newImg.attr("src", img.src);
        imgDiv.css({"display": "block"});
    })

    $('.close').on('click', () => {
        $('.fullscreen-image').css({"display": "none"});
    })

    $('#authorName').attr('placeholder', 'Name');
    $('#authorEmail').attr('placeholder', 'Email Address');
    $('textarea').attr('placeholder', 'Comment');


    if (window.location.href.includes('epage')) {
        var randomNews = $('.random-column');
        randomNews.children('.footernews-heading').text('Random News');
    }
})