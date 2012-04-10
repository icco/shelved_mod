var pS = 1;
function $(el) {return document.getElementById(el);}

function artworkUpdate(artURL) {
	$('#album').attr('src',artUrl);
}

function artworkUpdate(artURL) {
	if(artURL == "") {
		$('album').src = "images/no_art.png";
		$('overlay').src = "images/blank.png";
	} else {
		$('album').src = artURL;
		$('overlay').src = "images/overlay.png";
	}
}   

function playPause() {
	pS = Player.playState();
	if (pS != (0||2)) { // if playing
		$('playcontrols').src ="images/play.png"; // change the coffee cup to "pause"
		Player.playPause(); // tell itunes to pause
		return false;
	}
	
	else {	// if stopped
		$('playcontrols').src ="images/pause.png";   // change coffee cup to "play"
		Player.playPause(); // tell itunes to play
		return false;
	}
}

function changeTrack() {
	$("fred-link").ondblclick = function () { Player.nextTrack(); } 	
}
