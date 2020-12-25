'use strict';

const { action } = require('../../handlers/suggestions');
const Command = require('../../structures/Command');

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: 'consider',
    });
  }
  // eslint-disable-next-line require-await
  async run({ message }) {
    action(message, 'consider');
  }
};
