const router = require('express').Router();
const CardView = require('../views/CardView');
const { Card } = require('../db/models');

router.route('/:id1/1').get(async (req, res) => {
  const { id1 } = req.params;
  const { question, answer } = await Card.findOne({
    where: { deck_id: id1, id: 1 },
  });
  res.renderComponent(CardView, { question });
});

router.route('/:id/:quest').get(async (req, res) => {
  const { id, quest } = req.params;
  if ()
  const { question, answer } = await Card.findOne({
    where: { id: quest, deck_id: id },
  });
  console.log(req.params);
  console.log(question);
  // await res.text('123');
  // здесь отрисовывается вопрос по выбранной теме
  // const cardId = card.id;
  // const cardQuest = card.question;
  // const cardAnsw = card.answer;
  // res.renderComponent(CardView, { question }, { doctype: false });
  res.send(question)
});

module.exports = router;
