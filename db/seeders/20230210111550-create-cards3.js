

'use strict';

const { Card } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Card.bulkCreate([
      {
        deck_id: 3,
        question: 'Количество ступенек ведущих к нашему кампусу',
        answer: '81',
      },
      {
        deck_id: 3,
        question: 'Какое количество молока по мнению нашей кофемашины я хочу видеть в своем капучино? ',
        answer: 'НИСКОЛЬКО',
      },
      {
        deck_id: 3,
        question: 'Во сколько раз меньше получал Акимаалы Аманкулов до прихода в Elbrus?',
        answer: 'в 10 раз',
      },
      {
        deck_id: 3,
        question:
          'Сколько раз читали новости в ElbrusBootcamp Spb в 2023 году?',
        answer: '16',
      },
      {
        deck_id: 3,
        question: 'За сколько секунд можно стать fullstack javascript разработчиком в ElbrusBootcamp Spb?',
        answer: '1800000',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Card.destroy({ truncate: { cascade: true } });
  },
};