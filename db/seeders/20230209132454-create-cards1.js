'use strict';

const { Card } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Card.bulkCreate([
      {
        deck_id: 1,
        question: 'На первом логотипе Apple был изображен...?',
        answer: 'Исаак Ньютон',
      },
      {
        deck_id: 1,
        question: 'Самый первый компьютер Apple продавали за...?',
        answer: '666 долларов и 66 центов',
      },
      {
        deck_id: 1,
        question: 'Отчего произошло название "Macintosh"?',
        answer: 'Сорт яблок',
      },
      {
        deck_id: 1,
        question:
          'Какое животное "изобрела" Apple в составе египетского шрифта на первом Macintosh?',
        answer: 'Собакорова',
      },
      {
        deck_id: 1,
        question: 'Каким фильмом навеяно название "iPod"?',
        answer: 'Космическая одиссея',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Card.destroy({ truncate: { cascade: true } });
  },
};
