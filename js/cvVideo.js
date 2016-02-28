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
// var cvVideo = document.getElementById('cvVideo');
var closeCvVideo = document.querySelector('.closeCv');
var devText = document.querySelector('h2');
var scrolldown = document.querySelector('.down');
var textePlay = document.getElementById('hide');
var titleName = document.querySelector('h1');
var visitorInput = document.getElementById('userInput');
var visitorName = visitorInput.value;

function showTextPlay(){
  devText.innerHTML =" " + "Lire la vidéo de présentation";
  visitorInput.style.display = "none";
}
function hideTextPlay(){
  devText.innerHTML ="Développeur web";
  visitorInput.style.display = "none";
}

function showTextScroll(){
  devText.innerHTML ="Découvrir la page suivante";
  visitorInput.style.display = "none";
}
function hideTextScroll(){
  devText.innerHTML ="Développeur web";
}

var closeInput;

function hideInput(){
   visitorInput.style.display = "none";
    devText.innerHTML ="Bienvenue " + visitorInput.value.toUpperCase();
}



function userName(){
 titleName.innerHTML = "Bonjour "+ visitorInput.value.toUpperCase() + " !";
 closeInput = setTimeout(hideInput, 3000);


}
function sayMe(){
    devText.innerHTML =" Et vous, comment vous appelez vous ? ";
    visitorInput.style.display="block";
}

// textePlay.style.display = "none";

// function openModal(){
// textePlay.style.display = "block";
// }
//
// function closeModal(){
//   texte.style.display = "none";
// }


visitorInput.style.display = "none";

cvVidButton.addEventListener('mouseout', hideTextPlay);
cvVidButton.addEventListener('mouseover', showTextPlay);
scrolldown.addEventListener('mouseout', hideTextScroll);
scrolldown.addEventListener('mouseover', showTextScroll);
titleName.addEventListener('mouseover' , sayMe);
// titleName.addEventListener('mouseout' , hideTextPlay);
// visitorInput.addEventListener('input', UserName);
// textePlay.innerHTML =" " + "Lire la vidéo de présentation";

// cvVidButton.addEventListener('click', openModal, false);
// closeCvVideo.addEventListener('click', closeModal, false);

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
