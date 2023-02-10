'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    static associate({ Card, Round }) {
      Deck.hasMany(Card, {
        foreignKey: 'deck_id',
      });
      Deck.hasMany(Round, {
        foreignKey: 'deck_id',
      });
    }
  }
  Deck.init(
    {
      theme: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      count_of_cards: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Deck',
    }
  );
  return Deck;
};
