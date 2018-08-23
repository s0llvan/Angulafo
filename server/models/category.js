'use strict';
module.exports = (sequelize, DataTypes) => {
	var Category = sequelize.define('Category', {
		title: DataTypes.STRING,
		description: DataTypes.STRING
	}, {});
	Category.associate = function(models) {
		Category.hasMany(models.Topic, {
			foreignKey: 'categoryId',
			onDelete: 'CASCADE'
		});
	};
	return Category;
};