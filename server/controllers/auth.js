const sha256 = require('crypto-js/sha256');
const hmacSHA512 = require('crypto-js/hmac-sha512');
const Base64 = require('crypto-js/enc-base64');
const uniqid = require('uniqid');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const User = require('../models/').User;

module.exports = {
	
	logIn(req, res) {
		
		var data = req.body;
		
		var passwordHash = sha256(data.password);
		data.password = Base64.stringify(hmacSHA512(passwordHash, 'r$kB^a59Ju)s9{THJ]'));
		
		User.find({
			where: {
				[Op.and]: [{
					username: data.username
				}, {
					password: data.password
				}]
			},
			attributes: {
				include: ['id', 'username', 'roles']
			}
		}).then(user => {
			
			if (user) {
				let session = uniqid();
				
				User.update({
					session: session
				}, {
					where: {
						id: user.id
					}
				})
				.then(result => {
					user.session = session;
					
					res.status(200).json(user)
				})
				.catch(err => {
					res.status(400).json(err)
				})
			} else {
				res.status(400).json([{
					'message': 'Wrong username or password !'
				}]);
			}
			
		}).catch((err) => {
			res.status(400).json(err.errors);
		});
	},
}
