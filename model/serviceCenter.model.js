const mongoose = require('mongoose');

const serviceCenterSchema = new mongoose.Schema({
  name: String,
  location: String,
  availableServices: [String],
  workingHours: {
    startTime: String,
    endTime: String,
  },
});

const ServiceCenter = mongoose.model('ServiceCenter', serviceCenterSchema);

module.exports = ServiceCenter;
