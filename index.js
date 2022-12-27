require("dotenv").config();
const config = require("./config.js");

const Discord = require("djst-client");
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"],
    prefix: config.prefix,
    initCommands: true
});

// help
client.generateHelpCommand();

// command sendiri - simple
client.createCommand({
    name: "hello",
    aliases: ["halo"],
    cooldown: 5,
    description: "Simple command",
    execute: async (messange, args, bot) => {
        message.channel.send("World!")
    }
})

client.on("ready", () => {
    console.log("Ready");
})

client.login(process.env.TOKEN); 