const router = require('express').Router();
const CardView = require('../views/CardView');
const { Card } = require('../db/models');

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const card = await Card.findAll({ where: { deck_id: Number(id) } });
  const quests = card.map((el) => el.question); //это массив вопросов строк
  console.log(quests);
  // await res.text('123');
  // здесь отрисовывается вопрос по выбранной теме
  // const cardId = card.id;
  // const cardQuest = card.question;
  // const cardAnsw = card.answer;
  res.renderComponent(CardView);
});

router.route('/:id/:quest').get(async (req, res) => {
  const { id } = req.params;
  const card = await Card.findAll({ where: { deck_id: Number(id) } });
  const quests = card.map((el) => el.question); //это массив вопросов строк
  console.log(quests);
  // await res.text('123');
  // здесь отрисовывается вопрос по выбранной теме
  // const cardId = card.id;
  // const cardQuest = card.question;
  // const cardAnsw = card.answer;
  res.renderComponent(CardView);
});

module.exports = router;
