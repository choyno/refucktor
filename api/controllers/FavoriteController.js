/**
 * FavoriteController
 *
 * @description :: Server-side logic for managing favorites
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function(req, res){
    var userId = req.user.id;
    var postId = req.param('postId');

    User.findOne(req.user.id).exec(function(err, user){
      if (err) res.json(err);

      user.favoritePosts.add(postId);

      user.save(function(err){
	res.json({message: 'Success'})	
      })
    })
  }
};

