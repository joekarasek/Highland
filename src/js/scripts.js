(function($, HelloWorldDevsTysonSteele) {

  // ======= Fixes =======
  HelloWorldDevsTysonSteele.noOrphans('h1,h2,h3,h4,h5,h6,li,p', '.allow-orphan');
  HelloWorldDevsTysonSteele.scrollToFix('#primary-menu');

  // ======= Request Appointment Form =======
  HelloWorldDevsTysonSteele.requestAppointment('#mail-form', '#success_msg' , '7fb35345-752d-4792-9480-cd3db6674a62');

  // ======= Carousels =======
  HelloWorldDevsTysonSteele.marqueeCarousel({
    autoplay: 6000,
    effect: 'fade',
    speed: 500
  });

  HelloWorldDevsTysonSteele.tourCarousel('.js-reviews-carousel', {
    items: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 400,
    autoplayTimeout: 6000,
    autoplayHoverPause:true,
    nav: true,
    dots: false,
    margin: 0,
    navText: [
      '<img src="/assets/left-arrow-reviews.png" alt="review carousel left arrow"></img>',
      '<img src="/assets/right-arrow-reviews.png" alt="review carousel right arrow"></img>',
      ''
    ]
  });
  
  HelloWorldDevsTysonSteele.pyramidCarousel('.js-team-carousel', {
    items: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 400,
    autoplayTimeout: 6000,
    autoplayHoverPause:true,
    nav: true,
    dots: false,
    margin: 0,
    navText: [
      '<img src="/assets/left-arrow.png" alt="team carousel left arrow"></img>',
      '<img src="/assets/right-arrow.png" alt="team carousel right arrow"></img>',
      ''
    ],
    responsive: {
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 3
      },
      1200: {
        items: 4,
        nav: false
      }
    }
  });

  HelloWorldDevsTysonSteele.pyramidCarousel('.js-services-carousel', {
    items: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 400,
    autoplayTimeout: 6000,
    autoplayHoverPause:true,
    nav: true,
    dots: false,
    margin: 0,
    navText: [
      '<img src="/assets/left-arrow.png" alt="services carousel left arrow"></img>',
      '<img src="/assets/right-arrow.png" alt="services carousel right arrow"></img>',
      ''
    ],
    responsive: {
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 3
      }
    }
  });

  HelloWorldDevsTysonSteele.associationCarousel('.js-associations-carousel', {
    items: 2,
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 2000,
    autoplayHoverPause:false,
    autoWidth: false,
    nav: false,
    dots: false,
    margin: 40,
    slideBy: 1,
    responsive: {
      550: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 5
      },
      1200: {
        items: 7
      }
    }
  });
  HelloWorldDevsTysonSteele.updateCopyright('.js-copyright-year');

  // ======= Google Maps =======
  HelloWorldDevsTysonSteele.googleMap('#google-map5', '47.647946,-122.333794', '47.647946,-122.333794');

  $('#modal--video').on('hidden.bs.modal', function() {
    var $videoTarget = $('#smile-video');
    $('#smile-video').attr('src', $videoTarget.attr('src'));
  });


}(jQuery, HelloWorldDevsTysonSteele));

