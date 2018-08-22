const sha256 = require('crypto-js/sha256');
const hmacSHA512 = require('crypto-js/hmac-sha512');
const Base64 = require('crypto-js/enc-base64');
const uniqid = require('uniqid');

Category = require('../models/').Category;

module.exports= {

	showAll(req, res) {
		
		Category.findAll({}).then(categories => {
			res.status(200).json(categories);
		}).catch((err) => {
			res.status(400).json(err.errors);
		});
	},

}