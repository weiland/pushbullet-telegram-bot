var PushBullet = require('pushbullet');
var config = require('./config');
var pusher = new PushBullet(config.pushbullet.key);

function getPush(callback) {
  var options = {
    modified_after: (+new Date()/1000).toFixed(5)
  };
  pusher.history({}, function(err, response) {
    if (err) { throw err; }
    var pushes = response.pushes;
    var latestPush = pushes[0];
    console.log(latestPush, pushes);
    callback(latestPush.body);
  });
}

function listen(callback) {
  var stream = pusher.stream();
  stream.connect();
  stream.on('connect', function() {
    console.log('listening to push');
  });
  stream.on('tickle', function(message) {
    console.log(message);
    getPush(callback);
  });
}

exports.listen = listen;

