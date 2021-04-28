const sha256 = require('crypto-js/sha256');
const hmacSHA512 = require('crypto-js/hmac-sha512');
const Base64 = require('crypto-js/enc-base64');
const uniqid = require('uniqid');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const Post = require('../models/').Post;
const User = require('../models/').User;

module.exports= {
	
	create(req, res) {
		
		var token = req.get('Authorization');
		
		var data = req.body;
		
		User.find({ where: {
			'session': token
		}}).then(user => {
			data.authorId = user.id;
			
			Post.create(data).then(post => {
				res.status(200).json(post);
			}).catch(function(err){
				res.status(400).json(err.errors)
			});
		});		
	},
}