const express = require("express");
const router = express.Router();
const Participant = require("../models/participant");

router.get("/", async (req, res) => {
  const { eventId } = req.query;

  if (!eventId) {
    return res.status(400).json({ message: "eventId не вказано." });
  }

  try {
    const participants = await Participant.find({ eventId });
    if (!participants.length === 0) {
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
router.post("/", async (req, res) => {
  try {
    const participant = new Participant(req.body);
    await participant.save();
    res.status(201).send(participant);
  } catch (error) {
    console.error("Error adding participant:", error);
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;
