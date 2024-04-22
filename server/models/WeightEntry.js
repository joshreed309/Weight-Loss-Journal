module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    weightEntry: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Posts;
};
