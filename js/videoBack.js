var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#pauseButton");

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed
vid.pause();
// to capture IE10
vidFade();
});


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.className = "fa fa-pause";
  } else {
    vid.pause();
    pauseButton.className = "fa fa-play";
  }
});
vid.volume = 0;

// fadeout pausebutton

$(document).ready(function(){
	// fade in #pausebutton
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 500) {
				$('#pauseButton').fadeOut();
        vid.pause();
			} else {
				$('#pauseButton').fadeIn();
        vid.play();
			}
		});

		// scroll body to 0px on click
		$('#pauseButton').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});
