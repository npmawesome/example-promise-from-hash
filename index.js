var Promise = require('bluebird');
var promiseFromHash = require('promise-from-hash');
var request = require('request');

function fetch(city) {
  return new Promise(function(resolve) {
    request.get('http://api.openweathermap.org/data/2.5/weather', {json: true, qs: {q: city}}, function(err, response) {
      resolve(response.body);
    });
  });
}

var weather = {
  'sf': fetch('San Francisco'),
  'nyc': fetch('New York')
};

promiseFromHash(weather).then(function(weather) {
  console.log(JSON.stringify(weather, null, 2));
});
