const mongoose = require('mongoose');

const MetricSchema = new mongoose.Schema(
  {
    t: String,
    h: String,
  },
  { timestamps: true }
);

const MetricModel = mongoose.model('metric', MetricSchema);

module.exports = {
  MetricSchema,
  MetricModel,
};
