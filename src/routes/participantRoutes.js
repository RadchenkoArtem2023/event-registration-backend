const express = require("express");
const router = express.Router();
const Participant = require("../models/participant");
const registerParticipant = require("../controllers/participant"); // виправлено імпорт

// Отримання учасників для події
router.get("/", async (req, res) => {
  const { eventId } = req.query;

  if (!eventId) {
    return res.status(400).json({ message: "eventId не вказано." });
  }

  try {
    const participants = await Participant.find({ eventId });
    if (participants.length === 0) {
      return res
        .status(404)
        .json({ message: "Учасників не знайдено для цієї події." });
    }
    res.json(participants);
  } catch (error) {
    console.error("Error fetching participants:", error);
    res.status(500).json({ message: "Error fetching participants" });
  }
});

// Додавання нового учасника
router.post("/", registerParticipant);

module.exports = router;
