'use strict';

const faker = require('faker')

module.exports = {
	up: async (queryInterface, Sequelize) => (
		queryInterface.bulkInsert('categories', [...Array(7)].map(() => ({
			title: faker.random.words(1),
			description: faker.random.words(8),
			createdAt: new Date(),
			updatedAt: new Date(),
		})), {})
		),
		
		down: (queryInterface, Sequelize) => {
			return queryInterface.bulkDelete('categories', null, {});
		}
	};
	