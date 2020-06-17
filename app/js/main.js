$(function () {

  $('.look-book__inner').slick({
    infinite: true,
    speed: 1000,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.testimonials__slider-inner').slick({
    prevArrow: '<button class="slick-arrow slick-prev icon-lnr-arrow-left"></button>',
    nextArrow: '<button class="slick-arrow slick-next icon-lnr-arrow-right"></button>',

  });

  $('.news__slider-inner').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,


    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.header__btn').on('click', function () {
    $('.header__menu').slideToggle();
  });

});