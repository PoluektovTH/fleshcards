'use strict';
const { Deck } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Deck.bulkCreate([{ theme: 'Apple', count_of_cards: 5 }]);
  },

  async down(queryInterface, Sequelize) {
    await Deck.destroy({ truncate: { cascade: true } });
  },
};
