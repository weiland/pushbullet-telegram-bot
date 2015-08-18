# Pushbullet Telegram Bot

This repo contains a telegram bot which will receive pushbullet push messages. Basically, pushbullet notifications will be forwarded to Telegram.

## Initial setup
```bash
# install dependencies
npm i

# create a config.sj
mv config.js.sample config.js

# place pushbullet key, telegram token and chat id into config.js
vim/mate/subl config.js

# run the bot server
npm start

```

## Todo
- [ ] Write Tests
- [ ] Support more Pushbullet features (audio,files,links,clipboard)
- [ ] Simplify bot setup process
- [ ] Pushover integration?

## License
MIT

