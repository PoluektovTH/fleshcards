'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rounds', {
      user_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      deck_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      count_of_right_answers: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rounds');
  },
};
