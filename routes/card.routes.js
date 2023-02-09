const router = require('express').Router();
// const Card = require('../views/Card');
const { Card } = require('../db/models');

router.route('/:idTopic').get(async (req, res) => {
  const {idTopic} = req.params;
  console.log(idTopic);
  const card = await Card.findOne({ where: { deck_id: idDeck } });
  console.log(card);
  res.text('123')
  // здесь отрисовывается вопрос по выбранной теме
  // const cardId = card.id;
  // const cardQuest = card.question;
  // const cardAnsw = card.answer;
  // res.renderComponent(Card, { question, answer });
});

module.exports = router;
