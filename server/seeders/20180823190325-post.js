'use strict';

const faker = require('faker')

module.exports = {
	up: async (queryInterface, Sequelize) => (
		queryInterface.bulkInsert('posts', [...Array(32)].map(() => ({
			message: faker.lorem.paragraphs(5),
			topicId: Math.floor(Math.random() * (20 - 1 + 1)) + 1,
			authorId: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
			createdAt: new Date(),
			updatedAt: new Date(),
		})), {})
		),
		
		down: (queryInterface, Sequelize) => {
			return queryInterface.bulkDelete('posts', null, {});
		}
	};
	