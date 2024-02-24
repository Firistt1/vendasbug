const {Client , GatewayIntentBits,Collection, Partials } = require("discord.js");
console.clear()
console.log("\x1b[37m             █     █░ ██░ ██  ██▓▄▄▄█████▓▓█████     ██░ ██  ▄▄▄     ▄▄▄█████▓  ██████ ");
console.log("\x1b[37m             ▓█░ █ ░█░▓██░ ██▒▓██▒▓  ██▒ ▓▒▓█   ▀    ▓██░ ██▒▒████▄   ▓  ██▒ ▓▒▒██    ▒ ");
console.log("\x1b[37m             ▒█░ █ ░█ ▒██▀▀██░▒██▒▒ ▓██░ ▒░▒███      ▒██▀▀██░▒██  ▀█▄ ▒ ▓██░ ▒░░ ▓██▄   ");
console.log("\x1b[37m             ░█░ █ ░█ ░▓█ ░██ ░██░░ ▓██▓ ░ ▒▓█  ▄    ░▓█ ░██ ░██▄▄▄▄██░ ▓██▓ ░   ▒   ██▒");
console.log("\x1b[37m             ░░██▒██▓ ░▓█▒░██▓░██░  ▒██▒ ░ ░▒████▒   ░▓█▒░██▓ ▓█   ▓██▒ ▒██▒ ░ ▒██████▒▒");
console.log("\x1b[37m             ░ ▓░▒ ▒   ▒ ░░▒░▒░▓    ▒ ░░   ░░ ▒░ ░    ▒ ░░▒░▒ ▒▒   ▓▒█░ ▒ ░░   ▒ ▒▓▒ ▒ ░");
console.log("\x1b[37m               ▒ ░ ░   ▒ ░▒░ ░ ▒ ░    ░     ░ ░  ░    ▒ ░▒░ ░  ▒   ▒▒ ░   ░    ░ ░▒  ░ ░");
console.log("\x1b[37m               ░   ░   ░  ░░ ░ ▒ ░  ░         ░       ░  ░░ ░  ░   ▒    ░      ░  ░  ░  ");
console.log("\x1b[37m                 ░     ░  ░  ░ ░              ░  ░    ░  ░  ░      ░  ░              ░  ");
console.log("\x1b[37m                                                                                        ");
console.log("\x1b[37m                               > Feito por White Hats <                                 ");
console.log("\x1b[37m                               > BOT DE VENDAS V1.0.0 <                                ");
console.log("\x1b[37m                               > discord.gg/schemaposse <                                ");
console.log("\x1b[37m v2.0.0                                                                             \n\n");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
    ],

    partials: [
        Partials.Message,
        Partials.Channel
    ]
  });

module.exports = client;

client.slashCommands = new Collection();

const {token} = require("./token.json");

client.login(token);

const evento = require("./handler/Events");

evento.run(client);

require("./handler/index")(client);

process.on('unhandRejection', (reason, promise) => {
    console.log(`🚫 Erro Detectado:\n\n` + reason, promise)
});

process.on('uncaughtException', (error, origin) => {
    console.log(`🚫 Erro Detectado:\n\n` + error, origin)
});
