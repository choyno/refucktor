var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    email: {
      type: 'email',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      minLength: 6,
      required: true
    },
    posts: {
      collection: 'post',
      via: 'user'
    },
    favoritePosts: {
      collection: 'post',
      through: 'favorite'
    }
  },
  beforeCreate: function(user, next){
    bcrypt.genSalt(10, function(err, salt){
      bcrypt.hash(user.password, salt, function(err, hash){
	if (err){
	  console.log(err);
	  next(err);
	} else {
	  user.password = hash;
	  next();
	}
      });
    });
  }
};

