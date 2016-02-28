// $(document).ready(function() {
//
//   $("#vidButton").animatedModal(
//     {
//     animatedIn:'slideInLeft',
//     animatedOut:'fadeOutLeft',
//     color:'#000000'
//   }
// );
//
// });



var cvVidButton = document.getElementById('vidButton');
var cvVideo = document.getElementById('cvVideo');
var closeCvVideo = document.querySelector('h1');
cvVideo.style.display = "none";

function openModal(){
cvVideo.style.display = "block";
}

function closeModal(){
  cvVideo.style.display = "none";
}


cvVidButton.addEventListener('click', openModal, false);
closeCvVideo.addEventListener('click', closeModal, false);

 $('h1').on('click', function() {

    $("#cvVideo")[0].src += "?autoplay=0";
        ev.preventDefault();
});


// lecture youtube à l'ouverture.
$(document).ready(function() {
  $('#vidButton').on('click', function(ev) {

    $("#cvVideo")[0].src += "&autoplay=1";
    ev.preventDefault();

    $('html,body').animate({
        scrollTop: $("#cvVideo").offset().top},
        'slow');
  });
});
