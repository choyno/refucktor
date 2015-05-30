/**
 * TemplateController
 *
 * @description :: Server-side logic for managing templates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  find: function(req,res) {
    var tpl = req.param('id');
    console.log('looking for template' + tpl);
    require('fs').readFile('assets/templates/'+tpl,function (err, contents) {
      if (err){
	console.log(err);
	res.contentType('text/html');
	res.send('');
      }
      else {
	res.contentType('text/html');
	res.send(contents);
      }	 
    });
  }

};

