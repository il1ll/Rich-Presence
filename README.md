# Discord Selfbot Activity

A **Discord selfbot** to set your custom Rich Presence activity with images, details, and timestamps.

---

## Features

- Set **custom activities**: Playing, Watching, Listening, Streaming, Competing
- Add **activity details** and **state**
- Add **large** and **small images** (assets)
- Set a **custom start timestamp** for your activity
- **Stop activity** with a single command
- **Easy to use**

---

## Commands

Send these messages by your Discord account in any Channel or DM in Discord to control the selfbot:

### Start Activity
```
start <type>
<Details(optional)>
<State(optional)>
<Large Image URL(optional)>
<Small Image URL(optional)>
<Start Time YYYY/MM/DD HH:mm AM/PM(optional)>
```

- `<type>`: playing / watching / listening / streaming / competing

**Example:**
```
start
playing
1.MIKU🩵
2.TETO❤️
3.NERU💛
https://discord.com/large.gif
https://discord.com/small.png
2025/11/17 12:00 PM
```

### Stop Activity
```
stop
```

---

## Installation

1. Install dependencies:
```bash
npm install discord.js-selfbot-v13 moment-timezone
```

1. Replace your token in index.js:

```javascript
const token = "YOUR_DISCORD_TOKEN";
```

1. Run the selfbot:

```bash
node index.js
```

---

### Contact

- **Discord**: [@coder.gg](https://discord.com/users/1099039269391171765)  
- **Telegram:** [@codergg](https://t.me/codergg)  
- **TikTok:** [@coder.gg](https://tiktok.com/@coder.gg)
