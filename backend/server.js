const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const cors = require('cors');
const userRoutes = require('./routes/user.route');
const eventRoutes = require("./routes/event.route");
const bookingRoutes = require("./routes/booking.route");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
db.connectDB();

// Middleware
app.use(cors());
app.use(express.json());


// User routes
app.use('/auth/', userRoutes);

// Event routes
app.use('/api/events', eventRoutes);

// Booking routes
app.use('/api/bookings', bookingRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});