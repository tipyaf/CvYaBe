// var body = document.querySelector('body');
//
// if (body.addEventListener) body.addEventListener('DOMMouseScroll', wheel, false);
// body.onmousewheel = document.onmousewheel = wheel;
//
// function wheel(event) {
//     var delta = 0;
//     if (event.wheelDelta) delta = event.wheelDelta / 120;
//     else if (event.detail) delta = -event.detail / 30;
//
//     handle(delta);
//     if (event.preventDefault) event.preventDefault();
//     event.returnValue = false;
// }
//
// function handle(delta) {
//     var time = 500;
// 	var distance = 400;
//
//     $('html, body').stop().animate({
//         scrollTop: $(window).scrollTop() - (distance * delta)
//     }, time );
// }
//
// function downScroll() {
//     window.scrollBy(0, 750);
//
// }




$(".tosavoirs").click(function() {
    $('html,body').animate({
        scrollTop: $("#savoirs").offset().top},
        'slow');

});
$(".toblockquote").click(function() {
    $('html,body').animate({
        scrollTop: $("#blockquote").offset().top},
        'slow');
});
$(".toparcours").click(function() {
    $('html,body').animate({
        scrollTop: $("#parcours").offset().top},
        'slow');
});
$(".toetre").click(function() {
    $('html,body').animate({
        scrollTop: $("#savoir-etre").offset().top},
        'slow');
});
$(".tocontacts").click(function() {
    $('html,body').animate({
        scrollTop: $("#contacts").offset().top},
        'slow');
});

$(document).ready(function() {

  // $('.home .parallax-window').parallax({imageSrc: '../images/macback.jpg'});
  $('.savoirs .parallax-window').parallax({imageSrc: '../images/knowback.jpg'});
  $('.parcours .parallax-window').parallax({imageSrc: '../images/bodyback.jpg'});
  $('savoir-etre .parallax-window').parallax({imageSrc: '../images/myback.jpg'});
  // $('.article').parallax({imageSrc: '../images/homeback.jpg'});
});
