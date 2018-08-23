'use strict';
module.exports = (sequelize, DataTypes) => {
	var Topic = sequelize.define('Topic', {
		title: DataTypes.STRING,
		message: DataTypes.TEXT,
	}, {});
	Topic.associate = function(models) {
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