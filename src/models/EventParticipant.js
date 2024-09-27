const mongoose = require("mongoose");

const eventParticipantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
});

const EventParticipant = mongoose.model(
  "EventParticipant",
  eventParticipantSchema
);

module.exports = EventParticipant;
