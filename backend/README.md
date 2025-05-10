# Backend Event Management API

A Node.js/Express backend for managing users, events, and bookings for an event management platform.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
  - [Auth/User](#authuser)
  - [Events](#events)
  - [Bookings](#bookings)
- [Dummy Data Examples](#dummy-data-examples)
- [Authorization](#authorization)
- [Notes](#notes)

---

## Project Structure

```
Backend_Event_Management/
│
├── controllers/
│   ├── booking.controller.js
│   ├── event.controller.js
│   └── user.controller.js
├── middlewares/
│   └── user.middlware.js
├── models/
│   ├── booking.model.js
│   ├── event.model.js
│   └── user.model.js
├── routes/
│   ├── booking.route.js
│   ├── event.route.js
│   └── user.route.js
├── config/
│   └── db.js
├── server.js
└── .env
```

---

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   - Create a `.env` file:
     ```
     PORT=3000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

3. **Start the server**
   ```bash
   node server.js
   ```

---

## API Endpoints

### Auth/User

| Method | Endpoint               | Description                | Protected |
|--------|------------------------|----------------------------|-----------|
| POST   | `/auth/register`       | Register a new user        | No        |
| POST   | `/auth/login`          | Login user                 | No        |
| GET    | `/auth/profile`        | Get user profile           | Yes       |
| DELETE | `/auth/delete`         | Delete user account        | Yes       |

---

### Events

| Method | Endpoint               | Description                | Protected |
|--------|------------------------|----------------------------|-----------|
| POST   | `/api/events`          | Create a new event         | No        |
| GET    | `/api/events`          | Get all events             | No        |
| PUT    | `/api/events/:eventId` | Update event by ID         | No        |
| DELETE | `/api/events/:eventId` | Delete event by ID         | No        |

---

### Bookings

| Method | Endpoint                        | Description                | Protected |
|--------|---------------------------------|----------------------------|-----------|
| POST   | `/api/bookings`                 | Create a new booking       | No        |
| GET    | `/api/bookings`                 | Get all bookings           | No        |
| POST   | `/api/bookings/verify-ticket`   | Verify a booking/ticket    | No        |
| DELETE | `/api/bookings/:bookingId`      | Delete a booking           | No        |

---

## Dummy Data Examples

### 1. Register User

**POST** `/auth/register`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "attendees"
}
```

---

### 2. Login User

**POST** `/auth/login`

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

---

### 3. Create Event

**POST** `/api/events`

```json
{
  "title": "Tech Conference",
  "date": "2024-12-01T10:00:00.000Z",
  "venue": "Convention Center",
  "description": "A conference about technology.",
  "ticketPrice": 100,
  "maxAttendees": 200,
  "imageUrl": "https://example.com/event.jpg",
  "organizerId": "609e125e8bfa4b0015b708a1"
}
```

---

### 4. Create Booking

**POST** `/api/bookings`

```json
{
  "userId": "609e125e8bfa4b0015b708a1",
  "eventId": "609e12c98bfa4b0015b708a2",
  "numberOfTickets": 2,
  "paymentStatus": "Completed"
}
```

---

### 5. Verify Ticket

**POST** `/api/bookings/verify-ticket`

```json
{
  "bookingId": "609e13a18bfa4b0015b708a3"
}
```

---

## Authorization

- For protected routes (like `/auth/profile`), include the JWT token in the `Authorization` header:
  ```
  Authorization: Bearer <your_token>
  ```

---

## Notes

- All responses are in JSON.
- Make sure to use valid MongoDB ObjectIds for `userId`, `eventId`, and `bookingId`.
- Passwords are securely hashed using bcrypt.
- JWT is used for authentication.

---

**API Base URL:**  
`http://localhost:3000`

---

**Happy Coding!**