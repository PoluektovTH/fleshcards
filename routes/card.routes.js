const router = require('express').Router();
const CardView = require('../views/CardView');
const { Card, Deck } = require('../db/models');
let count = 0;
let counter1 = 0;

router.route('/:id1/1').get(async (req, res) => {
  const { id1 } = req.params;
  console.log(typeof id1);
  if (id1 === '1') {
    const { theme } = await Deck.findOne({ where: { id: id1 } });
    const { question, answer } = await Card.findOne({
      where: { deck_id: id1, id: 1 },
    });
    count = 0;
    res.renderComponent(CardView, { theme, question, id1 });
  }
  if (id1 === '2') {
    const { theme } = await Deck.findOne({ where: { id: id1 } });
    const { question, answer } = await Card.findOne({
      where: { deck_id: id1, id: 6 },
    });
    count = 0;
    res.renderComponent(CardView, { theme, question, id1 });
  }
  if (id1 === '3') {
    const { theme } = await Deck.findOne({ where: { id: id1 } });
    const { question, answer } = await Card.findOne({
      where: { deck_id: id1, id: 11 },
    });
    count = 0;
    res.renderComponent(CardView, { theme, question, id1 });
  }
});

router
  .route('/:id/:quest')
  .get(async (req, res) => {
    let { id, quest } = req.params;
    if (id === '1') {
      quest = Number(quest);
      const { question, answer } = await Card.findOne({
        where: { id: quest, deck_id: id },
      });
      res.send(question);
      counter1 = 0;
    }
    if (id === '2') {
      quest = Number(quest);
      quest = quest + 5;
      const { question, answer } = await Card.findOne({
        where: { id: quest, deck_id: id },
      });
      res.send(question);
      counter1 = 0;
    }
    if (id === '3') {
      quest = Number(quest);
      quest = quest + 10;
      const { question, answer } = await Card.findOne({
        where: { id: quest, deck_id: id },
      });
      res.send(question);
      counter1 = 0;
    }
  })
  .post(async (req, res) => {
    count += 1;
    const { id, quest } = req.params;
    const { answer1 } = req.body;
    console.log(req.body);

    if (id === '1') {
      const { question, answer } = await Card.findOne({
        where: { id: count, deck_id: id },
      });
      console.log(typeof answer, typeof answer1);
      if (answer1 === answer) {
        res.send(`<p className="card-text">Good</p>`);
        counter1 = 0;
      } else {
        if (counter1 === 2) {
          res.send(`<p className="card-text">${answer}</p>`);
          counter1 = 0;
        } else {
          res.send(`<p className="card-text">Try again</p>`);
          count -= 1;
          counter1 += 1;
        }
      }
      if (count === 5) {
        count = 0;
      }
    }
    if (id === '2') {
      const { question, answer } = await Card.findOne({
        where: { id: count + 5, deck_id: id },
      });
      console.log(typeof answer, typeof answer1);
      if (answer1 === answer) {
        res.send(`<p className="card-text">Good</p>`);
        counter1 = 0;
      } else {
        if (counter1 === 2) {
          res.send(`<p className="card-text">${answer}</p>`);
          counter1 = 0;
        } else {
          res.send(`<p className="card-text">Try again</p>`);
          count -= 1;
          counter1 += 1;
        }
      }
      if (count === 5) {
        count = 0;
      }
    }
    if (id === '3') {
      const { question, answer } = await Card.findOne({
        where: { id: count + 10, deck_id: id },
      });
      console.log(typeof answer, typeof answer1);
      if (answer1 === answer) {
        res.send(`<p className="card-text">Good</p>`);
        counter1 = 0;
      } else {
        if (counter1 === 2) {
          res.send(`<p className="card-text">${answer}</p>`);
          counter1 = 0;
        } else {
          res.send(`<p className="card-text">Try again</p>`);
          count -= 1;
          counter1 += 1;
        }
      }
      if (count === 5) {
        count = 0;
      }
    }
  });

module.exports = router;
