const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  let history = req.metricStorage.getAllSorted();
  let actual = req.metricStorage.getActual() || {};

  res.render('index', { title: 'Meteostation', actual, history });
});

router.put('/', function (req, res, next) {
  req.metricStorage.push({
    ...req.body,
    timestamp: Date.now(),
  });

  console.log(req.metricStorage.getAll());
  res.end();
});

module.exports = router;
