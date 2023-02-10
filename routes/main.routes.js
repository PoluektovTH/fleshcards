const router = require('express').Router();
const Decks = require('../views/Decks');

router.route('/').get(async (req, res) => {
  res.renderComponent(Decks);
  //тут отрисовка главной страницы
});

module.exports = router;
