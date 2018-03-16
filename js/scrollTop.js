$(document).ready(function(){

  $(window).scroll(function() {
  if ($(this).scrollTop()> 600) {
  $('.scrolltop').fadeIn();
  } else {
  $('.scrolltop').fadeOut();
  }
  });

  $(window).scroll(function() {
  if ($(this).scrollTop()> 1000) {
  $('.scrolltop2').fadeIn();
  } else {
  $('.scrolltop2').fadeOut();
  }
  });


});
