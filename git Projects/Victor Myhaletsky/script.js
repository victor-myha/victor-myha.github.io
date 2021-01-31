$(function () {
  $('.multiple-items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    infinity: true,
    dots: false,
    centerMode: true,
    centerPadding: '0',
  });
});

AOS.init({
  offset: 50,
  duration: 1000,
  easing: 'ease-in-quad',
  delay: 100,
  disable: function () {
    var maxWidth = 350;
    return window.innerWidth < maxWidth;
  },
});