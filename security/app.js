var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    user = require('./model'),
    debug = require('debug')('bauhaus:security');

module.exports = function setup(options, imports, register) {

    var backend = imports.backend;    

    var security = {
        passport: passport,
        models: {
            user: user
        }
    };

    passport.use(new LocalStrategy(
        function(username, password, done) {
            User.findOne({ username: username }, function (err, user) {
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (!user.validPassword(password)) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
              return done(null, user);
            });
        }
    ));

    // use static authenticate method of model in LocalStrategy
    passport.use(new LocalStrategy(user.model.authenticate()));

    // use static serialize and deserialize of model for passport session support
    passport.serializeUser(user.model.serializeUser());
    passport.deserializeUser(user.model.deserializeUser());

    backend.app.use('/api',user.api);

    register(null, {
        security: security
    });
};