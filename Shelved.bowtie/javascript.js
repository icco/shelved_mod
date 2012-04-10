function $(el) { return document.getElementById(el); }

function artworkUpdate(artURL) {
  if (artURL == "") {
    $('album').src = "images/no_art.png";
    $('overlay').src = "images/blank.png";
  } else {
    $('album').src = artURL;
    $('overlay').src = "images/overlay.png";
  }
}   

function trackChanged(theTrack) {
  var trackTitle = theTrack.title || "Nothing Playing";
  var trackArtist = theTrack.artist || "";
  var trackAlbum = theTrack.album || "";

  $('titleElement').innerHTML = trackTitle;
  $('artistElement').innerHTML = trackArtist;
  $('albumElement').innerHTML = trackAlbum;
}
