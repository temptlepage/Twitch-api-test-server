// routes/index.js

const twitchRoutes = require('./twitch_routes');

module.exports = function(app, db) {
    twitchRoutes(app, db);
};
