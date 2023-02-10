
'use strict';

const { Card } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Card.bulkCreate([
      {
        deck_id: 2,
        question: 'Особенность первого мире будильника ',
        answer: 'умел звонить только в 4 утра',
      },
      {
        deck_id: 2,
        question: 'В английском языке её называют «Firefox»',
        answer: 'малая панда',
      },
      {
        deck_id: 2,
        question: 'Спамеры получают только один ответ на каждые  …  отправленных писем?',
        answer: '12 миллионов',
      },
      {
        deck_id: 2,
        question:
          'В 1999 г. эту платежную систему назвали одной из десяти худших бизнес-идей года.',
        answer: 'PayPal',
      },
      {
        deck_id: 2,
        question: 'По статистике, 86% людей сначала пытаются сделать это неправильно.',
        answer: 'вставить USB-кабель',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Card.destroy({ truncate: { cascade: true } });
  },
};
