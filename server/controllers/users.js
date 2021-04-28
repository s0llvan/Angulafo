const sha256 = require('crypto-js/sha256');
const hmacSHA512 = require('crypto-js/hmac-sha512');
const Base64 = require('crypto-js/enc-base64');
const uniqid = require('uniqid');

const User = require('../models/').User;
const Post = require('../models/').Post;
const Topic = require('../models/').Topic;

module.exports = {
	
	create(req, res) {
		
		var data = req.body;
		
		if (data.password == data.passwordConfirmation) {
			var passwordHash = sha256(data.password);
			data.password = Base64.stringify(hmacSHA512(passwordHash, 'r$kB^a59Ju)s9{THJ]'));
			data.roles = JSON.stringify(['USER']);
			data.session = uniqid();
			
			User.create(data).then(user => {
				res.status(200).json({
					'username': user.username,
					'session': user.session
				});
			}).catch(function (err) {
				res.status(400).json([{
					'message': 'An error with database was occured'
				}])
			});
		} else {
			res.status(400).json([{
				'message': 'Wrong password confirmation !',
				'path': 'passwordConfirmation'
			}]);
		}
	},
	
	showAll(req, res) {
		User.findAll({
			include: [{
				model: Post
			}, {
				model: Topic
			}]
		}).then(users => {
			res.status(200).json(users);
		}).catch((err) => {
			res.status(400).json(err.errors);
		});
	},
	
	show(req, res) {
		var userId = req.params.id;
		
		User.findOne({
			where: {
				id: userId
			},
			include: [{
				model: Topic
			}, {
				model: Post
			}]
		}).then(user => {
			user.roles = JSON.parse(user.roles);
			res.status(200).json(user);
		}).catch((err) => {
			res.status(400).json(err.errors);
		});
	},
	
	update(req, res) {

		var userId = req.params.id;
		var data = req.body;
		
		User.update({
			username: data.username,
			roles: JSON.stringify(data.roles)
		}, {
			where: {
				id: userId
			}
		}).then(user => {
			res.status(200).json();
		}).catch((err) => {
			res.status(400).json(err.errors);
		});
	},
	
	delete(req, res) {
		var userId = req.params.id;
		
		User.destroy({
			where: {
				id: userId
			}
		}).then(user => {
			res.status(200).json();
		}).catch((err) => {
			res.status(400).json(err.errors);
		});
	}
}
