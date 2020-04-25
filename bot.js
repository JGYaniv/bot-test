var Discord = require('discord.io');
var auth = require('./auth.json');
var request = require('request');

var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});

bot.on('ready', function (evt) {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function (user, userID, channelID, message, event) {
    if (message === "ping") {
        
        request('https://mysterious-woodland-51815.herokuapp.com/responses', {
        json: true
        }, (err, res, body) => {
            if (err) {
                return console.log(err);
            }
            bot.sendMessage({
                to: channelID,
                message: body.body
            });
            console.log(body.body)
        });

        
    }
});