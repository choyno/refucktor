var passport = require('passport');

module.exports = {

    _config: {
        actions: false,
        shortcuts: false,
        rest: false
    },

    login: function(req, res, next) {
      passport.authenticate('local',function(err, user, info){
	if (err) { return next(err); }
	if (!user) {
	  req.flash('message','Invalid email of password.');
	  return res.redirect('/login');
	}
	req.logIn(user, function(err) {
	  if (err) { return next(err); }
	  req.flash('message','Welcome!');
	  return res.redirect('/dashboard');
	});
      })(req, res, next);
    },

    logout: function(req, res) {
        req.logout();
        res.redirect('/');
    }
};
