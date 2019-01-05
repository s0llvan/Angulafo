'use strict';
module.exports = (sequelize, DataTypes) => {
	var Category = sequelize.define('Category', {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isAlphanumeric: true,
				notEmpty: true,
				len: [3,32]
			}
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				isAlphanumeric: true,
				notEmpty: false,
				len: [8,255]
			}
		}
	}, {});
	Category.associate = function(models) {
		Category.hasMany(models.Topic, {
			foreignKey: 'categoryId',
			onDelete: 'CASCADE'
		});
	};
	return Category;
};