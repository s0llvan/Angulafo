const sha256 = require('crypto-js/sha256');
const hmacSHA512 = require('crypto-js/hmac-sha512');
const Base64 = require('crypto-js/enc-base64');
const uniqid = require('uniqid');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

User = require('../models/').User;

module.exports= {

	logIn(req, res) {

		var user = req.body;

		var passwordHash = sha256(user.password);
		user.password = Base64.stringify(hmacSHA512(passwordHash, 'r$kB^a59Ju)s9{THJ]'));		

		User.find({
			where: {
				[Op.and]: [{username: user.username}, {password: user.password}]
			}
		}).then(user => {

			if(user) {
				let session = uniqid();

				User.update(
					{ session: session },
					{ where: { id: user.id } }
					)
				.then(result => {
					res.status(200).json({
						'username': user.username,
						'session': session
					})
				})
				.catch(err => {
					res.status(400).json(err)
				})
			} else {
				res.status(400).json([
				{
					'message': 'Wrong username or password !'
				}
				]);
			}
			
		}).catch((err) => {
			res.status(400).json(err.errors);
		});
	},
}