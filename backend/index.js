'use strict';

require('dotenv').config();

const Client = require('./structures/Client');

const client = new Client({
  devs: ['422109629112254464', '266132370426429440', '373206800196960268'],
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  messageCacheLifetime: 60,
  messageSweepInterval: 120,
  fetchAllMembers: true,
});

client.login();
client.loadEvents();

module.exports = client;