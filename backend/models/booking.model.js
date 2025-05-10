const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Event"
    },
    numberOfTickets: {
        type: Number,
        required: true,
        min: 1
    },
    paymentStatus: {
        type: String,
        enum: ["Pending", "Completed"],
        default: "Pending"
    },
    bookingDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Booking", BookingSchema);