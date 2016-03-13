



$(".tosavoirs").click(function() {
    $('html,body').animate({
        scrollTop: $("#parcours").offset().top},
        'slow');

});
$(".toblockquote").click(function() {
    $('html,body').animate({
        scrollTop: $("#blockquote").offset().top},
        'slow');
});
$(".toparcours").click(function() {
    $('html,body').animate({
        scrollTop: $("#savoir-etre").offset().top},
        'slow');
});
$(".toetre").click(function() {
    $('html,body').animate({
        scrollTop: $("#savoirs").offset().top},
        'slow');
});
$(".tocontacts").click(function() {
    $('html,body').animate({
        scrollTop: $("#contacts").offset().top},
        'slow');
});
