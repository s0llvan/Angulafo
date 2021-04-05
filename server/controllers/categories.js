const sha256 = require('crypto-js/sha256');
const hmacSHA512 = require('crypto-js/hmac-sha512');
const Base64 = require('crypto-js/enc-base64');
const uniqid = require('uniqid');

Category = require('../models/').Category;
Topic = require('../models/').Topic;
User = require('../models/').User;

module.exports = {
	
	showAll(req, res) {
		
		Category.findAll({
			include: {
				model: Topic,
				include: [{
					model: User,
					attributes: ['username']
				},
				{
					model: Post,
					attributes: ['message', 'createdAt'],
					required: false,
					include: [{
						model: User,
						attributes: ['username']
					}, ]
				}
			]
		}
	}).then(categories => {
		res.status(200).json(categories);
	}).catch((err) => {
		res.status(400).json(err.errors);
	});
},

show(req, res) {
	
	var categoryId = req.params.id;
	
	Category.findOne({
		where: {
			id: categoryId
		},
		include: {
			model: Topic,
			include: [{
				model: User,
				attributes: ['username']
			},
			{
				model: Post,
				attributes: ['message', 'createdAt'],
				required: false,
				include: [{
					model: User,
					attributes: ['username']
				}, ]
			}
		]
	},
	order: [
		[Topic, 'createdAt', 'DESC']
	]
}).then(category => {
	res.status(200).json(category);
}).catch((err) => {
	res.status(400).json(err.errors);
});
},
}
