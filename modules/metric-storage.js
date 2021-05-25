class MetricStorage {
  constructor() {
    this._data = [];
  }

  getAll() {
    return this._data;
  }

  getAllSorted() {
    return this._data.sort(function (a, b) {
      return new Date(b.timestamp) - new Date(a.timestamp);
    });
  }

  getActual() {
    return this._data[this._data.length - 1];
  }

  push(metric) {
    return this._data.push(metric);
  }

  pop() {
    return this._data.pop();
  }
}

module.exports = {
  MetricStorage,
};
