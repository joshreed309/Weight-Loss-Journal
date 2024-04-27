module.exports = (sequelize, DataTypes) => {
  const Exercises = sequelize.define("Exercises", {
    exerciseType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exerciseWeight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    exerciseReps: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    exerciseDistance: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    timeTaken: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Exercises;
};
