$(function () {


    $('#searchToggler').on('click', function (e) {
        e.preventDefault();
        $(this).find('.fa-search, .fa-times').toggleClass('d-none');
        $('#search').toggleClass('active');
    });



   
 // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
    }
  }); 

});
