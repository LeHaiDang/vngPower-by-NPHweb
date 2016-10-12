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

// slider chứng nhận
$(document).ready(function(){
  $('.carousel').carousel();
   $('.carousel.carousel-slider').carousel({full_width: true});
});

//slider banner
$(document).ready(function(){
  $('.slider').slider({full_width: true});
});


$(document).ready(function() {
  Materialize.updateTextFields();
});


$(document).ready(function(){
  $('.tooltipped').tooltip({delay: 50});
});

// phóng to ảnh
$(document).ready(function(){
  $('.materialboxed').materialbox();
});
        






        

