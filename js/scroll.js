$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(document).ready(function(){
  // slider chứng nhận
  $('.carousel').carousel();
  $('.carousel.carousel-slider').carousel({full_width: true});

  // slider banner
  $('.slider').slider({full_width: true});

  //
  Materialize.updateTextFields();

  //
  $('.tooltipped').tooltip({delay: 50});
});
        






        

