const sha256 = require('crypto-js/sha256');
const hmacSHA512 = require('crypto-js/hmac-sha512');
const Base64 = require('crypto-js/enc-base64');
const uniqid = require('uniqid');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

Topic = require('../models/').Topic;

module.exports= {

	create(req, res) {
		
		var token = req.get('Authorization');

		var topic = req.body;

		User.find({ where: {
			'session': token
		}}).then(user => {
			topic.authorId = user.id;

			Topic.create(topic).then(topic => {
				res.status(200).json(topic);
			}).catch(function(err){
				res.status(400).json(err.errors)
			});
		});		
	},

	edit(req, res) {
		
		var token = req.get('Authorization');

		var topic = req.body;

		User.find({ where: {
			'session': token
		}}).then(user => {

			Topic.update(
				{ title: topic.title, message: topic.message },
				{
					where: {
						[Op.and]: [{id: topic.id}, {authorId: user.id}]
					}
				}
				)
			.then(topic => {
				if(topic[0]) {
					res.status(200).json(topic);
				} else {
					res.status(401).json({});
				}
			}).catch(function(err){
				res.status(400).json(err.errors)
			});
		});		
	},

	show(req, res) {

		var topicId = req.params.id;

		console.log(topicId);

		Topic.findOne({
			where: { id: topicId },
			include: {
				model: User,
				attributes: ['username']
			}
		}).then(topic => {
			res.status(200).json(topic);
		}).catch((err) => {
			res.status(400).json(err.errors);
		});
	},
}