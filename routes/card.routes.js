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
  const { question, answer } = await Card.findOne({
    where: { id: quest, deck_id: id },
  });
  res.send(question);
});

module.exports = router;
