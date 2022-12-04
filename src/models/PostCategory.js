module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      foreignKey: true,
      type: DataTypes.INTEGER,
    }
  }, {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'postId',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    })
  };

  return PostCategory;
};
