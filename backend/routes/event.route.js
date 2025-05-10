const express = require("express");
const router = express.Router();
const { createEvent, getAllEvents, updateEvent, deleteEvent } = require("../controllers/event.controller");

router.post("/", createEvent);
router.get("/", getAllEvents);
// Update an event by ID
router.put("/:eventId", updateEvent);

// Delete an event by ID
router.delete("/:eventId", deleteEvent);

module.exports = router;
