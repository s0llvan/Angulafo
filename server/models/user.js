'use strict';

module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define('User', {
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isAlphanumeric: true,
				notEmpty: true,
				len: [3,12]
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
				len: [7,255]
			}
		},
		session: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true
		}
	}, {
		underscored: true,
	});
	User.associate = function(models) {
		User.hasMany(models.Topic, {
			foreignKey: 'authorId',
			onDelete: 'CASCADE'
		});
	};
	return User;
};