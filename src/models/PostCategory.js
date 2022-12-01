module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    post_id: {
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
    category_id: {
      foreignKey: true,
      type: DataTypes.INTEGER,
    }
  }, {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: false,
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'postId',
      through: PostCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categoryId',
      through: PostCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    })
  };

  return PostCategory;
};
