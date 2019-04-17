const sha256 = require('crypto-js/sha256');
const hmacSHA512 = require('crypto-js/hmac-sha512');
const Base64 = require('crypto-js/enc-base64');
const uniqid = require('uniqid');

User = require('../models/').User;

module.exports = {

	create(req, res) {

		var user = req.body;

		if (user.password == user.password_confirmation) {
			var passwordHash = sha256(user.password);
			user.password = Base64.stringify(hmacSHA512(passwordHash, 'r$kB^a59Ju)s9{THJ]'));
			user.roles = JSON.stringify(['USER']);
			user.session = uniqid();

			User.create(user).then(user => {
				res.status(200).json({
					'username': user.username,
					'session': user.session
				});
			}).catch(function (err) {
				res.status(400).json(err.errors)
			});
		} else {
			res.status(400).json([{
				'message': 'Wrong password confirmation !',
				'path': 'password_confirmation'
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

		var user = req.body;

		User.update({
			username: user.username,
			roles: JSON.stringify(user.roles)
		}, {
			where: {
				id: user.id
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
