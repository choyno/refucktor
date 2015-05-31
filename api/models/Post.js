/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title: {
      type: 'string'
    },
    body: {
      type: 'text',
      required: 'true'
    },
    vote: {
      type: 'integer',
      defaultsTo: 0
    },
    favorites: {
      type: 'integer',
      defaultsTo: 0
    },
    question: {
      model: 'post'
    },
    answers: {
      collection: 'post',
      via: 'question'
    },
    user: {
      model: 'user'
    },
    favoriteUsers: {
      collection: 'user',
      through: 'favorite'
    }

  }
};

