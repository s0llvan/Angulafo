'use strict';
module.exports = (sequelize, DataTypes) => {
	var Category = sequelize.define('Category', {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				is: /^[a-zA-Z0-9 ]+$/i,
				notEmpty: true,
				len: [3,32]
			}
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				is: /^[a-zA-Z0-9 ]+$/i,
				notEmpty: false,
				len: [8,255]
			}
		}
	}, { tableName: 'categories' });
	Category.associate = function(models) {
		Category.hasMany(models.Topic, {
			foreignKey: 'categoryId',
			onDelete: 'CASCADE'
		});
	};
	return Category;
};