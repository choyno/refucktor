
module.exports = {
  dashboard: function(req, res){
   res.view('users/dashboard',{user: req.user} )
  },
  login: function(req, res){
    res.view('users/login')
  },
  signup: function(req, res){
    res.view('users/signup')
  },
  create: function(req, res){
    User.create(req.allParams()).exec(function userCreated(err, user){
      req.logIn(user, function(err) {
	if (err) res.send(err);
	res.redirect('/dashboard');
      });
    })
  }
};

