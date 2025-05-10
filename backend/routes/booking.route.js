const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/booking.controller.js");


// POST /api/bookings
router.post("/", bookingController.createBooking);

// GET /api/bookings
router.get("/", bookingController.getAllBookings);

router.post("/verify-ticket", bookingController.verifyTicket);

// DELETE /api/bookings/:bookingId
router.delete("/:bookingId", bookingController.deleteBooking);

module.exports = router;