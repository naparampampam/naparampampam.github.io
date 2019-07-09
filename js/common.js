$(document).ready(function() {

  "use strict";

//OwlCarousel
  $('.owl-carousel').owlCarousel({
    items: 2,
    center: true,
    loop: true,
    smartSpeed: 700,
    nav: true,
    // dots: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 1
      },
      1200: {
        items: 1
      }
    },
  });


//   //Fixed header
  $("header").removeClass("default");
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $("header").addClass("default");
    } else {
      $("header").removeClass("default");
    };
  });




});
