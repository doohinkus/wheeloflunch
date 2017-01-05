var Yelp = require('yelp');
// alert()
var yelp = new Yelp({
  consumer_key: 'iWf-75M-bOhSzhwMDXD8ZQ',
  consumer_secret: 'I7ZmdtklyKMm221GgpyWA64gJwI',
  token: 'bsqKgXWQ3eMRMLZyjo-3AYMf1xPhpXxN',
  token_secret: 'FSOFcRKJBsr7YIXIiHVI22QZeGI',
});

yelp.search({ term: 'food', location: "San Francisco" })
.then(function (data) {
  console.log(data);
})
.catch(function (err) {
  console.error(err);
});
