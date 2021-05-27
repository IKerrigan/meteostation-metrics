const express = require('express');
const router = express.Router();

router.get('/', async function (req, res) {
  let history = await req.metricStorage.getLast10();

  res.render('index', {
    title: 'Meteostation',
    actual: history[0] || {},
    history,
  });
});

router.put('/', async function (req, res, next) {
  await req.metricStorage.add(req.body);
  res.end();
});

module.exports = router;
