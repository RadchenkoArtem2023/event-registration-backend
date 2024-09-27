const mongoose = require("mongoose");
require("dotenv").config();

// Підключення до MongoDB
const mongoURI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}/${process.env.MONGODB_DB}?retryWrites=true&w=majority`;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB підключено");
    seedDatabase();
  })
  .catch((err) => console.error("Помилка підключення до MongoDB:", err));

// Імпортуємо модель події
const Event = require("./src/models/event");

// Масив подій для заповнення
const events = [
  {
    title: "Майстер-клас з кулінарії",
    description:
      "Приєднуйтеся до нас, щоб навчитися готувати італійські страви.",
    date: new Date("2024-10-01"),
    organizer: 'Кулінарна студія "Смак"',
  },
  {
    title: "Велопробіг до лісу",
    description: "Проведіть вихідні на природі з велопробігом та пікніком.",
    date: new Date("2024-10-05"),
    organizer: 'Спортивний клуб "ВелоМрія"',
  },
  {
    title: "Концерт класичної музики",
    description:
      "Насолодіться вечором класичної музики у виконанні відомого оркестру.",
    date: new Date("2024-10-10"),
    organizer: "Філармонія Київ",
  },
  {
    title: "Семінар з лідерства",
    description: "Отримайте нові знання про лідерство та командну роботу.",
    date: new Date("2024-10-15"),
    organizer: 'Бізнес-школа "Лідер"',
  },
  {
    title: "Фотопленер у парку",
    description: "Фотосесія на природі для любителів фотографії.",
    date: new Date("2024-10-18"),
    organizer: 'Фотошкола "Кадр"',
  },
  {
    title: "Марафон з бігу",
    description: "Візьміть участь у марафоні на 10 км по набережній.",
    date: new Date("2024-10-20"),
    organizer: 'Клуб "Біг заради здоров\'я"',
  },
  {
    title: "Курс першої медичної допомоги",
    description: "Дізнайтеся основи першої допомоги та рятувальні техніки.",
    date: new Date("2024-10-25"),
    organizer: "Червоний Хрест",
  },
  {
    title: 'Мовний клуб "Англійська"',
    description: "Практикуйте розмовну англійську з носіями мови.",
    date: new Date("2024-10-28"),
    organizer: 'Мовна школа "SpeakUp"',
  },
  {
    title: "Художній пленер",
    description: "Малювання на свіжому повітрі для всіх охочих.",
    date: new Date("2024-10-30"),
    organizer: 'Арт-студія "Творчість"',
  },
  {
    title: "Йога на пляжі",
    description: "Заняття з йоги на світанку біля моря.",
    date: new Date("2024-11-02"),
    organizer: 'Йога-клуб "Баланс"',
  },
  {
    title: "Лекція про здорове харчування",
    description: "Дізнайтеся про основи збалансованого харчування.",
    date: new Date("2024-11-05"),
    organizer: 'Центр здоров\'я "Збалансовано"',
  },
  {
    title: "Турнір з шахів",
    description: "Візьміть участь у міському турнірі з шахів.",
    date: new Date("2024-11-08"),
    organizer: 'Шаховий клуб "Гросмейстер"',
  },
  {
    title: "Виставка сучасного мистецтва",
    description: "Огляд сучасних арт-робіт від молодих художників.",
    date: new Date("2024-11-10"),
    organizer: 'Галерея "Арт"',
  },
  {
    title: "Екскурсія по місту",
    description: "Відвідайте головні пам'ятки міста з професійним гідом.",
    date: new Date("2024-11-12"),
    organizer: 'Туристичний клуб "Мандрівник"',
  },
  {
    title: "Кінопоказ під відкритим небом",
    description: "Вечірній показ фільмів під зоряним небом.",
    date: new Date("2024-11-15"),
    organizer: 'Кінофестиваль "Кіномир"',
  },
  {
    title: "Воркшоп з програмування",
    description: "Інтенсивний курс по JavaScript для початківців.",
    date: new Date("2024-11-18"),
    organizer: 'Кодерська школа "CodeLab"',
  },
  {
    title: "Дитячий фестиваль",
    description: "Веселощі для всієї родини: ігри, конкурси та атракціони.",
    date: new Date("2024-11-20"),
    organizer: 'Фестиваль "Щасливі діти"',
  },
  {
    title: "Літературний вечір",
    description: "Читання поезії та прози у затишній атмосфері.",
    date: new Date("2024-11-22"),
    organizer: 'Літературний клуб "Слово"',
  },
  {
    title: "Воркшоп зі створення відео",
    description: "Навчіться основам відеозйомки та монтажу.",
    date: new Date("2024-11-25"),
    organizer: "Школа відеомейкерів",
  },
  {
    title: "Вечірка в стилі 80-х",
    description: "Танці та музика 80-х років для всіх поціновувачів.",
    date: new Date("2024-11-28"),
    organizer: 'Клуб "Retro Dance"',
  },
];

// Функція для заповнення бази даних
async function seedDatabase() {
  try {
    // Додавання нових подій
    await Event.insertMany(events);
    console.log("Дані успішно додані до бази даних");

    // Закриття з'єднання
    mongoose.connection.close();
  } catch (err) {
    console.error("Помилка під час заповнення бази даних:", err);
  }
}
