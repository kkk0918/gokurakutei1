$(function(){
    $('#rec-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true,
        speed:1000,
        autoplaySpeed:5000,
        arrows:false,
        centerPadding:'90px',
        centerMode:true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              centerMode:true,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding:0
            }
          }
        ]
      });
});

$(function(){
  $('#nav-btn').on('click',function(){
    $(this).toggleClass('-active');
    $('#nav').toggleClass('-active');
  });
});

$(function(){
  $('.js-accordion').on('click',function(){
    $(this).toggleClass('-active');
    $(this).next().slideToggle();
  });
});

$(function(){
  new WOW().init();
});