const Participant = require("../models/participant");
const validateParticipant = require("../validation/participant");

const registerParticipant = async (req, res) => {
  const { error } = validateParticipant(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const participant = new Participant({
    fullName: req.body.fullName,
    email: req.body.email,
    birthDate: req.body.birthDate,
    source: req.body.source,
    eventId: req.body.eventId,
  });

  try {
    const savedParticipant = await participant.save();
    res.status(201).json(savedParticipant);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Помилка реєстрації учасника", error: err });
  }
};

module.exports = registerParticipant;
