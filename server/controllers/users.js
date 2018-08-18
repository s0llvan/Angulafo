const sha256 = require('crypto-js/sha256');
const hmacSHA512 = require('crypto-js/hmac-sha512');
const Base64 = require('crypto-js/enc-base64');
const uniqid = require('uniqid');

User = require('../models/').User;

module.exports= {

	create(req, res) {
		
		var user = req.body;

		if(user.password == user.password_confirmation)
		{
			var passwordHash = sha256(user.password);
			user.password = Base64.stringify(hmacSHA512(passwordHash, 'r$kB^a59Ju)s9{THJ]'));

			user.session = uniqid();

			User.create(user).then(user => {
				res.status(200).json({
					'username': user.username,
					'session': user.session
				});
			}).catch(function(err){
				res.status(400).json(err.errors)
			});
		}
		else
		{
			res.status(400).json([
			{
				'message': 'Wrong password confirmation !',
				'path': 'password_confirmation'
			}
			]);
		}
	},

}