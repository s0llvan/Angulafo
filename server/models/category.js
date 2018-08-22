'use strict';
module.exports = (sequelize, DataTypes) => {
	var Category = sequelize.define('Category', {
		title: DataTypes.STRING,
		description: DataTypes.STRING
	}, {});
	Category.associate = function(models) {
		
	};
	return Category;
};