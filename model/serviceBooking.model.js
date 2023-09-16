const mongoose = require('mongoose');

const serviceBookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  vehicle: {
    make: String,
    model: String,
    // Add other vehicle details as needed
  },
  serviceType: String,
  date: Date,
  timeSlot: String,
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
    default: 'Pending',
  },
  serviceCenter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceCenter',
    required: true,
  },
});

const ServiceBooking = mongoose.model('ServiceBooking', serviceBookingSchema);

module.exports = ServiceBooking;
