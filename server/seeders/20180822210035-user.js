'use strict';

const faker = require('faker')
const sha256 = require('crypto-js/sha256');
const hmacSHA512 = require('crypto-js/hmac-sha512');
const Base64 = require('crypto-js/enc-base64');

module.exports = {
	up: async (queryInterface, Sequelize) => (
		
		queryInterface.bulkInsert('users', [{
			username: 'admin',
			password: Base64.stringify(hmacSHA512(sha256('password'), 'r$kB^a59Ju)s9{THJ]')),
			roles: JSON.stringify(['USER', 'ADMIN']),
			createdAt: new Date(),
			updatedAt: new Date(),
		}], {}),
		
		queryInterface.bulkInsert('users', [...Array(7)].map(() => ({
			username: faker.internet.userName(),
			password: faker.internet.password(),
			roles: JSON.stringify(['USER']),
			createdAt: new Date(),
			updatedAt: new Date(),
		})), {})
		),
		
		down: (queryInterface, Sequelize) => {
			return queryInterface.bulkDelete('users', null, {});
		}
	};
	