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


var download = document.getElementById('download');
// var cvVidButton = document.getElementById('vidButton');
// var cvVideo = document.getElementById('cvVideo');
// var closeCvVideo = document.querySelector('.closeCv');
var devText = document.querySelector('h2');
var scrolldown = document.querySelector('.down');
var textePlay = document.getElementById('hide');
// var titleName = document.querySelector('h1');
// var visitorInput = document.getElementById('userInput');
// var visitorName = visitorInput.value;

function showTextDownload (){
  devText.innerHTML ="Télégarger le CV pdf";
}


function showTextPlay(){
  devText.innerHTML ="Lire la vidéo de présentation";
}

function hideTextPlay(){
  devText.innerHTML ="Développeur web";
}

function showTextScroll(){
  devText.innerHTML ="Découvrir la page suivante";
}
function hideTextScroll(){
  devText.innerHTML ="Développeur Web";
}





// cvVidButton.addEventListener('mouseout', hideTextPlay);
// cvVidButton.addEventListener('mouseover', showTextPlay);
scrolldown.addEventListener('mouseout', hideTextScroll);
scrolldown.addEventListener('mouseover', showTextScroll);
// titleName.addEventListener('mouseover' , sayMe);
download.addEventListener('mouseover', showTextDownload);
download.addEventListener('mouseout', hideTextPlay);

// titleName.addEventListener('mouseout' , hideTextPlay);
// visitorInput.addEventListener('input', UserName);
// textePlay.innerHTML =" " + "Lire la vidéo de présentation";

// cvVidButton.addEventListener('click', openModal, false);
// closeCvVideo.addEventListener('click', closeModal, false);

//  $('h1').on('click', function() {
//
//     $("#cvVideo")[0].src += "?autoplay=0";
//         ev.preventDefault();
// });
//
//
// // lecture youtube à l'ouverture.
// $(document).ready(function() {
//   $('#vidButton').on('click', function(ev) {
//
//     $("#cvVideo")[0].src += "&autoplay=1";
//     ev.preventDefault();
//
//     $('html,body').animate({
//         scrollTop: $("#cvVideo").offset().top},
//         'slow');
//   });
// });
