const { Client } = require('discord.js-selfbot-v13');
const moment = require('moment-timezone');

const token = "YOUR_DISCORD_TOKEN";

const client = new Client();

client.on('ready', () => console.log(`Logged in as ${client.user.tag}`));

client.on('messageCreate', async (msg) => {
  if (msg.author.id !== client.user.id) return;

  if (msg.content.toLowerCase() === 'stop') {
    try {
      client.user.setActivity(null);
      return msg.reply('Stopped :)');
    } catch (err) {
      return msg.reply(`Error: Failed to stop activity: ${err.message}`);
    }
  }

  if (!msg.content.startsWith('start')) return;

  try {
    const lines = msg.content.split('\n').slice(1);
    const typeStr = lines[0]?.toLowerCase() || "playing";
    const typeMap = { playing: 0, streaming: 1, listening: 2, watching: 3, competing: 5 };
    const type = typeMap[typeStr] ?? 0;

    let name, details, state, large_image, small_image, startTimestamp;

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('1.')) name = line.slice(2).trim();
      else if (line.startsWith('2.')) details = line.slice(2).trim();
      else if (line.startsWith('3.')) state = line.slice(2).trim();
      else if (line.includes('http') && !large_image) large_image = line;
      else if (line.includes('http') && large_image && !small_image) small_image = line;
      else {
        const parsed = moment.tz(line, ["YYYY/M/D HH:mm A","YYYY/M/D","HH:mm A"], "Asia/Riyadh");
        if (parsed.isValid()) startTimestamp = parsed.valueOf();
      }
    }

    if (!name) return msg.reply('Error: Name is required to set activity.');

    try {
      client.user.setActivity({
        name,
        type,
        details,
        state,
        assets: { ...(large_image && {large_image}), ...(small_image && {small_image}) },
        ...(startTimestamp && {timestamps:{start:startTimestamp}})
      });
      msg.reply('Success: Activity set successfully :)');
    } catch (err) {
      msg.reply(`Error: Failed to set activity: ${err.message}`);
    }

  } catch (err) {
    msg.reply(`Error: Unexpected error: ${err.message}`);
  }
});

client.login(token);
