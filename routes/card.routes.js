const router = require('express').Router();
const CardView = require('../views/CardView');
const { Card, Deck } = require('../db/models');

router.route('/:id1/1').get(async (req, res) => {
  const { id1 } = req.params;
  const { theme } = await Deck.findOne({ where: { id: id1 } });
  const { question, answer } = await Card.findOne({
    where: { deck_id: id1, id: 1 },
  });
  res.renderComponent(CardView, { theme, question });
});

router.route('/:id/:quest').get(async (req, res) => {
  const { id, quest } = req.params;
  const { question, answer } = await Card.findOne({
    where: { id: quest, deck_id: id },
  });
  res.send(question);
});

module.exports = router;
