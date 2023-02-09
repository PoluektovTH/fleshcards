const router = require('express').Router();
//TODO редирект на слеш при нажатии на home
router.route('/').get((req, res) => {
  res.send('   ');
});

module.exports = router;
