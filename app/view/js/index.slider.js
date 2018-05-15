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
// =============================================================footer scrollTop btn
