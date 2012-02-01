
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'CloudSpokes Node.js Dev Server' })
};