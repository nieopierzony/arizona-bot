'use strict';

const { familyConfig } = require('../utils/config');

module.exports = async (client, oldState, newState) => {
  if (oldState.channelID === newState.channelID) return;

  const familySettings = familyConfig[oldState.guild.id];
  if (newState.channel) {
    if (familySettings && familySettings.categoryID === newState.channel.parentID) return;

    const roleByChannel = newState.guild.roles.cache.find(r => r.name === newState.channel.name);
    if (roleByChannel && !newState.channel.permissionsFor(newState.member).has('CONNECT')) {
      await newState.member.roles.add(roleByChannel);
      console.log(
        `[LOG] Пользователю "%s" выдана роль "%s" по причине захода в этот канал`,
        newState.member.displayName,
        roleByChannel.name,
      );
    }
  }

  if (oldState.channel) {
    if (familySettings && familySettings.categoryID === oldState.channel.parentID) return;

    const roleByChannel = oldState.guild.roles.cache.find(r => r.name === oldState.channel.name);
    if (roleByChannel) {
      await oldState.member.roles.remove(roleByChannel);
      console.log(
        `[LOG] У пользователя "%s" снята роль "%s" по причине выхода из канала`,
        oldState.member.displayName,
        roleByChannel.name,
      );
    }
  }

  require('../handlers/private').handleVoiceStateUpdate(client, oldState, newState);
};
