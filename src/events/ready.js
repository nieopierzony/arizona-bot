'use strict';

const { DateTime } = require('luxon');
const { watchPrivates } = require('../handlers/private');
const { checkMainMessage, watchTickets } = require('../handlers/support');

module.exports = client => {
  console.log(
    `\n[Ready] Бот запущен. Авторизован как %s  | Серверов: %d | Пользователей: %d`,
    client.user.tag,
    client.guilds.cache.size,
    client.users.cache.size,
  );

  console.log(`[Ready] Время: ${DateTime.local().toFormat('TT')}`);
  console.log(`[Ready] RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);

  checkMainMessage(client);
  watchTickets(client);
  watchPrivates(client);

  // Отправлять каждые 20 минут информацию об использованной памяти
  setInterval(() => {
    checkMainMessage(client);
    watchTickets(client);
    watchPrivates(client);

    console.log(`\n[Ready] Время: ${DateTime.local().toFormat('TT')}`);
    console.log(`[Ready] RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);
  }, 20 * 60 * 1000);
};
