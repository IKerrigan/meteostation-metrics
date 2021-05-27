const { MetricModel } = require('../db');

class MetricStorage {
  getLast10() {
    return MetricModel.find().sort({ createdAt: -1 }).limit(10);
  }

  getActual() {
    return MetricModel.findOne().sort({ createdAt: -1 });
  }

  async add(metric) {
    try {
      await MetricModel.create(metric);
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}

module.exports = {
  MetricStorage,
};
