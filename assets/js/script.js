// counter jQuery//
jQuery(document).ready(function ($) {
    $('.counterN').counterUp({
      delay: 10,
      time: 1000,
    });
  
});

// sticky navber//
window.addEventListener("scroll", function () {
  var menu = this.document.querySelector(".main_menu");
  menu.classList.toggle("sticky-top", window.scrollY > 0);
});


// navtab slide//
$('.navtab_main_slide').slick({
  autoplay: false,
  slidesToScroll: 1,
  slidesToShow: 3,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: '<i class="fa-solid fa-angles-left navtab-slide-prv-button"></i>',
  nextArrow: '<i class="fa-solid fa-angles-right navtab-slide-nxt-button"></i>',
  dots: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2
      }
    }
  ]
})

// main slider//
$('.slider_main').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-angles-left main-slide-prv-button"></i>',
    nextArrow: '<i class="fa-solid fa-angles-right main-slide-nxt-button"></i>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 575,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 2
        }
      }
    ]
});

// testimonial slide//
$('.testimonial_slide').slick({
  autoplay: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  autoplaySpeed: 2000,
  arrows: true,
  dots: true,
  prevArrow: '<i class="fa-solid fa-angles-left testimonial-slide-prv-button"></i>',
  nextArrow: '<i class="fa-solid fa-angles-right testimonial-slide-nxt-button"></i>',
})
