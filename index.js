var dust = require('dust')();
var serand = require('serand');

dust.loadSource(dust.compile(require('./template'), 'user-register'));

module.exports = function (sanbox, options, done) {
    dust.render('user-register', {}, function (err, out) {
        if (err) {
            return done(err);
        }
        sanbox.append(out);
        done(null, function () {
            sanbox.remove('.user-register');
        });
    });
};

var user;
/*

 setTimeout(function () {
 var serand = require('serand');
 serand.emit('user', 'login', { username: 'ruchira'});
 }, 4000);*/
