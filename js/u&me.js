//deber de focus

$('input').focusout(function(){
  $('.btn').css({"background": "#5E6472",
                "color":"#FFFFFF"});
});

$('input').focusin(function(){
  $('.btn').css({"background": "#B8F2E6",
                "color":"#171717"});
});