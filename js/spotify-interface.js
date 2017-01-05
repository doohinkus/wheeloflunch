var Spotify = require('./../js/spotify.js').spotifyModule;

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// var token = getParameterByName('code');



var currentArtist =new Spotify();


$(document).ready(function (){
  $("#search").click(function (event){
    var artist = $('input#artist').val();
    console.log(artist);
    currentArtist.getResult(artist);
  });
});
