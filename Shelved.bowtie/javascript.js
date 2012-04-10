function $(el) { return document.getElementById(el); }

function artworkUpdate(artURL) {
	$('#album').attr('src',artUrl);
}

function artworkUpdate(artURL) {
	if (artURL == "") {
		$('album').src = "images/no_art.png";
		$('overlay').src = "images/blank.png";
	} else {
		$('album').src = artURL;
		$('overlay').src = "images/overlay.png";
	}
}   
