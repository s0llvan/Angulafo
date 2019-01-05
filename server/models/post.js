'use strict';
module.exports = (sequelize, DataTypes) => {
	var Post = sequelize.define('Post', {
		message: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				isAlphanumeric: true,
				notEmpty: true,
				len: [3,512]
			}
		},
		topicId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				isInt: true,
				notEmpty: true,
			}
		},
		authorId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				isInt: true,
				notEmpty: true,
			}
		}
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