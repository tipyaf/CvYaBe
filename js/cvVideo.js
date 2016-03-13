

var download = document.getElementById('download');
var devText = document.querySelector('h2');
var scrolldown = document.querySelector('.down');
var textePlay = document.getElementById('hide');

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





scrolldown.addEventListener('mouseout', hideTextScroll);
scrolldown.addEventListener('mouseover', showTextScroll);
download.addEventListener('mouseover', showTextDownload);
download.addEventListener('mouseout', hideTextPlay);
