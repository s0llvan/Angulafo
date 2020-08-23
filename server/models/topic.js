'use strict';
module.exports = (sequelize, DataTypes) => {
	var Topic = sequelize.define('Topic', {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isAlphanumeric: true,
				notEmpty: true,
				len: [3, 32]
			}
		},
		message: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				isAlphanumeric: true,
				notEmpty: true,
				len: [3, 512]
			}
		}
	}, { tableName: 'topics' });
	Topic.associate = function (models) {
		Topic.belongsTo(models.Category, {
			foreignKey: 'categoryId',
			onDelete: 'CASCADE'
		});

		Topic.belongsTo(models.User, {
			foreignKey: 'authorId',
			onDelete: 'CASCADE'
		});

		Topic.hasMany(models.Post, {
			foreignKey: 'topicId',
			onDelete: 'CASCADE'
		});
	};
	return Topic;
};