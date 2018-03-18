$(document).ready(function(){


  $(window).scroll(function() {
  if ($(this).scrollTop()> 200) {
  $('.scrolltop').fadeIn();
  } else {
  $('.scrolltop').fadeOut();
  }
  });

  $(window).scroll(function() {
  if ($(this).scrollTop()> 300) {
  $('.scrolltop2').fadeIn();
  } else {
  $('.scrolltop2').fadeOut();
  }
  });
  $(window).scroll(function() {
  if ($(this).scrollTop()> 500) {
  $('.scrolltop3').fadeIn();
  } else {
  $('.scrolltop3').fadeOut();
  }
  });


});
