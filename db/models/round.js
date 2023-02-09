'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Round extends Model {
    static associate({ User, Deck }) {
      Round.belongsTo(User, { foreignKey: 'user_id' });
      Round.belongsTo(Deck, { foreignKey: 'deck_id' });
    }
  }
  Round.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      deck_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Decks',
          key: 'id',
        },
      },
      count_of_right_answers: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Round',
    }
  );
  return Round;
};
