const sha256 = require('crypto-js/sha256');
const hmacSHA512 = require('crypto-js/hmac-sha512');
const Base64 = require('crypto-js/enc-base64');
const uniqid = require('uniqid');

const Category = require('../models/').Category;
const Topic = require('../models/').Topic;
const Post = require('../models/').Post;
const User = require('../models/').User;

module.exports = {
	
	create(req, res) {
		
		var data = req.body;

		Category.create(data).then(category => {
			res.status(200).json(category);
		}).catch(function (err) {
			res.status(400).json([{
				'message': err.message
			}])
		});
	},
	
	showAll(req, res) {
		
		Category.findAll({
			include: {
				model: Topic,
				include: [
					{
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
				}]
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
	
	update(req, res) {
		
		var categoryId = req.params.id;
		var data = req.body;
		
		Category.update({
			title: data.title
		}, {
			where: {
				id: categoryId
			}
		}).then(category => {
			res.status(200).json(category);
		}).catch((err) => {
			res.status(400).json(err.errors);
		});
	},
	
	delete(req, res) {
		var categoryId = req.params.id;
		
		Category.destroy({
			where: {
				id: categoryId
			}
		}).then(user => {
			res.status(200).json();
		}).catch((err) => {
			res.status(400).json(err.errors);
		});
	}
}
