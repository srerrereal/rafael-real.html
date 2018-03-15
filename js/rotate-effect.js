$(document).ready(function(){


$(".resume-button").rotate({
  bind:
  {
    mouseover : function() {
    $('.resume-polygon').rotate({animateTo:90})
  },
  mouseout : function() {
    $('.resume-polygon').rotate({animateTo:0})
    }
  }

});
$(".portfolio-button").rotate({
  bind:
  {
    mouseover : function() {
    $('.portfolio-polygon').rotate({animateTo:90})
  },
  mouseout : function() {
    $('.portfolio-polygon').rotate({animateTo:0})
    }
  }

});
$(".contact-button").rotate({
  bind:
  {
    mouseover : function() {
    $('.contact-polygon').rotate({animateTo:90})
  },
  mouseout : function() {
    $('.contact-polygon').rotate({animateTo:0})
    }
  }

});

});
