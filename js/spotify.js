var spotify = require('spotify');

Spotify = function() {
};
// https://accounts.spotify.com/authorize/?client_id=ecefde8f7bd945c19388d83cd411da9a&response_type=code&redirect_uri=http://localhost:3000
// https://api.spotify.com/v1/recommendations?seed_genres=deep-house&limit=100

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

var token = getParameterByName('code');

console.log(token);
Spotify.prototype.getResult = function(artist, token) {
// https://api.spotify.com/v1/recommendations?seed_genres=deep-house&limit=100
    $.get('https://api.spotify.com/v1/recommendations?seed_artists=' + artist + '&limit=' + "100"+"&access_token="+token)
    .then(function(response) {
          console.log(response);
      })
      .fail(function(error) {
        console.log(error.responseJSON.message);
      });

  // https://api.spotify.com/v1/recommendations?seed_genres=deep-house&limit=100

//   $.get('https://api.spotify.com/v1/recommendations?seed_genres=' + "deep-house" + '&limit=' + "100")
//   .then(function(response) {
//         console.log(response);
//     })
//     .fail(function(error) {
//       console.log(error.responseJSON.message);
//     });
};

exports.spotifyModule = Spotify;
