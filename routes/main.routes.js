const router = require('express').Router();
const Home = require('../views/Home');

router.route('/').get(async (req, res) => {
  res.renderComponent(Home)
  //тут отрисовка Deсks
});

module.exports = router;
