var express = require('express');

module.exports = function setup(options, imports, register) {
    var app = express();
    var server = imports.server.app;

    app.get('/', function (req, res) {
        res.send("Welcome to frontend");
    });

    server.use(app);

    register(null, {
        frontend: { app: app },
    });
};