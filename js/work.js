$(function(){
  function resizeForm(){
    var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth;
    if(width > 1366){
      $(".gallery").niceScroll(".overflow-width",{
        scrollspeed: 60,
        mousescrollstep: 100,
        cursorwidth: 5,
        cursorborder: "0px solid dark grey",
      });
    }
  }
  window.onresize = resizeForm;
  resizeForm();
});

let $images = $('.myImages');

for (var i = 0; i < $images.length; i++) {
  $('.myImages').on('click', function(){
    $('#myModal').css("display", "block");
    $('#img01').attr("src", this.src);
    $('#img-header').html(this.id);
    $('#caption').html(this.alt);
  });
}

// deber de click y scroll

$('.close').click(function(){
  $('#myModal').addClass("transition-out");
  setTimeout(function(){
    $('#myModal').css("display", "none");
    $('#myModal').removeClass("transition-out");
  }, 500);
});

$(function(){
  $(window).scroll(function(){
    if ($(document).scrollTop() > 500) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
});
