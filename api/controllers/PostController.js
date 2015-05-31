/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function(req, res){
    var userID = req.user.id;
    var model = {
      title: req.param('title'),
      body: req.param('body'),
      question: req.param('question'),
      user: userID
    }

    Post.create(model).exec(function(err, post){
      if (err) res.send(err);
      console.log(post)
      res.json(post);
    })
  },
  show: function(req, res){
    var postID = req.param('id');

    Post.findOne({id: postID})
      .exec(function(err, post){
	if (err) res.send(err);
	res.view('posts/show');
      });
  },
  vote: function(req, res){
    var vote = req.param('vote');
    var postId = req.param('id');

    Post.findOne(postId).exec(function (err, post){
      if (err) res.json(err);
      if (vote == 'upvote') {
	post.vote = post.vote + 1;
      } else if (vote == 'downvote') {
	post.vote = post.vote - 1;
      }

      post.save(function(err){
	if (err) res.json(err);
	res.json(post);
      });

    })
  }
	
};

