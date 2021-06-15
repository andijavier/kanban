'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.User, {foreignKey: 'UserId'})
      Task.belongsTo(models.Organization, {foreignKey: 'OrganizationId'})
    }
  };
  Task.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Title is Required !'
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Title is Required !'
        }
      }
    },
    priority: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Priority is Required !'
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'Who Are you ?!'
        }
      }
    },
    OrganizationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};