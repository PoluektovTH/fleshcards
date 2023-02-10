const router = require('express').Router();
const Decks = require('../views/Decks');
const { Deck } = require('../db/models');

router.route('/').get(async (req, res) => {
  let themes = await Deck.findAll();
  themes = themes.map((el) => el.theme);
  res.renderComponent(Decks, { themes });
});

module.exports = router;
