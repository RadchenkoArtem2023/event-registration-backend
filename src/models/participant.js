const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  birthDate: { type: Date, required: true },
  source: { type: String, required: true },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
});

const Participant = mongoose.model("Participant", participantSchema);

module.exports = Participant;
