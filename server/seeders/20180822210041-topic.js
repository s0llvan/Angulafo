'use strict';

const faker = require('faker')

module.exports = {
	up: async (queryInterface, Sequelize) => (
		queryInterface.bulkInsert('Topics', [...Array(22)].map(() => ({
			title: faker.random.words(3),
			message: faker.lorem.paragraphs(8),
			categoryId: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
			authorId: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
			createdAt: new Date(),
			updatedAt: new Date(),
		})), {})
		),

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Topics', null, {});
	}
};
