console.log("Hello World!")

// Loader
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector(
        "body").style.visibility = "hidden";
      document.querySelector(
        "#load-wrapper").style.visibility = "visible";
  } 
  else {
      document.querySelector(
        "#load-wrapper").style.display = "none";
      document.querySelector(
        "body").style.visibility = "visible";
  }
};


// Smooth-scroll
$('a').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
  }, 300);
  return false;
});


//Fixed-Header
var div_top = $('.header').offset().top;

$(window).scroll(function() {
    var window_top = $(window).scrollTop() - 0;
    if (window_top > div_top) {
        if (!$('.header').is('.sticky')) {
            $('.header').addClass('sticky');
        }
    } else {
        $('.header').removeClass('sticky');
    }
});


