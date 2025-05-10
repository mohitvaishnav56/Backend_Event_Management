const Booking = require("../models/booking.model");

exports.createBooking = async (req, res) => {
    try {
        const { userId, eventId, numberOfTickets, paymentStatus } = req.body;
        const booking = new Booking({
            userId,
            eventId,
            numberOfTickets,
            paymentStatus
        });

        await booking.save();
        res.status(201).json(booking);
    } catch (err) {
        res.status(500).json({ error: "Failed to create booking", message: err.message });
    }
};

exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate("userId").populate("eventId");
        res.json(bookings);
        console.log(bookings);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch bookings", message: err.message });
    }
};

exports.verifyTicket = async (req, res) => {
    try {
        const { bookingId } = req.body;
        
        // Check if the bookingId exists in the database
        const booking = await Booking.findById(bookingId).populate("userId").populate("eventId");
        
        // If booking exists, return valid: true, else invalid
        if (booking) {
            res.json({ valid: true, booking });
        } else {
            res.json({ valid: false, message: "Invalid bookingId" });
        }
    } catch (err) {
        res.status(500).json({ error: "Failed to verify booking", message: err.message });
    }
};

exports.deleteBooking = async (req, res) => {
    try {
        await Booking.findByIdAndDelete(req.params.bookingId);
        res.json({ message: "Booking deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete booking", message: err.message });
    }
};

