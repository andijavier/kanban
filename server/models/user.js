'use strict';
const {
  Model
} = require('sequelize');
const { encryptPassword } = require('../helper/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task, {foreignKey: 'UserId'})
      User.belongsTo(models.Organization, {foreignKey: 'OrganizationId'})
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Email is Required !'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Username is Required !'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Password is Required !'
        }
      }
    },
    OrganizationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user) => {
        user.password = encryptPassword(user.password)
      }
    }
  });
  return User;
};