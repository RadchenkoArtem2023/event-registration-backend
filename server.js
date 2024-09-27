const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Ініціалізація Express
const app = express();
app.use(cors());
app.use(express.json());

// Підключення до MongoDB
const mongoURI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}/${process.env.MONGODB_DB}?retryWrites=true&w=majority`;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB підключено"))
  .catch((err) => console.error("Помилка підключення до MongoDB:", err));

// Роутинг
const eventRoutes = require("./src/routes/eventRoutes");
const participantRoutes = require("./src/routes/participantRoutes");

app.use("/api/events", eventRoutes);
app.use("/api/participants", participantRoutes);

// Запуск сервера
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Сервер працює на порту ${PORT}`);
});
