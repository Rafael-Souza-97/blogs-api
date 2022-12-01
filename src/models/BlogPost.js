'use strict';

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    published: {
      allowNull: true,
      type: DataTypes.DATE
    },
    updated: {
      allowNull: true,
      type: DataTypes.DATE
    },
   }, {
      timestamps: false,
      tableName: 'blog_posts',
      underscored: true,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'id',
      as: 'user',
    });
  };

  // BlogPost.associate = (models) => {
  //   BlogPost.hasMany(models.User, {
  //     foreignKey: 'post_id'
  //   });
  // };

  return BlogPost;
};
