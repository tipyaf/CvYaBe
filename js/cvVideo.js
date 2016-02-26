$(document).ready(function() {

  $("#vidButton").animatedModal({
    animatedIn:'slideInLeft',
    animatedOut:'fadeOutLeft',
    color:'#000000'
  });

});

// stop lecture youtube à la fermeture du modal
$('.closeCv').on('click', function() {

    $("#cvVideo")[0].src += "?autoplay=0";
        ev.preventDefault();
});


// lecture youtube à l'ouverture.
// $(document).ready(function() {
//   $('#vidButton').on('click', function(ev) {
//
//     $("#cvVideo")[0].src += "&autoplay=1";
//     ev.preventDefault();
//
//   });
// });
