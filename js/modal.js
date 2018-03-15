$(document).ready(function(){

  $(window).scroll(function() {
  if ($(this).scrollTop()> 600) {
  $('.scrolltop').fadeIn();
  } else {
  $('.scrolltop').fadeOut();
  }
  });

});
