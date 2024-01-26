const mineflayer = require("mineflayer");

const bot = mineflayer.createBot({
  host: "82.165.22.218",
  port: 27059,
  username: "Mystery_bot",
  version: "1.16.5",
});

// Обработчик события 'login' будет вызван, когда бот успешно войдет в игру
bot.on("login", () => {
  console.log("Бот успешно вошел в игру");
});

// Обработчик события 'spawn' будет вызван, когда бот заспавнится на сервере
bot.on("spawn", () => {
  console.log("Бот заспавнился на сервере");

  bot.chat("/login uabot12");
});

// Обработчик события 'message' будет вызван, когда бот получит сообщение в чате
bot.on("message", (message) => {
  console.log(`Сообщение в чате: ${message.toString()}`);
});

// Оставляем бота активным (программа будет работать бесконечно)
process.stdin.resume();
