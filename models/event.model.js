const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  venue: String,
  description: String,
  ticketPrice: Number,
  maxAttendees: Number,
  bookedSeats: { type: Number, default: 0 },
  imageUrl: String,
  organizerId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("Event", EventSchema);
