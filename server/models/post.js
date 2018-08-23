'use strict';
module.exports = (sequelize, DataTypes) => {
	var Post = sequelize.define('Post', {
		message: DataTypes.TEXT,
		topicId: DataTypes.INTEGER,
		authorId: DataTypes.INTEGER
	}, {});
	Post.associate = function(models) {
		Post.belongsTo(models.Topic, {
			foreignKey: 'topicId',
			onDelete: 'CASCADE'
		});

		Post.belongsTo(models.User, {
			foreignKey: 'authorId',
			onDelete: 'CASCADE'
		});
	};
	return Post;
};