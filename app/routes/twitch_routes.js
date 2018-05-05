// routes/twitch_routes.js

module.exports = function(app, db) {
    app.post('/twitch', (req, res) => {
        res.send('Twitch!!!');
    });
};
