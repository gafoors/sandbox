var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var now = new Date();
  res.render('index', { title: 'Express', date: 'Saturday 31st Oct 2014' });
});

module.exports = router;
