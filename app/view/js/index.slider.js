var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight;
//=============================================================index slider
  if (x < 1024){
    $('#indexSlider').removeAttr( "data-ride" );
    console.log ('slide');
  } else {
    $('#indexSlider').carousel({
      interval: 60000
    });
  }
  //================================================================================scroll top button
  $(document).ready(function(){
   // hide #back-top first
   $("#scrollTop").hide();
   // fade in #back-top
   $(function () {
     $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
         $('#scrollTop').fadeIn();
       } else {
         $('#scrollTop').fadeOut();
       }
     });
     // scroll body to 0px on click
     $('#scrollTop button').click(function () {
       $('body,html').animate({
         scrollTop: 0
       }, 800);
     });
   });
  });
