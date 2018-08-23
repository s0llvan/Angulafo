const sha256 = require('crypto-js/sha256');
const hmacSHA512 = require('crypto-js/hmac-sha512');
const Base64 = require('crypto-js/enc-base64');
const uniqid = require('uniqid');

Topic = require('../models/').Topic;

module.exports= {

	create(req, res) {
		
		var token = req.get('Authorization');

		var topic = req.body;

		var categoryId = req.params.id;

		User.find({ where: {
			'session': token
		}}).then(user => {
			topic.authorId = user.id;

			topic.categoryId = categoryId;

			Topic.create(topic).then(topic => {
				res.status(200).json(topic);
			}).catch(function(err){
				res.status(400).json(err.errors)
			});
		});		
	},

}