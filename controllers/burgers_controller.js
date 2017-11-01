const express = require('express');
const router = express();

const Burger = require('../models/burger.js');

router.get('/', function(req, res){
	Burger.findAll({}).then(function(data){
		var hbsObj = {
			burgers: data
		};
		res.render("index", hbsObj);
	});
});

router.post('/', function(req, res){
	console.log(req.body.burger)
	Burger.create({
		burger_name:req.body.burger,
	}).then(function(data){
		res.redirect('/');
	});
});

router.put('/api/burgers/:id', function(req, res){
	console.log(req.params.id);
	Burger.update({devoured:true},{id:req.params.id}).then(function(result){
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});
module.exports = router;
