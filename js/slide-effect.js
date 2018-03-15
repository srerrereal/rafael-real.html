$(document).ready(function() {

  $('.web-design-icon').mouseenter(function () {

    $('.web-design-subtitle').fadeIn('slow');

    });
        $('.web-design-icon').mouseleave(function () {

            $('.web-design-subtitle').fadeOut('slow', function () {

              });
          });
  $('.smartphone-icon').mouseenter(function () {

    $('.app-subtitle').fadeIn('slow');

    });
        $('.smartphone-icon').mouseleave(function () {

            $('.app-subtitle').fadeOut('slow', function () {

              });
          });

  $('#home-button').mouseenter(function () {

    $('#go-back').toggle( 'slide' ).delay( 800 ).fadeIn( 400 );


    });
        $('#home-button').mouseleave(function () {

            $('#go-back').fadeOut('fast', function () {

              });
          });


//----------------carousel-----------------------------------------//
  

});
