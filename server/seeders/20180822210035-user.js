'use strict';

const faker = require('faker')

module.exports = {
	up: async (queryInterface, Sequelize) => (
		queryInterface.bulkInsert('Users', [...Array(7)].map(() => ({
			username: faker.internet.userName(),
			password: faker.internet.password(),
			createdAt: new Date(),
			updatedAt: new Date(),
		})), {})
		),

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	}
};
