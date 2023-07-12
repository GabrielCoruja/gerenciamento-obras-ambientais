const WorkModel = (sequelize, DataTypes) => {
  const Work = sequelize.define('Work', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'works',
  });

  return Work;
};

module.exports = WorkModel;
