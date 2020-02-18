jQuery(function($){
  "use strict";
  if($('.fa-bars').length){
    $('.fa-bars').on('click', function(){
      $('body .header_top .header_container nav .navigation_top').show(),
      $(this).hide();
      $('.fa-times').show();
    })
    $('.fa-times').on('click',function(){
      $('body .header_top .header_container nav .navigation_top').hide(),
      $(this).hide();
      $('.fa-bars').show();
    })
  }
  if($('.home_slider').length){
    $('.home_slider').slick({
      vertical: true,
      arrows: false,
      dots:true,
      responsive: [


   {
     breakpoint: 500,
     settings: {
       vertical: false,
       adaptiveHeight: true
     }
   }

 ]
    });
  }
    if($('.content_slider_tweeter').length){
      $('.content_slider_tweeter').slick({
        vertical: true,
        appendArrows: $('.tweet_slider .arrows'),
        prevArrow: '<span class="top"><i class="fas fa-arrow-up"></i></span>',
        nextArrow: '<span class="down"><i class="fas fa-arrow-down"></i></span>'
      });
    }

  if($('.popup-youtube, .open_video , .popup-vimeo, .popup-gmaps').length){
    $('.popup-youtube, .open_video , .popup-vimeo, .popup-gmaps').magnificPopup({
              disableOn: 700,
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: false,
              fixedContentPos: false
            });
    }

  if($('.shop_carusel').length){
     $('.shop_carusel').slick({
       infinity: true,
       slidesToShow: 4,
       slidesToScroll: 1,
       appendArrows: $('.shops_slider_navigation'),
       prevArrow: '<div class="left"> <i class="fas fa-arrow-left"></i> </div>',
       nextArrow: '<div class="right"> <i class="fas fa-arrow-right"></i> </div>',

       responsive: [

   {
     breakpoint: 960,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 1,
     }
   },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }

  ]
     });

     if($('.testimonial_carousel').length){
        $('.testimonial_carousel').slick({
          infinity: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          appendArrows: $('.testimonial_slider_box '),
          prevArrow: '<div class="left_arrow"><div class="left"><i class="fas fa-arrow-left"></i></div></div>',
          nextArrow: '<div class="right_arrow"><div class="right"><i class="fas fa-arrow-right"></i></div></div>',
          responsive: [
       {
         breakpoint: 500,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         }
       }

     ]

        });
        $('.testimonial_carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
              var tabs = $('.testimonial_tab_container');

              tabs.find($('.tab-item')).hide();
              console.log($('.tab-' + currentSlide));
              tabs.find($('.tab-' + currentSlide)).show();

            });
      }

     $('.testimonial_gallery').magnificPopup({
           delegate: 'a',
           type: 'image',
           tLoading: 'Loading image #%curr%...',
           mainClass: 'mfp-img-mobile',
           gallery: {
             enabled: true,
             navigateByImgClick: true,
             preload: [0,1] // Will preload 0 - before current, and 1 after the current image
           },
           image: {
             tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',

           }
         });
 }
});
