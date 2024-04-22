module.exports = (sequelize, DataTypes) => {
  const Weights = sequelize.define("Weights", {
    weightEntry: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Weights;
};
