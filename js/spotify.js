var spotify = require('spotify');

Spotify = function() {
};
// https://accounts.spotify.com/authorize/?client_id=ecefde8f7bd945c19388d83cd411da9a&response_type=code&redirect_uri=http://localhost:3000
// https://api.spotify.com/v1/recommendations?seed_genres=deep-house&limit=100



// console.log(token);
Spotify.prototype.getResult = function(artist) {
  var token = "BQBqDhDU0n6Vec3U2Bv6HNE8TRaXRRSdK_Pt_z7AXK82p7WHno-kOXqHiz8QvMTLA2lHp5wA3pxmcr7Y_cNhuo7ECo-v132292ChRGEhpZmh5-mFwpP8cEW5zlwhTI92b7EQ5wpn8w";
  var artistID ="";
  spotify.search({ type: 'artist', query: artist }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
     artistID = data.artists.items[0].id;

  console.log(artistID);
  $.ajax({
     url: 'https://api.spotify.com/v1/recommendations?seed_artists=' + artistID + "&limit=10",
     headers: {
         'Authorization': 'Bearer ' + token
     },
     success: function(response) {
       console.log(response);
       var name = response.tracks;
       $("#spotify-response").empty();
       name.forEach(function(artist){
        //  console.log(artist, " ", artist.artists);
         $("#spotify-response").append(
         "<div>"
         +"<img src="
         + artist.album.images[1].url
         +">"
         +"<p><audio controls>"
         +"<source src="
         +artist.preview_url
         +">"
         +"</audio></p>"
         +"<p>"
         +artist.artists[0].name
         +"</p>"
         +"</div>"
       );
         console.log(" images...", artist.album.images[2].url);
        //  $("#spotify-response").append("<p>"+artist.artists[0].name+"</p>");
       });
     },
     failure: function(){
       console.log(error.responseJSON);
     }
  });

});
  //AJAX!!! NOT GET!!!!!!!!!!!!!!!!



};

exports.spotifyModule = Spotify;
