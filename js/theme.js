/*
 BODY TOP PADDING AS PER HEADER HEIGHT
--------------------------------------------*/
/* jQuery(document).ready(function() {
    var headerHeight = $(".header").outerHeight();
     $("body").css("padding-top", headerHeight);

}); */


/* SLIDER */
jQuery(document).ready(function() {
    var owl = $('.services-carousel');
    owl.owlCarousel({
      loop: true,
      items:1,
      margin: 28, 
      autoplay: false,
      nav:false,
      stagePadding:10,
      //navClass:["owl-prev d-flex justify-content-center align-items-center","owl-next d-flex justify-content-center align-items-center"],
      //navText:["<i class='la la-angle-left'></i>","<i class='la la-angle-right'></i>"],
      dots:true,
      dotsContainer:".services-carousel-pagination",
      responsive :{

        0 :{
          items : 1,
        },

        600 : {
          items:2,
        },

        1000:{
          items:3,
        },

      }
    });
  });

  jQuery(document).ready(function() {
    var owl = $('.clients-carousel');
    owl.owlCarousel({
    loop: true,
    margin: 8,
    autoplay: true, 
    dots:true,
    nav:false,
    responsive:{
          0:{
              items:4,
          },
          768:{
              items:6,
          },
          1200:{
              items:4, 
          }
      }
    });
  });
  
  
