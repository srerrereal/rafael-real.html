$(document).ready(function (){
            $("#projects").click(function (){
                $('html, body').animate({
                    scrollTop: $(".projectScroll").offset().top
                }, 800);
            });
            $("#about").click(function (){
                $('html, body').animate({
                    scrollTop: $(".aboutScroll").offset().top
                }, 800);
            });
            $("#contact").click(function (){
                $('html, body').animate({
                    scrollTop: $(".contactScroll").offset().top
                }, 800);
            });
        });
