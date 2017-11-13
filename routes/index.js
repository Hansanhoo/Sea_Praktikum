var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("HOME sweet Home")
});

router.get('/home',function(req, res, next){
	res.render('index.html');
});
module.exports = router;
