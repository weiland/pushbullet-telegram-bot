var telegram = require('./telegram');
var pushbullet = require('./pushbullet');

pushbullet.listen(handlePush);

function handlePush(message) {
  telegram.send(message);
}

