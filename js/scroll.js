var body = document.querySelector('body');

if (body.addEventListener) body.addEventListener('DOMMouseScroll', wheel, false);
body.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 130;
    else if (event.detail) delta = -event.detail / 30;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

function handle(delta) {
    var time = 800;
	var distance = 300;

    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
}

$(document).ready(function() {

  $('.home .parallax-window').parallax({imageSrc: '../images/macback.jpg'});
  $('.savoirs .parallax-window').parallax({imageSrc: '../images/knowback.jpg'});
  $('.competences .parallax-window').parallax({imageSrc: '../images/bodyback.jpg'});
  $('savoir-etre .parallax-window').parallax({imageSrc: '../images/myback.jpg'});
  // $('.article').parallax({imageSrc: '../images/homeback.jpg'});
});
