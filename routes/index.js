const express = require('express');
const router = express.Router();

router.get('/', async function (req, res) {
  const history = await req.metricStorage.getLast10();

  res.render('index', {
    actual: history[0] || {},
    title: 'Meteostation',
    history,
  });
});

router.put('/', async function (req, res, next) {
  await req.metricStorage.add(req.body);
  res.end();
});

module.exports = router;
