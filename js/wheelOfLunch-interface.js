// var appID = require('./../.env').appID;
// var appSECRET = require('./../.env').appSECRET;
// var appTOKEN = require('./../.env').appTOKEN;
// var Yelp = require('./../js/yelp-test.js').appTOKEN;
var spotify = require('spotify');

spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    var newdata=data.tracks.items;
    console.log(data.tracks.items);
  newdata.forEach(function(title){
    console.log(title);
  });
});

function WheelOfLunch (){
}

// $.get("https://api.yelp.com/v2/search/?oauth_consumer_key=iWf-75M-bOhSzhwMDXD8ZQ&oauth_token=bsqKgXWQ3eMRMLZyjo-3AYMf1xPhpXxN&oauth_signature_method=HMAC-SHA1&oauth_signature=uNwqH7PgxpCy9T5hSj193GsiqmM=&location=San%20Francisco,%20CA&sort=1&limit=6")
// .then(function(response){
//   console.log(response);
// }).fail(function(error){
//   console.log(error);
// });

WheelOfLunch.prototype.getResult = function(location, food) {

  // $.get("https://api.yelp.com"
  // +"/"
  // +appID
  // +"/token")
  // .then(function(response) {
  //   $()
  // })
  // .fail(function(error) {
  //   $().text(error.responseJSON.message);
//   });
};

exports.wheelOfLunchModule = WheelOfLunch;
